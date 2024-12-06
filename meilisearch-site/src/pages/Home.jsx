import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';

const Home = () => {
  const [results, setResults] = useState([]);
  const [history, setHistory] = useState(
    JSON.parse(localStorage.getItem('searchHistory')) || []
  );

  return (
    <div>
      <h3 className="text-lg font-bold">Search History</h3>
      <ul>
        {history.map((item, index) => (
          <li key={index} className="text-gray-700 dark:text-gray-300">
            {item}
          </li>
        ))}
      </ul>
      <SearchBar setResults={setResults} />
      <SearchResults results={results} />
    </div>
  );
};


export default Home;
