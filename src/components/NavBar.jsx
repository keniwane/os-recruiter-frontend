import React from 'react';
import { Link } from 'react-router-dom';
import OSRIcon from '../assets/osr-logo.jpg';

const NavBar = () => {
  const links = ['Jobs', 'Employers', 'Courses', 'Candidates', 'About Us', 'Contact', 'Blog'];

  return (
    <div className=' bg-slate-600'>
      <nav className='flex justify-start'>
        {' '}
        <Link to={`/`}>
          {' '}
          <img src={OSRIcon} />
        </Link>
      </nav>
      <nav className='flex justify-end gap-5'>
        {links.map((link) => (
          <Link key={link} to={`/${link}`}>
            {link}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default NavBar;
