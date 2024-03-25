import { useState } from 'react';
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
          <img className='hamburger-menu' src='/hamburger-menu.svg' alt='menu' />
        </button>
        {isOpen && (
          <div className='mobile-links'>
            {links.map((link) => (
              <Link className='nav-link-item' key={link} to={`/${link.replace(/\s+/g, '').toLowerCase()}`}>
                {link}
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
