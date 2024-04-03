import React from 'react';
import NavBar from '../components/NavBar.jsx';
import Hero from '../components/Hero.jsx';
import MoreInfo from '../components/MoreInfo.jsx';
import Footer from '../components/Footer.jsx';
import Industries from '../components/Industries.jsx';
import Clients from '../components/Clients.jsx';

const HomePage = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Hero />
      <Industries />
      <MoreInfo />
      <Clients />
      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
