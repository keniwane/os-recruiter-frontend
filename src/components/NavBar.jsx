import { Link } from 'react-router-dom';
import OSRIcon from '/osr-logo.jpg';
import MobileMenu from './MobileMenu';
import './NavBar.css';

const NavBar = () => {
  const links = [
    { id: 'home', name: 'Home', link: '/' },
    { id: 'jobs', name: 'Jobs', link: 'https://www.osrjobs.com' },
    { id: 'courses', name: 'Courses', link: 'https://skillyah.com/courses' },
    { id: 'about-us', name: 'About Us', link: '/about' },
    { id: 'blog', name: 'Blog', link: '/blog' },
  ];

  return (
    <div className='header'>
      <div className='container'>
        <div className='wrapper'>
          <div className='header-right'>
            <Link className='logo-icon' to={`/`}>
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
            {links.map((link) => (
              <Link className='nav-link-item' key={link.id} to={`${link.link}`}>
                {link.name}
              </Link>
            ))}
          </div>
          <MobileMenu links={links} />
          <button className='button header-button'>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
