import React from 'react';
import NavBar from '../components/NavBar.jsx';
import Hero from '../components/Hero.jsx';
import MoreInfo from '../components/MoreInfo.jsx';
import Footer from '../components/Footer.jsx';
import Industries from '../components/Industries.jsx';

const HomePage = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Hero />
      <MoreInfo />
      <Industries />
      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
