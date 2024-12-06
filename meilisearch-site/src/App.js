import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PropoPage from './pages/PropoPage'; // Import the new PropoPage component

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/propo" element={<PropoPage />} /> {/* Add route for PropoPage */}
      </Routes>
    </Router>
  );
};

export default App;
