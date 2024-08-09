'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useMenu } from '../context/MenuContext';

import styles from '../styles/index.module.scss';

const Menu: React.FC = () => {
  const { menuOpen, toggleMenu } = useMenu();
  const pathname = usePathname();

  const getMenuItemName = (path: string) => {
    if (pathname === path) {
      return 'Home';
    }

    switch (path) {
      case '/Joyas':
        return 'Catalogo de joyas';
      case '/Fabricacion':
        return 'Fabricacion';
      case '/RelojesYPlata':
        return 'Relojes y Prendas en Plata';
      case '/contacto':
        return 'Contacto';
      default:
        return '';
    }
  };

  const getMenuItemHref = (path: string) => {
    return pathname === path ? '/' : path;
  };

  return (
    <header className={styles.menuContainer}>
      <nav>
        <figure>
          <Image src="/joyerialogo.webp" alt="Logo" width={110} height={35} />
        </figure>
        <button
          onClick={toggleMenu}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <ul>
          <li className={menuOpen ? styles.menuOpen : styles.menuClosed}>
            <Link href={getMenuItemHref('/Joyas')}>{getMenuItemName('/Joyas')}</Link>
          </li>
          <li className={menuOpen ? styles.menuOpen : styles.menuClosed}>
            <Link href={getMenuItemHref('/Fabricacion')}>{getMenuItemName('/Fabricacion')}</Link>
          </li>
          <li className={menuOpen ? styles.menuOpen : styles.menuClosed}>
            <Link href={getMenuItemHref('/RelojesYPlata')}>{getMenuItemName('/RelojesYPlata')}</Link>
          </li>
          <li className={menuOpen ? styles.menuOpen : styles.menuClosed}>
            <Link href={getMenuItemHref('/contacto')}>{getMenuItemName('/contacto')}</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Menu;
