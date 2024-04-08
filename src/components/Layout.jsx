import React from 'react';
import ScrollToTop from './ScrollToTop';

const Layout = ({ children }) => {
  return (
    <>
      <ScrollToTop />
      {children}
    </>
  );
};

export default Layout;
