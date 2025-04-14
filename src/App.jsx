import { useState, useRef } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Blueprinting from './components/BusinessSetup/Blueprinting';
import DocumentEditing from './components/BusinessSetup/DocumentEditing';
import DocumentSetup from './components/BusinessSetup/DocumentSetup';
import Contact from './components/Contact';
import Duplicating from './components/BusinessSetup/Duplicating';
import Photocopying from './components/BusinessSetup/Photocopying';
import Provision from './components/BusinessSetup/Provision';
import Resume from './components/BusinessSetup/Resume';
import SecretarialSupport from './components/BusinessSetup/SecretarialSupport';
import Transcription from './components/BusinessSetup/Transcription';
import Typography from './components/BusinessSetup/Typography';
import CastingAgency from './components/EmploymentServices/CastingAgency';
import Personel from './components/EmploymentServices/Personel';
import OnLine from './components/EmploymentServices/OnLine';
import Al from './components/ITServices/AI';
import CyberRisk from './components/ITServices/CyberRisk';


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
        <Route path='/Business/DocumentEditing' element={<DocumentEditing />}/>
        <Route path='/Business/DocumentSetup' element={<DocumentSetup />}/>
        <Route path='/Business/Duplicating' element={<Duplicating />}/>
        <Route path='/Business/Photocopying' element={<Photocopying />}/>
        <Route path='/Business/Provision' element={<Provision />}/>
        <Route path='/Business/Resume' element={<Resume />}/>
        <Route path='/Business/SecretarialSupport' element={<SecretarialSupport />}/>
        <Route path='/Business/Transcription' element={<Transcription />}/>
        <Route path='/Business/Typography' element={<Typography />}/>
        <Route path='/EmploymentServices/CastingAgency' element={<CastingAgency />}/>
        <Route path='/EmploymentServices/Personel' element={<Personel />}/>
        <Route path='/EmploymentServices/OnLine' element={<OnLine />}/>
        <Route path='/ITServices/Al' element={<Al />}/>
        <Route path='/ITServices/CyberRisk' element={<CyberRisk />}/>
      </Routes>
    </Router>
  );
};

export default App;
