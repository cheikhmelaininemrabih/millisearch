import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';

const Home = () => {
  const [results, setResults] = useState([]);

  return (
    <div className="p-4">
      <h1 className="text-center text-4xl mb-4">Search Quest</h1>
      <SearchBar setResults={setResults} />
      <SearchResults results={results} />
    </div>
  );
};

export default Home;
