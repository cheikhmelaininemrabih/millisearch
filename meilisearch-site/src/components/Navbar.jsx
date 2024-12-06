import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWater } from '@fortawesome/free-solid-svg-icons'; 

const Navbar = () => {
  return (
    <nav className="p-4 flex justify-between items-center bg-blue-700 bg-opacity-70 backdrop-blur-md shadow-lg rounded-lg text-white">
      <div className="flex items-center gap-2">
        <FontAwesomeIcon
          icon={faWater}
          className="text-3xl text-teal-400 animate-pulse"
        />
        <h1 className="text-2xl font-bold text-white hover:text-teal-300 transition duration-300 ease-in-out transform hover:scale-110">Millisearch</h1>
      </div>
      <div className="flex items-center gap-6">
        <Link to="/" className="text-white hover:text-teal-300 transition duration-300">Home</Link>
        <Link to="/propo" className="text-white hover:text-teal-300 transition duration-300">Propo Page</Link>
        <button className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-lg transition duration-300 transform hover:scale-105">
          Dark Mode
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
