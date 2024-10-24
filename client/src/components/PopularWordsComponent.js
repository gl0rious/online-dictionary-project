import React, { useEffect, useState } from 'react';
import { fetchPopularWords } from '../api';
import PopularWordCard from './PopularWordCard';

const updateInSeconds = 25;

const PopularWordsComponent = () => {
    const [popularWords, setPopularWords] = useState([]);
    const [counter, setCounter] = useState(updateInSeconds);

    const updatePopularWords = async () => {
        setCounter(updateInSeconds);
        try {
            const data = await fetchPopularWords();
            const sortedWords = data.sort((a, b) => b.count - a.count);
            setPopularWords(sortedWords);
        } catch (error) {
            console.error('Error fetching popular words:', error);
        }
    };

    useEffect(() => {
        updatePopularWords();

        const intervalId = setInterval(updatePopularWords, updateInSeconds * 1000);
        const countdownId = setInterval(() => {
            setCounter((prevCounter) => (prevCounter > 0 ? prevCounter - 1 : prevCounter));
        }, 1000);

        return () => {
            clearInterval(intervalId);
            clearInterval(countdownId);
        };
    }, []);

    return (
        <div className="max-w-screen-xl mx-auto p-4">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">Popular Search</h2>
                <div className="text-gray-600 text-sm">Updating in {counter} seconds</div>
            </div>
            {popularWords.length === 0 ? (
                <p>No popular words found.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {popularWords.map((word, index) => (
                        <PopularWordCard
                            key={word._id}
                            rank={index + 1}
                            word={word.word}
                            count={word.count}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default PopularWordsComponent;
