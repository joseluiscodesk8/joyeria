'use client'

import { useState } from "react";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaPhone, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import styles from "../styles/index.module.scss";

const Footer: React.FC = () => {
  const [isContactVisible, setIsContactVisible] = useState(false);
  const [isInfoVisible, setIsInfoVisible] = useState(false);

  const toggleContactVisibility = () => {
    setIsContactVisible(!isContactVisible);
  };

  const toggleInfoVisibility = () => {
    setIsInfoVisible(!isInfoVisible);
  };

  return (
    <footer className={styles.footer}>
      <picture>
        <Image src="/joyerialogo.webp" alt="Logo" width={120} height={35} />
      </picture>

      <section className={styles.contactInfo}>
        <h3 onClick={toggleContactVisibility} style={{ cursor: 'pointer' }}>
          Contactos
        </h3>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: isContactVisible ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          style={{ overflow: 'hidden' }}
        >
          <address>
            <a href="tel:+1234567890">
              <FaPhone /> +1234567890
            </a>
            <a href="mailto:info@example.com">
              <FaEnvelope /> info@example.com
            </a>
          </address>
          <div className={styles.socialMedia}>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
        </motion.div>
      </section>

      <nav className={styles.info}>
        <h3 onClick={toggleInfoVisibility} style={{ cursor: 'pointer' }}>
          Información
        </h3>
        <motion.ul
          initial={{ height: 0 }}
          animate={{ height: isInfoVisible ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          style={{ overflow: 'hidden' }}
        >
          <li><a href="/terminos-condiciones">Términos y Condiciones</a></li>
          <li><a href="/politicas-privacidad">Políticas de Privacidad</a></li>
          <li><a href="/politicas-envio">Políticas de Envío</a></li>
          <li><a href="/faq">FAQ</a></li>
        </motion.ul>
      </nav>

      <section className={styles.copyright}>
        <p>Copyright©2024 Alpha Trading. All Rights Reserved</p>
        <p>Powered by Logoscorp</p>
      </section>
    </footer>
  );
};

export default Footer;