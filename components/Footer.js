import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <p className={styles.copyright}>&copy; {new Date().getFullYear()} CNE Best Photo and Print. All rights reserved.</p>
        </div>
        <div className={styles.socialLinks}>
          <a href="#" className={styles.socialLink}><FaFacebook size={24} /></a>
          <a href="#" className={styles.socialLink}><FaInstagram size={24} /></a>
          <a href="#" className={styles.socialLink}><FaTwitter size={24} /></a>
        </div>
      </div>
    </footer>
  );
}