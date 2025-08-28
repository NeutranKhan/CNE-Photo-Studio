'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from '../components/Modal';

const featuredPhotos = [
  { id: 1, src: '/images/featured-1.jpg', title: 'Candid Moments' },
  { id: 2, src: '/images/featured-2.jpg', title: 'Family Portraits' },
  { id: 3, src: '/images/featured-3.jpg', title: 'Professional Headshots' },
  { id: 4, src: '/images/featured-4.jpg', title: 'Event Highlights' },
  { id: 5, src: '/images/featured-5.jpg', title: 'Creative Shoots' },
  { id: 6, src: '/images/featured-6.jpg', title: 'Product Photography' },
];

export default function HomePage() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <>
      <div className="space-y-24">
        {/* Hero Section */}
        <section className="text-center py-20 bg-brand-light rounded-lg">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-5xl md:text-7xl font-extrabold text-brand-primary"
          >
            CNE Photo & Print
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-lg md:text-xl text-gray-600 font-sans"
          >
            Capturing Memories, Printing Perfection.
          </motion.p>
          {/* The button is now guaranteed to be visible */}
          <motion.div
            initial={{ opacity: 0.5, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link href="/order" className="mt-8 inline-block bg-brand-secondary text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Place Order
            </Link>
          </motion.div>
        </section>

        {/* About the Studio Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl font-bold text-brand-primary mb-4">Welcome to Our Studio</h2>
            <p className="font-sans text-gray-700 leading-relaxed mb-4">
              At CNE, we believe that every picture tells a story. Our passion is to capture the fleeting moments of joy, love, and celebration and turn them into timeless treasures. From professional headshots to vibrant event coverage, our team is dedicated to excellence.
            </p>
          </motion.div>
          <motion.div
            className="w-full h-80 rounded-lg shadow-xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image src="/images/featured-4.jpg" alt="Studio" width={500} height={400} className="w-full h-full object-cover" />
          </motion.div>
        </section>

        {/* Featured Photos Section */}
        <section>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-serif text-4xl font-bold text-center mb-12 text-brand-primary"
          >
            Our Featured Work
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPhotos.map((photo, index) => (
              <motion.div
                key={photo.id}
                className="bg-white rounded-lg shadow-md overflow-hidden group cursor-pointer"
                onClick={() => setSelectedImg(photo)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="relative overflow-hidden aspect-[9/16]">
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 bg-white">
                  <h3 className="font-sans font-semibold text-lg text-brand-dark">{photo.title}</h3>
                </div>
              </motion.div>
            ))}
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