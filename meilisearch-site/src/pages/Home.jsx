import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';
import Chatbot from '../components/Chatbot';

const Home = () => {
  const [results, setResults] = useState([]);

  return (
    <div className="flex justify-center h-screen pt-10 bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl mb-4">Search Quest about Race for Water</h1>
        <SearchBar setResults={setResults} />
        <SearchResults results={results} />
        
        {/* Add the Chatbot here */}
        <Chatbot />
      </div>
    </div>
  );
};

export default Home;
