import ScrollToTop from './ScrollToTop';
import React from 'react';

const Layout = ({ children }) => {
  return (
    <>
      <ScrollToTop />
      {children}
    </>
  );
};

export default Layout;
