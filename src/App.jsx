import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import ITServices from './components/ITServices';

const App = () => {
  return (
    <Router>
      <nav className='poppins-medium '>
        <NavBar />
      </nav>
      <Routes>
        <Route path="/home" element={<Hero />} />
        <Route path='/IT' element={<ITServices />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
