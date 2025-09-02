'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Application.module.css';

export default function ApplicationPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    resume: '',
    coverLetter: '',
  });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch('/api/applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({ type: 'success', message: 'Application submitted successfully!' });
        setFormData({
          name: '',
          email: '',
          phone: '',
          position: '',
          resume: '',
          coverLetter: '',
        });
      } else {
        setStatus({ type: 'error', message: 'Failed to submit application. Please try again.' });
      }
    } catch (error) {
      console.error('Application submission error:', error);
      setStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={styles.header}
      >
        <h1>Apply for a Position</h1>
        <p className={styles.lead}>Join our team and help create amazing memories.</p>
      </motion.header>

      <motion.form
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        onSubmit={handleSubmit}
        className={styles.form}
      >
        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
          <label htmlFor="name" className={styles.label}>Full Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </motion.div>

        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
          <label htmlFor="email" className={styles.label}>Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </motion.div>

        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
          <label htmlFor="phone" className={styles.label}>Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={styles.input}
          />
        </motion.div>

        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
          <label htmlFor="position" className={styles.label}>Position Applied For *</label>
          <input
            type="text"
            id="position"
            name="position"
            value={formData.position}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </motion.div>

        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
          <label htmlFor="resume" className={styles.label}>Resume (Link or Text)</label>
          <textarea
            id="resume"
            name="resume"
            rows="4"
            value={formData.resume}
            onChange={handleChange}
            className={styles.textarea}
            placeholder="Paste your resume or provide a link"
          ></textarea>
        </motion.div>

        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
          <label htmlFor="coverLetter" className={styles.label}>Cover Letter</label>
          <textarea
            id="coverLetter"
            name="coverLetter"
            rows="6"
            value={formData.coverLetter}
            onChange={handleChange}
            className={styles.textarea}
            placeholder="Tell us why you're interested in this position"
          ></textarea>
        </motion.div>

        {status && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={status.type === 'success' ? styles.success : styles.error}
          >
            {status.message}
          </motion.p>
        )}

        <div className={styles.actions}>
          <motion.button
            type="submit"
            className={styles.button}
            disabled={loading}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {loading ? 'Submitting...' : 'Submit Application'}
          </motion.button>
        </div>
      </motion.form>
    </div>
  );
}
