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
