'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from '../components/Modal'; // Import the new Modal component

// Helper component for Quick Links with animation
const QuickLink = ({ href, title, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    <Link href={href} className="block bg-white p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all text-center font-semibold text-brand-dark">
        {title}
    </Link>
  </motion.div>
);

// Placeholder data using local images
const featuredPhotos = [
  { id: 1, src: '/images/featured-1.jpg', title: 'Sunset Bliss' },
  { id: 2, src: '/images/featured-2.jpg', title: 'Urban Exploration' },
  { id: 3, src: '/images/featured-3.jpg', title: 'Nature\'s Beauty' },
];

export default function HomePage() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <>
      <div className="space-y-20">
        {/* Hero Section */}
        <section className="text-center py-20 bg-brand-light rounded-lg overflow-hidden">
          <motion.h1 
            initial={{ opacity: 0, y: -30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
            className="text-5xl font-extrabold text-brand-primary"
          >
            CNE Best Photo and Print
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-4 text-xl text-gray-600"
          >
            Capturing Memories, Printing Perfection
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link href="/order" className="mt-8 inline-block bg-brand-secondary text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-600 transition-colors">
                Place Order
            </Link>
          </motion.div>
        </section>

        {/* Quick Links Grid */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-10 text-brand-primary">Explore Our Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <QuickLink href="/about" title="About Us" delay={0.1} />
            <QuickLink href="/events" title="Events" delay={0.2} />
            <QuickLink href="/gallery" title="Photo Gallery" delay={0.3} />
            <QuickLink href="/products" title="Products" delay={0.4} />
            <QuickLink href="/jobs" title="Job Opportunities" delay={0.5} />
          </div>
        </section>

        {/* Featured Photos */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-10 text-brand-primary">Featured Photos</h2>
          {/* On mobile, this will be a single column. On larger screens, 3 columns. */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPhotos.map((photo) => (
              <motion.div
                key={photo.id}
                className="bg-white rounded-lg shadow-md overflow-hidden group cursor-pointer"
                onClick={() => setSelectedImg(photo)}
                whileHover={{ scale: 1.05, rotate: 2, transition: { duration: 0.3 } }}
                layoutId={photo.src} // This is key for the smooth expand animation
              >
                <div className="overflow-hidden">
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover" // Mobile friendly height
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg text-brand-dark">{photo.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>

      {/* Modal component rendered here */}
      <AnimatePresence>
        {selectedImg && (
          <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}
      </AnimatePresence>
    </>
  );
}