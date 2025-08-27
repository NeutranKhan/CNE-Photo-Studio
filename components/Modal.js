'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Modal({ selectedImg, setSelectedImg }) {
  if (!selectedImg) return null;

  const handleClick = (e) => {
    // Close modal if the backdrop is clicked, but not the image itself
    if (e.target.classList.contains('backdrop')) {
      setSelectedImg(null);
    }
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-75 z-50 flex justify-center items-center p-4 backdrop"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        layoutId={selectedImg.src} // This links the animation to the grid item
        className="relative"
      >
        <Image
          src={selectedImg.src}
          alt={selectedImg.title}
          width={800}
          height={600}
          className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
        />
      </motion.div>
    </motion.div>
  );
}