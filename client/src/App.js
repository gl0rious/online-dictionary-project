import React, { useState } from 'react';
import SearchForm from './components/SearchForm';
import ResultsComponent from './components/ResultsComponent';
import PopularWordsComponent from './components/PopularWordsComponent';

const App = () => {
  const [query, setQuery] = useState([]);
  const [showPopularWords, setShowPopularWords] = useState(true);

  const handleSearch = async (query) => {
    console.log("handleSearch " + query);

    if (query.trim()) {
      setQuery(query.trim());
      setShowPopularWords(false);
    } else {
      setQuery("");
      setShowPopularWords(true);
    }
  };

  const handleClear = () => {
    setQuery("");
    setShowPopularWords(true);
    console.log("Search cleared");
  };

  return (
    <div className="p-6">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-center text-blue-600">WAP Online Dictionary</h1>
      </header>
      <SearchForm onSearch={handleSearch} onClear={handleClear} />
      {showPopularWords ? (
        <PopularWordsComponent />
      ) : (
        <ResultsComponent query={query} />
      )}
    </div>
  );
};

export default App;
