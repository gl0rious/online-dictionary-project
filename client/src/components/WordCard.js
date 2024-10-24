import React from 'react';

const WordCard = ({ wordInfo }) => {
    return (
        <div className="w-full bg-white border border-gray-200 p-4 transition-colors duration-200 hover:bg-gray-100">
            <h2 className="text-xl font-bold text-black">{wordInfo.word}</h2>
            <h3 className="text-gray-500 text-sm">{wordInfo.wordtype}</h3>
            <p className="mt-2 text-gray-700">{wordInfo.definition}</p>
        </div>
    );
};

export default WordCard;
