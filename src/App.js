import logo from './logo.svg';
import './App.css';

import Navbar from './components/navbar/Nav'
import IntroSection from './components/intro-section/Intro'
import MailSection from './components/mail-section/Form'
import EduSection from './components/Education-section/Edu'
import ProjectsSection from './components/project-section/Projects'

function App() {
  return (
  <div>
    <Navbar/>
    <IntroSection/>
    <EduSection/>
    <ProjectsSection/>
    <hr/>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          >
          Learn React
        </a>
      </header>
      <MailSection/>
    </div>
  </div>
  );
}

export default App;
