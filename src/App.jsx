import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';

const App = () => {
  return (
    <Router>
      <nav className='poppins-medium '>
        <NavBar />
      </nav>
      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>
      <Highlights />
    </Router>
  );
};

export default App;
