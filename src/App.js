// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
  return (
    <div>
      <Router>
        <Nav />
        <main>
          <Routes>
            <Route path='/'
              element={<About />}
            />
            <Route
              path="/portfolio"
              element={<About />}
            />
            <Route
              path='/portfolio/portfolio'
              element={<Portfolio />}
            />
            <Route
              path='/portfolio/contact'
              element={<Contact />}
            />
            <Route
              path='/porfolio/resume'
              element={<Resume />}
            />
          </Routes>
        </main>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
