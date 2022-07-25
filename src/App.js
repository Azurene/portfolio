// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  const [tab] = useState([
    "About",
    "Portfolio",
    "Contact",
    "Resume"
  ])

  const [currentTab, setCurrentTab] = useState(tab[0]);

  return (
    <div>
      <Nav
        tab={tab}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      ></Nav>
      <main>
        {currentTab === "About" && <About></About>}
        {currentTab === "Portfolio" && <Portfolio></Portfolio>}
        {currentTab === "Contact" && <Contact></Contact>}
        {currentTab === "Resume" && <Resume></Resume>}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
