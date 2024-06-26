import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from './navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.container}>
      <div className={styles.logo}>
        <a href="#"><img src="./images/logo.png" alt="logo" /></a>
      </div>
      <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
        <ul>
          <li><a href="#">Menu</a></li>
          <li><a href="#">Location</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      
      <div className={styles.bars} onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}

export default Navbar;
