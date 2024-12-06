import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import DarkModeToggle from './DarkModeToggle';

const Navbar = () => {
  return (
    <nav className="p-4 flex justify-between items-center bg-blue-500 text-white dark:bg-gray-900">
      <h1 className="text-xl">Millisearch</h1>
      <DarkModeToggle />
    </nav>
  );
};

export default Navbar;


