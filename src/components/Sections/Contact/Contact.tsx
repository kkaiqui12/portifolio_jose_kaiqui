import React from 'react';
import styles from './Contact.module.css';
import { FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';

const Contact = () => {
  return (
    <section className={styles.contactSection}>
      <div className={styles.presentation}>
        <h1>Entre em Contato</h1>
        <div className={styles.contactGrid}>
          {/* WhatsApp */}
          <a 
            href="https://wa.me/9999999999" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.contactItem}
          >
            <FaWhatsapp className={styles.contactIcon} />
            <span>WhatsApp</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/SEUPERFIL"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactItem}
          >
            <FaLinkedin className={styles.contactIcon} />
            <span>LinkedIn</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/SEUUSER"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactItem}
          >
            <FaGithub className={styles.contactIcon} />
            <span>GitHub</span>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/SEUUSER"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactItem}
          >
            <FiInstagram className={styles.contactIcon} />
            <span>Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

