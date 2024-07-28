'use client'

import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import styles from '../styles/index.module.scss';

const Menu: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={styles.menuContainer}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Image src="/joyerialogo.webp" alt="Logo" width={110} height={5} />
        </div>
        <button
          className={styles.menuIcon}
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <ul className={menuOpen ? styles.menuOpen : styles.menu}>
          <li><a href="#joyas">Joyas</a></li>
          <li><a href="#relojes">Relojes</a></li>
          <li><a href="#accesorios">Accesorios</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;