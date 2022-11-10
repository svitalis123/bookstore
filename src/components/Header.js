import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import styles from './Header.module.css';

const Header = () => (
  <header className={styles.container}>
    <nav className={styles.container_nav}>
      <h1>
        Bookstore
        <span>
          CMS
        </span>
      </h1>
      <Link to="/" className={styles.container_nav_first}>Books</Link>
      {' '}
      <br />
      <Link to="/categories" className={styles.container_nav_two}>Categories</Link>
    </nav>
    <div className={styles.container}>
      <Avatar>
        <PersonIcon />
      </Avatar>
    </div>
  </header>
);

export default Header;
