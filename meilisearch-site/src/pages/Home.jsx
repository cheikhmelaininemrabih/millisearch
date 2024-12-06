import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';
import Chatbot from '../components/Chatbot';

const Home = () => {
  const [results, setResults] = useState([]);

  return (
    <div className="relative flex justify-center h-screen text-white overflow-hidden bg-gradient-to-b from-blue-900 via-teal-700 to-cyan-500">
      {/* Main Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
        <h1 className="text-5xl mb-6 font-extrabold tracking-widest text-shadow-lg animate-fade-down">
          Search Quest About <span className="text-cyan-200">Race for Water</span>
        </h1>
        <p className="text-lg mb-6 text-teal-200 animate-fade-up">
          Dive deep into the world of knowledge and explore what matters.
        </p>
        <div className="space-y-6">
          <SearchBar setResults={setResults} />
          <SearchResults results={results} />
          <Chatbot />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-16 h-16 bg-teal-400 rounded-full blur-xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-10 right-20 w-24 h-24 bg-cyan-500 rounded-full blur-2xl opacity-40 animate-bounce"></div>
    </div>
  );
};

export default Home;
