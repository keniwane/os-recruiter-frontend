import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div>404 Not Found
    {/* client side routing using Link tag */}
    <Link to='/'>Home From Link</Link>
    {/* will cause full HTML refresh using a tag */}
    <a href='/'>Home from A tag</a>
    </div>
  )
}

export default NotFoundPage