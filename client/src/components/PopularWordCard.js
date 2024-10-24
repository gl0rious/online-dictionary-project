import React from 'react';

const PopularWordCard = ({ rank, word, count }) => {
    return (
        <div className="max-w-full p-4 border-none flex space-x-2 items-center">
            <p className="text-gray-500">{rank.toString().padStart(2, '0')}</p>
            <p className="font-bold">{word}</p>
            <p className="text-gray-500">({count})</p>
        </div>
    );
};

export default PopularWordCard;
