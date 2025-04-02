import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'


function App() {

  return (
    <>
      <nav className='poppins-medium '>
        <NavBar />
      </nav>
      <Hero />
      <Highlights />
      
    </>
  )
}

export default App
