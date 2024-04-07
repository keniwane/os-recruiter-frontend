import { Link } from 'react-router-dom';
import { NavBarLinks } from '../constants/index';
import OSRIcon from '/osr-logo.jpg';
import MobileMenu from './MobileMenu';
import './NavBar.css';
import React from 'react';

const NavBar = () => {
  return (
    <div className='header'>
      <div className='container'>
        <div className='wrapper'>
          <div className='header-right'>
            <Link className='logo-icon' to={`/os-recruiter-frontend/`}>
              <img className='logo-img' src={OSRIcon} alt='OSR Logo' />
            </Link>
            <div className='header-title'>
              <h1 className='header-title-text'>
                Open Source Recruiter <br />
              </h1>
              <p className='bottom-header-text'>Employment Solutions</p>
            </div>
          </div>

          <div className='nav-links'>
            {NavBarLinks.map((link) => (
              <Link className='nav-link-item' key={link.id} to={`${link.url}`}>
                {link.name}
              </Link>
            ))}
          </div>
          <MobileMenu links={NavBarLinks} />
          <Link className='header-button button' to={`/os-recruiter-frontend/contact`}>
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
