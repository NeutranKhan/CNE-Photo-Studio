'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './Store.module.css';

const products = [
  {
    id: 1,
    title: 'Photo Prints',
    description: 'High-quality prints in various sizes, from 4x6 to 24x36.',
    image: '/images/featured-1.jpg',
    startingPrice: '$10',
  },
  {
    id: 2,
    title: 'Canvas Prints',
    description: 'Vibrant canvas prints that bring your photos to life.',
    image: '/images/featured-2.jpg',
    startingPrice: '$50',
  },
  {
    id: 3,
    title: 'Custom Frames',
    description: 'Personalized frames for your favorite memories.',
    image: '/images/featured-3.jpg',
    startingPrice: '$25',
  },
  // Add more products as needed
];

export default function StorePage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          Our Store
        </motion.h1>
        <p className={styles.lead}>Explore our range of printing services and products.</p>
      </header>

      <motion.div
        className={styles.productsGrid}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
      >
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            className={styles.productCard}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image src={product.image} alt={product.title} fill sizes="(max-width: 768px) 100vw, 33vw" />
            <div className={styles.productInfo}>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <p className={styles.price}>Starting at {product.startingPrice}</p>
              <Link href="/appointment" className={styles.quoteBtn}>Get Quote</Link>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <section className={styles.ctaSection}>
        <h2>Need Something Custom?</h2>
        <p>Contact us for personalized quotes and bulk orders.</p>
        <Link href="/appointment" className={styles.cta}>Book Appointment</Link>
      </section>
    </div>
  );
}
