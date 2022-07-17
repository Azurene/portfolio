import React from 'react';

function Nav() {

  return (
    <header className='flex-row px-1 hero'>
      <h2 className="display-5 text-center text-break">
        <a data-testid="link" href="/">
          Jodee Ann Conui
        </a>
      </h2>
      <nav class="link-list">
        <ul>
          <li>
            <a data-testid="about" href="#about">
              About Me
            </a>
          </li>
          <li>
            <a data-testid="portfolio" href="#portfolio">
              Portfolio
            </a>
          </li>
          <li>
            <a data-testid="contact" href="#contact">
              Contact
            </a>
          </li>
          <li>
            <a data-testid="Resume" href="#resume">
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )

}

export default Nav;