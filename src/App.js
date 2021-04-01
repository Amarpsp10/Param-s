import logo from './logo.svg';
import './App.css';

import Navbar from './components/navbar/Nav'
import IntroSection from './components/intro-section/Intro'
import MailSection from './components/mail-section/Form'
import EduSection from './components/Education-section/Edu'
import ProjectsSection from './components/project-section/Projects'
import ServicesSection from './components/service-section/Services'

function App() {
  return (
  <div>
    <Navbar/>
    <IntroSection/>
    <EduSection/>
    <ProjectsSection/>
    <ServicesSection/>
    <MailSection/>  
  </div>
  );
}

export default App;
