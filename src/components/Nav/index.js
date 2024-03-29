import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {

  return (
    <header className='flex-row px-1 hero'>
      <h2 className="display-5 text-center text-break">
          Jodee Ann Conui
      </h2>
      <p className='text-center text-break'>WARNING: This website is a work in progress, some functionality may not yet be present.</p>
      <nav className="link-list">
        <ul>
          <li>
            <Link to='/' className="btn btn-outline-light">
              About Me
            </Link>
          </li>
          <li>
            <Link to='/cv' className="btn btn-outline-light">
            Curriculum Vitae
            </Link>
          </li>
          <li>
            <Link to='/portfolio' className="btn btn-outline-light">
              Portfolio
            </Link>
          </li>
          {/* <li>
            <Link to='/contact' className="btn btn-outline-light">
              Contact
            </Link>
          </li> */}
        </ul>
      </nav>
    </header>
  )

}

export default Nav;