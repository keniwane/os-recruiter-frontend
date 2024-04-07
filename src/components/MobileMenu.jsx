import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MobileMenu = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <div className='mobile-nav'>
        <button
          className='mobile-nav-toggle'
          aria-controls='primary-navigation'
          aria-expanded={isOpen ? 'true' : 'false'}
          onClick={toggleMenu}
        >
          <img className='hamburger-menu' src='/os-recruiter-frontend/hamburger-menu.svg' alt='menu' />
        </button>
        {isOpen && (
          <div className='mobile-links'>
            {links.map((link) => (
              <Link className='nav-link-item' key={link.id} to={`${link.link}`}>
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
      {isOpen && <div className='overlay' onClick={toggleMenu}></div>}
    </>
  );
};

export default MobileMenu;
