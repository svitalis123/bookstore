import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav>
    <Link to="/"><a href="javascript;void()">Books</a></Link>
    {' '}
    <br />
    <Link to="/categories"><a href="javascript;void()">Categories</a></Link>
  </nav>
);

export default Header;
