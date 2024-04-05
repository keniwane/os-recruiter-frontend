import React from 'react';
import NavBar from '../components/NavBar';
import Candidate from '../components/Candidate';
import Footer from '../components/Footer';

const Candidates = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Candidate />
      <Footer />
    </React.Fragment>
  );
};

export default Candidates;
