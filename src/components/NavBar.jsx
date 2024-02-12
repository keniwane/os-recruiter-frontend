import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
  const links = ['Jobs', 'Employers', 'Courses', 'Candidates', 'About Us', 'Contact', 'Blog']

  return (
    <h1 className='flex'>
      {links.map((link) => (
        <Link key={link} to={`/${link}`}>{link}</Link>
      ))}
    </h1>
  )
}

export default NavBar