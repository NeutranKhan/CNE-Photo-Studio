'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Contact.module.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send to email or API)
    setStatus({ type: 'success', message: 'Message sent successfully!' });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          Contact Us
        </motion.h1>
        <p className={styles.lead}>Get in touch for inquiries, quotes, or just to say hi.</p>
      </header>

      <div className={styles.contactGrid}>
        <motion.section
          className={styles.contactForm}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h2>Send a Message</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
          {status && <p className={status.type === 'success' ? styles.success : styles.error}>{status.message}</p>}
        </motion.section>

        <motion.section
          className={styles.contactInfo}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h2>Get in Touch</h2>
          <p><strong>Address:</strong> 123 Photo Lane, City, State</p>
          <p><strong>Phone:</strong> +1 (555) 123-4567</p>
          <p><strong>Email:</strong> info@cnebestphoto.com</p>
          <p><strong>Hours:</strong> Mon-Sat: 9 AM - 6 PM</p>
          <div className={styles.map}>
            {/* Embed Google Map or placeholder */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.953735315316!3d-37.81720997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d3a32f0f7d0!2sMelbourne%20CBD!5e0!3m2!1sen!2sau!4v1600000000000!5m2!1sen!2sau"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
