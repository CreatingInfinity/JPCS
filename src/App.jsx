import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Blueprinting from './components/BusinessSetup/Blueprinting';

function App() {
  return (
    <Router>
      <nav className='poppins-medium'>
        <NavBar />
      </nav>
      <Routes>
        <Route path="/" element={<Hero />} />

        <Route path='/Business/Blueprinting' element={<Blueprinting />}/>
      </Routes>
    </Router>
  );
};

export default App;
