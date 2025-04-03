import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'



function App() {

  return (
    <>
      <main>
        <nav className='poppins-medium '>
          <NavBar />
        </nav>
        <Hero />
        <Highlights />
      </main>
    </>
  )
}

export default App
