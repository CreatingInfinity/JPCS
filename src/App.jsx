import { useState, useRef } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import ThankYou from './components/ThankYou';
import Login from './components/authAdmin/Login';
import Dashboard from './components/authAdmin/dashboardJPCS/Dashboard';


import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Blueprinting from './components/BusinessSetup/Blueprinting';
import DocumentEditing from './components/BusinessSetup/DocumentEditing';
import DocumentSetup from './components/BusinessSetup/DocumentSetup';
import Contact from './components/Contact';
import Duplicating from './components/BusinessSetup/Duplicating';
import Provision from './components/BusinessSetup/Provision';
import SecretarialSupport from './components/BusinessSetup/SecretarialSupport';
import Transcription from './components/BusinessSetup/Transcription';
import Typography from './components/BusinessSetup/Typography';
import UnlimitedVisa from './components/BusinessSetup/UnlimitedVisa';
import Wide from './components/BusinessSetup/Wide';
import Corporate from './components/BusinessSetup/Corporate';
import Vip from './components/BusinessSetup/Vip';
import Dependent from './components/BusinessSetup/Dependent';
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

import Advice from './components/MarketingStrategies/Advice';
import CargoFreight from './components/MarketingStrategies/CargoFreight';
import Desing from './components/MarketingStrategies/Desing';
import DigitalContent from './components/MarketingStrategies/DigitalContent';
import HealthManagement from './components/MarketingStrategies/HealthManagement';
import HospitalityConsultancy from './components/MarketingStrategies/HospitalityConsultancy';
import ImmigrationConsultancy from './components/MarketingStrategies/ImmigrationConsultancy';
import Lobbying from './components/MarketingStrategies/Lobbying';
import Logistic from './components/MarketingStrategies/Logistic';
import MarketingConsultancy from './components/MarketingStrategies/MarketingConsultancy';
import ProcurementConsulting from './components/MarketingStrategies/ProcurementConsulting';
import ProjectManagement from './components/MarketingStrategies/ProjectManagement';
import PublicRelationManagement from './components/MarketingStrategies/PublicRelationManagement';
import QualityConsultancy from './components/MarketingStrategies/QualityConsultancy';
import Strategy from './components/MarketingStrategies/Strategy';
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
        <Route path='/Business/Blueprinting' element={<Blueprinting />} />
        <Route path='/Business/DocumentEditing' element={<DocumentEditing />} />
        <Route path='/Business/DocumentSetup' element={<DocumentSetup />} />
        <Route path='/Business/Duplicating' element={<Duplicating />} />
        <Route path='/Business/Provision' element={<Provision />} />
        <Route path='/Business/SecretarialSupport' element={<SecretarialSupport />} />
        <Route path='/Business/Transcription' element={<Transcription />} />
        <Route path='/Business/Typography' element={<Typography />} />
        <Route path='/Business/UnlimitedVisa' element={<UnlimitedVisa />} />
        <Route path='/Business/Wide' element={<Wide />} />
        <Route path='/Business/Corporate' element={<Corporate />} />
        <Route path='/Business/Vip' element={<Vip />} />
        <Route path='/Business/Dependent' element={<Dependent />} />

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

        {/* Marketing Strategies */}
        <Route path='/MarketingStrategies/Advice' element={<Advice />} />
        <Route path='/MarketingStrategies/CargoFreight' element={<CargoFreight />} />
        <Route path='/MarketingStrategies/Desing' element={<Desing />} />
        <Route path='/MarketingStrategies/DigitalContent' element={<DigitalContent />} />
        <Route path='/MarketingStrategies/HealthManagement' element={<HealthManagement />} />
        <Route path='/MarketingStrategies/HospitalityConsultancy' element={<HospitalityConsultancy />} />
        <Route path='/MarketingStrategies/ImmigrationConsultancy' element={<ImmigrationConsultancy />} />
        <Route path='/MarketingStrategies/Lobbying' element={<Lobbying />} />
        <Route path='/MarketingStrategies/Logistic' element={<Logistic />} />
        <Route path='/MarketingStrategies/MarketingConsultancy' element={<MarketingConsultancy />} />
        <Route path='/MarketingStrategies/ProcurementConsulting' element={<ProcurementConsulting />} />
        <Route path='/MarketingStrategies/ProjectManagement' element={<ProjectManagement />} />
        <Route path='/MarketingStrategies/PublicRelationManagement' element={<PublicRelationManagement />} />
        <Route path='/MarketingStrategies/QualityConsultancy' element={<QualityConsultancy />} />
        <Route path='/MarketingStrategies/Strategy' element={<Strategy />} />
      </Routes>

      <ChatBot />

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
