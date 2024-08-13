import React from "react";
import Image from "next/image";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import styles from "../styles/index.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <picture>
      <Image src="/joyerialogo2.webp" alt="Logo" width={110} height={35} />
      </picture>
      <div>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook/>
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
      <section className="footer__section">
        <h3>Contactos</h3>
        <h3>Información</h3>
      </section>
    </footer>
  );
};

export default Footer;
