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
      <nav>
        <figure>
          <Image src="/joyerialogo.webp" alt="Logo" width={110} height={5} />
        </figure>
        <button
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <ul>
          <li className={menuOpen ? styles.menuOpen : styles.menuClosed}><a href="#joyas">Catalogo de joyas</a></li>
          <li className={menuOpen ? styles.menuOpen : styles.menuClosed}><a href="#relojes">Fabricacion</a></li>
          <li className={menuOpen ? styles.menuOpen : styles.menuClosed}><a href="#accesorios">Ventas al por mayor</a></li>
          <li className={menuOpen ? styles.menuOpen : styles.menuClosed}><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;