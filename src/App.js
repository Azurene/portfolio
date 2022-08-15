// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';

// import components
import Nav from './components/Nav';
import Footer from './components/Footer';

// import pages
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

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
