// app/HomePage.js
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCamera, FaPrint, FaUsers, FaClock, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import Modal from '../components/Modal';
import styles from './HomePage.module.css';

const featuredPhotos = [
  { id: 1, src: '/images/featured-1.jpg', title: 'Candid Moments', rotation: -8 },
  { id: 2, src: '/images/featured-2.jpg', title: 'Family Portraits', rotation: 4 },
  { id: 3, src: '/images/featured-3.jpg', title: 'Professional Headshots', rotation: 10 },
  { id: 4, src: '/images/featured-4.jpg', title: 'Event Highlights', rotation: -5 },
  { id: 5, src: '/images/featured-5.jpg', title: 'Creative Shoots', rotation: 6 },
  { id: 6, src: '/images/featured-6.jpg', title: 'Product Photography', rotation: -4 },
];

const services = [
    {
        icon: <FaCamera size={32} />,
        title: "Professional Photography",
        description: "High-quality photos for any occasion, from corporate headshots to family portraits."
    },
    {
        icon: <FaPrint size={32} />,
        title: "High-Quality Printing",
        description: "State-of-the-art printing for vibrant, lasting memories on a variety of materials."
    },
    {
        icon: <FaUsers size={32} />,
        title: "Event Coverage",
        description: "Comprehensive coverage for weddings, corporate events, and special celebrations."
    }
];

export default function HomePage() {
  const [selectedImg, setSelectedImg] = useState(null);

  const handleKeyDown = (e, photo) => {
    if (e.key === 'Enter') {
      setSelectedImg(photo);
    }
  };

  return (
    <>
      <div className={styles.pageContainer}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.heroTitle}
          >
            CNE Best Photo and Print
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={styles.heroSubtitle}
          >
            Capturing life&apos;s best moments with stunning quality and printing them to perfection.
          </motion.p>
          <p className={styles.trustLine}>Trusted by 500+ happy clients</p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className={styles.heroActions}>
              <Link href="/appointment" className={styles.secondaryButton}>
                  Book Appointment
              </Link>
              <Link href="/gallery" className={styles.secondaryButton}>
                  View Gallery
            </Link>
            </div>
          </motion.div>
        </section>

        {/* About the Studio Section */}
        <section className={styles.aboutSection}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={styles.aboutText}
          >
            <h2>Welcome to Our Studio</h2>
            <p>
              At CNE, we believe every picture tells a story. Our passion is capturing the fleeting moments of joy, love, and celebration and turning them into timeless treasures. We are dedicated to excellence in both our photography and our printing services.
            </p>
          </motion.div>
          <motion.div
            className={styles.aboutImageContainer}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image src="/images/featured-4.jpg" alt="Studio" fill className={styles.aboutImage} sizes="(max-width: 768px) 100vw, 50vw" />
          </motion.div>
        </section>

        {/* Services Section */}
        <section className={styles.servicesSection}>
            <h2 className={styles.sectionTitle}>Our Services</h2>
            <div className={styles.servicesGrid}>
                {services.map((service, index) => (
                    <motion.div 
                        key={index}
                        className={styles.serviceCard}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.15 }}
                        viewport={{ once: true }}
                    >
                        <div className={styles.serviceIcon} aria-hidden="true">{service.icon}</div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                        <div className={styles.servicePrice}>Starting at $49</div>
                    </motion.div>
                ))}
            </div>
        </section>

        {/* Quick Info Strip */}
        <section>
          <div className={styles.infoStrip}>
            <div className={styles.infoItem}>
              <FaClock aria-hidden="true" />
              <span>Mon–Sat: 9am–7pm</span>
            </div>
            <div className={styles.infoItem}>
              <FaPhone aria-hidden="true" />
              <span>Call/WhatsApp: +1 (555) 123‑4567</span>
            </div>
            <div className={styles.infoItem}>
              <FaMapMarkerAlt aria-hidden="true" />
              <span>123 Studio Ave, Your City</span>
            </div>
            </div>
        </section>

        {/* Featured Photos Section */}
        <section className={styles.featuredSection}>
          <h2 className={styles.sectionTitle}>A Glimpse of Our Work</h2>
          <div className={styles.categoryLinks}>
            <Link className={styles.categoryLink} href="/gallery?category=portraits">Portraits</Link>
            <Link className={styles.categoryLink} href="/gallery?category=events">Events</Link>
            <Link className={styles.categoryLink} href="/gallery?category=products">Products</Link>
            <Link className={styles.categoryLink} href="/gallery?category=family">Family</Link>
          </div>
          <div className={styles.featuredGrid}>
            {featuredPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                className={styles.featuredCard}
                onClick={() => setSelectedImg(photo)}
                onKeyDown={(e) => handleKeyDown(e, photo)}
                role="button"
                tabIndex={0}
                initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                whileInView={{ opacity: 1, scale: 1, rotate: photo.rotation }}
                transition={{ type: 'spring', stiffness: 100, damping: 10, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, zIndex: 10 }}
                viewport={{ once: true }}
              >
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  className={styles.featuredImage}
                />
              </motion.div>
            ))}
          </div>
          <Link href="/gallery" className={styles.galleryLink}>
            View Full Gallery
          </Link>
        </section>

        {/* Testimonials */}
        <section className={styles.testimonialsSection}>
          <h2 className={styles.sectionTitle}>What Clients Say</h2>
          <div className={styles.testimonialsGrid}>
            <div className={styles.testimonialCard}>
              “Absolutely loved our family photos—friendly team and gorgeous prints.”
              <div style={{ marginTop: '0.5rem', color: '#6b7280' }}>— Sarah K.</div>
            </div>
            <div className={styles.testimonialCard}>
              “They handled our corporate shoot flawlessly. Fast turnaround too.”
              <div style={{ marginTop: '0.5rem', color: '#6b7280' }}>— Mark D.</div>
            </div>
            <div className={styles.testimonialCard}>
              “Great value and quality. The canvas prints look amazing on our wall.”
              <div style={{ marginTop: '0.5rem', color: '#6b7280' }}>— Aisha R.</div>
            </div>
          </div>
        </section>
      </div>

      <AnimatePresence>
        {selectedImg && (
          <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}
      </AnimatePresence>
    </>
  );
}