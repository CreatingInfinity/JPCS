import { useState, useRef } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const menuRef = useRef(null);

  return (
    <Router>
      <nav className='poppins-medium'>
        <NavBar />
      </nav>
      <Routes>
        <Route path="/" element={<Hero menuRef={menuRef} />} />
      </Routes>
    </Router>
  );
};

export default App;
