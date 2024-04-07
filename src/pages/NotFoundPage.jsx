import { Link } from 'react-router-dom';
import React from 'react';

const NotFoundPage = () => {
  return (
    <div>
      404 Not Found <br />
      <Link to='/'>Back to Home Click Here!</Link>
    </div>
  );
};

export default NotFoundPage;
