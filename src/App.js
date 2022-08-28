// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import './App.css';

// import components
import Nav from './components/Nav';
import Footer from './components/Footer';

// import pages
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {

  return (
<<<<<<< HEAD
    <ApolloProvider client={client}>
      <div>
        <Router basename='portfolio'>
          <Nav />
          <main>
            <Routes>
              <Route
                path="/"
                element={<About />}
              />
              <Route
                path='/portfolio'
                element={<Portfolio />}
              />
              <Route
                path='/contact'
                element={<Contact />}
              />
              <Route
                path='/resume'
                element={<Resume />}
              />
            </Routes>
          </main>
        </Router>
        <Footer />
      </div>
    </ApolloProvider>
=======
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
              path='/portfolio/resume'
              element={<Resume />}
            />
          </Routes>
        </main>
      </Router>
      <Footer />
    </div>
>>>>>>> ed5f528 (fix typo)
  );
}

export default App;
