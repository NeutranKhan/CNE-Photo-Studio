'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/appointment', label: 'Book Appointment' },
    { href: '/events', label: 'Events' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/store', label: 'Store' },
    { href: '/jobs', label: 'Jobs' },
    { href: '/contact', label: 'Contact' },
    { href: '/location', label: 'Location' },
  ];

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.flexContainer}>
          <div className={styles.logoContainer}>
            <Link href="/" className={styles.logo}>
              CNE Best Photo and Print
            </Link>
          </div>
          <div className={styles.desktopNav}>
            <div className={styles.navLinks}>
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className={styles.navLink}>
                    {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className={styles.mobileMenuButtonContainer}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className={styles.mobileMenuButton}
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div id="mobile-menu">
          <div className={styles.mobileNavLinks}>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={styles.mobileNavLink}>
                  {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}