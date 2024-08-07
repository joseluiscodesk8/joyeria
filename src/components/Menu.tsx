'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { FaBars, FaTimes } from 'react-icons/fa';

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
          <li className={menuOpen ? styles.menuOpen : styles.menuClosed}><Link href="/joyas">Catalogo de joyas</Link></li>
          <li className={menuOpen ? styles.menuOpen : styles.menuClosed}><Link href="#relojes">Fabricacion</Link></li>
          <li className={menuOpen ? styles.menuOpen : styles.menuClosed}><Link href="#accesorios">Relojes y  Prendas en Plata</Link></li>
          <li className={menuOpen ? styles.menuOpen : styles.menuClosed}><Link href="#contacto">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;