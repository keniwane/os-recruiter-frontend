import { Link } from 'react-router-dom';
import { FooterLinks } from '../constants/index';
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='primary-footer'>
      <div className='container'>
        <div className='primary-footer-wrapper'>
          <div className='primary-footer-logo-social'>
            <div className='footer-logo'>
              <Link className='footer-logo-icon' to={`/`}>
                <img className='logo-img' src='osr-logo.jpg' alt='OSR Logo' />
              </Link>
              <div className='footer-title'>
                <h1 className='footer-title-text'>
                  Open Source Recruiter <br /> <p>Employment Solutions</p>
                </h1>
              </div>
            </div>
            <ul className='social-list' role='list' aria-label='Social links'>
              <li>
                <Link aria-label='facebook' href='#'>
                  <svg className='social-icon'>
                    <use xlinkHref='social-icons.svg#icon-facebook'></use>
                  </svg>
                </Link>
              </li>
              <li>
                <Link aria-label='youtube' href='#'>
                  <svg className='social-icon'>
                    <use xlinkHref='social-icons.svg#icon-youtube'></use>
                  </svg>
                </Link>
              </li>
              <li>
                <Link aria-label='twitter' href='#'>
                  <svg className='social-icon'>
                    <use xlinkHref='social-icons.svg#icon-twitter'></use>
                  </svg>
                </Link>
              </li>
              <li>
                <Link aria-label='instagram' href='#'>
                  <svg className='social-icon'>
                    <use xlinkHref='social-icons.svg#icon-instagram'></use>
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
          <div className='primary-footer-nav'>
            <ul className='footer-nav'>
              {FooterLinks.map((link) => (
                <li key={link.id}>
                  <Link className='nav-link-item' to={`${link.url}`}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='primary-footer-form'>
            <form action=''>
              <input type='email' placeholder='email' />
              <button className='button' data-shadow='none'>
                Subscribe
              </button>
            </form>
            <p>Copyright © 2024 OSR. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
