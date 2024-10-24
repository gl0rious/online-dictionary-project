import React, { useState } from 'react';

const SearchForm = ({ onSearch, onClear }) => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        console.log('search  : ' + query);
        onSearch(query.trim());
    };

    const handleClear = () => {
        setQuery('');
        onClear();
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };


    return (
        <div className="flex items-center space-x-4">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search for a word..."
                className="px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                onClick={handleSearch}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                Lookup
            </button>
            <button
                onClick={handleClear}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
                Clear
            </button>
        </div>
    );
};

export default SearchForm;
