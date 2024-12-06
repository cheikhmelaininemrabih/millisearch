import React, { useState } from 'react';
import { searchIndex } from '../services/meilisearch';

const SearchBar = ({ setResults }) => {
  const [query, setQuery] = useState('');
  const [sortBy, setSortBy] = useState('');

  const handleSearch = async () => {
    if (!query.trim()) {
      alert('Please enter a search query!');
      return;
    }

    const res = await searchIndex.search(query, {
      limit: 10,
      sort: sortBy ? [`${sortBy}:desc`] : [],
    });

    setResults(res.hits);

    // Save to search history
    const history = JSON.parse(localStorage.getItem('searchHistory')) || [];
    if (!history.includes(query)) {
      localStorage.setItem('searchHistory', JSON.stringify([...history, query]));
    }
  };

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded shadow-md">
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className="flex-1 p-2 border rounded w-full shadow focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
        />
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="p-2 border rounded shadow bg-white dark:bg-gray-700 dark:text-white"
        >
          <option value="">Sort By</option>
          <option value="title">Title</option>
          <option value="date">Date</option>
        </select>
        <button
          onClick={handleSearch}
          className="p-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition-colors"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
