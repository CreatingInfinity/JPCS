import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'


function App() {

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
