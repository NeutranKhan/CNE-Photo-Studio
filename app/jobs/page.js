'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './Jobs.module.css';

const jobOpenings = [
  {
    id: 1,
    title: 'Photographer Assistant',
    type: 'Full-Time',
    description: 'Assist in photo shoots, editing, and studio operations.',
    requirements: ['Basic photography skills', 'Reliable transportation'],
  },
  {
    id: 2,
    title: 'Print Technician',
    type: 'Part-Time',
    description: 'Handle printing equipment and ensure quality output.',
    requirements: ['Attention to detail', 'Basic computer skills'],
  },
  // Add more jobs as needed
];

export default function JobsPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          Join Our Team
        </motion.h1>
        <p className={styles.lead}>We're always looking for talented individuals to help create amazing memories.</p>
      </header>

      <section className={styles.jobsList}>
        {jobOpenings.map((job, index) => (
          <motion.div
            key={job.id}
            className={styles.jobCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <h3>{job.title}</h3>
            <p className={styles.type}>{job.type}</p>
            <p>{job.description}</p>
            <ul>
              {job.requirements.map((req, i) => (
                <li key={i}>{req}</li>
              ))}
            </ul>
            <Link href="/application" className={styles.applyBtn}>Apply Now</Link>
          </motion.div>
        ))}
      </section>

      <section className={styles.ctaSection}>
        <h2>Don't See a Fit?</h2>
        <p>Send us your resume anyway—we might have something in the works.</p>
        <Link href="/contact" className={styles.cta}>Contact Us</Link>
      </section>
    </div>
  );
}
