'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './Gallery.module.css';

const galleryImages = [
  { id: 1, src: '/images/featured-1.jpg', alt: 'Portrait Session', category: 'portraits' },
  { id: 2, src: '/images/featured-2.jpg', alt: 'Wedding Event', category: 'events' },
  { id: 3, src: '/images/featured-3.jpg', alt: 'Product Photography', category: 'products' },
  // Add more images as needed
];

const categories = ['all', 'portraits', 'events', 'products', 'family'];

export default function GalleryPage() {
  const [filter, setFilter] = useState('all');

  const filteredImages = filter === 'all' ? galleryImages : galleryImages.filter(img => img.category === filter);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          Our Gallery
        </motion.h1>
        <p className={styles.lead}>Explore our portfolio of stunning photography.</p>
      </header>

      <div className={styles.filters}>
        {categories.map(cat => (
          <button
            key={cat}
            className={`${styles.filterBtn} ${filter === cat ? styles.active : ''}`}
            onClick={() => setFilter(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <motion.div
        className={styles.galleryGrid}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
      >
        {filteredImages.map((img) => (  // Removed 'index' since it's not used
          <motion.div
            key={img.id}
            className={styles.imageCard}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 100vw, 33vw" />
          </motion.div>
        ))}
      </motion.div>

      <section className={styles.ctaSection}>
        <h2>Love What You See?</h2>
        <p>Book a session or get a quote for your project.</p>
        <a href="/appointment" className={styles.cta}>Book Appointment</a>
      </section>
    </div>
  );
}
