import { useState, useRef } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Blueprinting from './components/BusinessSetup/Blueprinting';
import Contact from './components/Contact';

function App() {
  const menuRef = useRef(null);

  return (
    <Router>
      <nav className='poppins-medium'>
        <NavBar />
      </nav>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path='/Contact' element={<Contact />}/>
        <Route path='/Business/Blueprinting' element={<Blueprinting />}/>
      </Routes>
    </Router>
  );
};

export default App;
