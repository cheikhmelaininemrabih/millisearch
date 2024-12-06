import React, { useState } from 'react';
import { searchIndex } from '../services/meilisearch';

const SearchBar = ({ setResults }) => {
  const [query, setQuery] = useState('');

  const handleSearch = async (e) => {
    setQuery(e.target.value);
    if (e.target.value) {
      const res = await searchIndex.search(e.target.value, {
        limit: 10,
        attributesToHighlight: ['*'],
      });
      setResults(res.hits);
    } else {
      setResults([]);
    }
  };

  return (
    <div className="relative w-full">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search for topics, keywords..."
        className="w-full p-4 rounded-lg bg-white text-ocean-800 placeholder-ocean-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-ocean-400 transition duration-200"
      />
      {query && (
        <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-ocean-500">
          🔍
        </span>
      )}
    </div>
  );
};

export default SearchBar;
