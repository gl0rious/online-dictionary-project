import React, { useEffect, useState } from 'react';
import WordCard from './WordCard';
import { searchWords } from '../api.js';

const ResultsComponent = ({ query }) => {
    const [results, setResults] = useState([]);

    useEffect(() => {
        console.log("inside useffect" + query);

        const fetchSearchWords = async (query) => {
            try {
                const data = await searchWords(query);
                setResults(data);
                console.log("Search results:", data);
            } catch (error) {
                console.error("Error fetching search results:", error);
            }
        };
        fetchSearchWords(query);
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Search Results</h1>
            {results.length === 0 ? (
                <p className="text-lg text-gray-600">No results found</p>
            ) : (
                <div className="flex flex-col space-y-4">
                    {results.map((wordInfo) => (
                        <WordCard key={wordInfo._id} wordInfo={wordInfo} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default ResultsComponent;
