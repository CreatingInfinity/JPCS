import { useState, useRef } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import ThankYou from './components/ThankYou';
import Login from './components/authAdmin/Login';
import Dashboard from './components/authAdmin/dashboardJPCS/Dashboard';


import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Contact from './components/Contact';
import CastingAgency from './components/EmploymentServices/CastingAgency';
import Personel from './components/EmploymentServices/Personel';
import OnLine from './components/EmploymentServices/OnLine';
import Al from './components/ITServices/AI';
import CyberRisk from './components/ITServices/CyberRisk';
import CyberSecurity from './components/ITServices/CyberSecurity';
import ITSecurity from './components/ITServices/ITSercurity';
import SecuritySystem from './components/ITServices/SecuritySystem';
import SettingUp from './components/ITServices/SettingUp';
import SoftwareInstall from './components/ITServices/SoftwareInstall';

import BusinessSetup from './components/BusinessSetup';
import EmploymentServices from './components/EmploymentServices';
import ITServices from './components/ITServices';
import MarketingStrategies from './components/MarketingStrategies';

import Footer from './components/Footer';
import ContactUsFooter from './components/ContactUsFooter';
import ChatBot from './ChatBot';
import Australia from './components/Australia';
import AustraliaPage from './components/AustraliaPage';
import FormAUS from './components/authAdmin/FormAUS';
import DashboardAUS from './components/authAdmin/dashboardJPCS/DashboardAUS';
import DashboardFilepino from './components/authAdmin/dashboardFilePino/DashboardFilepino';
import DashboardMLhuiller from './components/authAdmin/dashboardFilePino/DashboardMLhuiller';



function AppContent() {
  const location = useLocation();
  const menuRef = useRef(null);

  const isStandalonePage = location.pathname === "/redirectHomePage"  || location.pathname === "/admin"  || location.pathname === "/admin/dashboard" || location.pathname === "/admin/dashboard-Mlhuiller" || location.pathname === "/admin/dashboard-filepino" || location.pathname === "/admin/dashboard-au" || location.pathname === "/AustraliaForm";
  
  
  return (
    <>
      {!isStandalonePage && (
        <nav className='poppins-medium'>
          <NavBar />
        </nav>
      )}


      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/About' element={<About />} />
        <Route path="/admin/" element={<Login />} />
        <Route path='/Services' element={<Services />} />
        <Route path= "/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/dashboard-au" element={<DashboardAUS />} />
        <Route path="/admin/dashboard-filepino" element={<DashboardFilepino />} />
        <Route path="/admin/dashboard-Mlhuiller" element={<DashboardMLhuiller />} />

        <Route path="/Australia" element={<AustraliaPage />} />
        <Route path="/AustraliaForm" element={<FormAUS />} />

        <Route path="/redirectHomePage" element={<ThankYou />} />

        <Route path='/Business' element={<BusinessSetup />} />
        <Route path='/ITServices' element={<ITServices />} />
        <Route path='/EmploymentServices' element={<EmploymentServices />} />
        <Route path='/MarketingStrategies' element={<MarketingStrategies />} />

        {/* Business */}

        {/* Employment */}
        <Route path='/EmploymentServices/CastingAgency' element={<CastingAgency />} />
        <Route path='/EmploymentServices/Personel' element={<Personel />} />
        <Route path='/EmploymentServices/OnLine' element={<OnLine />} />

        {/* IT Services */}
        <Route path='/ITServices/Al' element={<Al />} />
        <Route path='/ITServices/CyberRisk' element={<CyberRisk />} />
        <Route path='/ITServices/CyberSecurity' element={<CyberSecurity />} />
        <Route path='/ITServices/ITSecurity' element={<ITSecurity />} />
        <Route path='/ITServices/SecuritySystem' element={<SecuritySystem />} />
        <Route path='/ITServices/SettingUp' element={<SettingUp />} />
        <Route path='/ITServices/SoftwareInstall' element={<SoftwareInstall />} />

      </Routes>

      {/* <ChatBot /> */}

      {!isStandalonePage && location.pathname !== '/Contact' && location.pathname !== '/Australia' && <ContactUsFooter />}
      {!isStandalonePage && (
        <footer>
          <Footer />
        </footer>
      )}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
