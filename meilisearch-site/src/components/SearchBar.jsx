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
    <input
      type="text"
      value={query}
      onChange={handleSearch}
      placeholder="Search..."
      className="p-2 border rounded w-full"
    />
  );
};

export default SearchBar;
