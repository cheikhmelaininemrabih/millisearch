import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';

const Home = () => {
  const [results, setResults] = useState([]);

  return (
    <div className="flex justify-center h-screen pt-10 bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl mb-4">Search Quest</h1>
        <SearchBar setResults={setResults} />
        <SearchResults results={results} />
      </div>
    </div>
  );
};

export default Home;
