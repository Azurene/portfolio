import React, { useEffect } from 'react';

function Nav(props) {
  const {
    tab = [],
    setCurrentTab,
    currentTab
  } = props;

  useEffect(() => {
    document.title = currentTab
  }, [currentTab])

  return (
    <header className='flex-row px-1 hero'>
      <h2 className="display-5 text-center text-break">
        <a data-testid="link" href="/">
          Jodee Ann Conui
        </a>
      </h2>
      <nav className="link-list">
        <ul>
          <li>
            <a className="btn btn-outline-light" data-testid="about" href="#about" onClick={() => setCurrentTab(tab[0])}>
              About Me
            </a>
          </li>
          <li>
            <a className="btn btn-outline-light" data-testid="portfolio" href="#portfolio" onClick={() => setCurrentTab(tab[1])}>
              Portfolio
            </a>
          </li>
          <li>
            <a className="btn btn-outline-light" data-testid="contact" href="#contact" onClick={() => setCurrentTab(tab[2])}>
              Contact
            </a>
          </li>
          <li>
            <a className="btn btn-outline-light" data-testid="Resume" href="#resume" onClick={() => setCurrentTab(tab[3])}>
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )

}

export default Nav;