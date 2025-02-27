import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { VscHome, VscAccount } from 'react-icons/vsc';
import { FiUser } from 'react-icons/fi';
import { BsCode } from 'react-icons/bs';
import { 
  MdOutlineDashboard, 
  MdOutlineContactPage,
  MdEmail 
} from 'react-icons/md';
import { AiFillInstagram, AiFillYoutube } from 'react-icons/ai';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand ff-jost fw-600">
          ATREUS-VERSE
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link" end>
                <VscHome className='icon-spacing'/>
                <span>Home</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link">
                <FiUser className='icon-spacing'/>
                <span>About</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/skills" className="nav-link">
                <BsCode className='icon-spacing'/>
                <span>Content</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/mywork" className="nav-link">
                <MdOutlineDashboard className='icon-spacing'/>
                <span>Updates</span>
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#contact" role="button" data-bs-toggle="dropdown">
                <MdOutlineContactPage className='icon-spacing'/>
                <span>Contact</span>
              </a>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <a className="dropdown-item" href="mailto:gohilyagnik3@email.com" target="_blank" rel="noreferrer">
                    <MdEmail className='icon-spacing'/> Email
                  </a>
                </li>
                <li><hr className="dropdown-divider"/></li>
                <li>
                  <a className="dropdown-item" href="https://www.instagram.com/artimis_the_ebony_dragon?igsh=ZWFzbDJtOGFybTZ4" target="_blank" rel="noreferrer">
                    <AiFillInstagram className='icon-spacing'/> Instagram
                  </a>
                </li>
                <li><hr className="dropdown-divider"/></li>
                <li>
                  <a className="dropdown-item" href="https://youtube.com/@artimisatreus8585?si=KSBbCI9DyImanZD5l" target="_blank" rel="noreferrer">
                    <AiFillYoutube className='icon-spacing'/> YouTube
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;