'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './Events.module.css'; // We'll create this

const events = [
  {
    id: 1,
    title: 'Wedding Photography Workshop',
    date: '2024-10-15',
    time: '10:00 AM - 2:00 PM',
    location: 'Studio Location',
    description: 'Learn the basics of wedding photography in this hands-on workshop.',
    image: '/images/featured-1.jpg',
  },
  {
    id: 2,
    title: 'Family Portrait Session',
    date: '2024-10-20',
    time: '3:00 PM - 5:00 PM',
    location: 'Client Home',
    description: 'Capture beautiful family memories in a relaxed setting.',
    image: '/images/featured-2.jpg',
  },
  {
    id: 3,
    title: 'Corporate Headshot Day',
    date: '2024-10-25',
    time: '9:00 AM - 4:00 PM',
    location: 'Studio Location',
    description: 'Professional headshots for your team.',
    image: '/images/featured-3.jpg',
  },
];

export default function EventsPage() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          Upcoming Events
        </motion.h1>
        <p className={styles.lead}>Join us for workshops, sessions, and special events.</p>
      </header>

      <section className={styles.eventsGrid}>
        {events.map((event, index) => (
          <motion.div
            key={event.id}
            className={styles.eventCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            <Image src={event.image} alt={event.title} width={400} height={250} className={styles.eventImage} />
            <div className={styles.eventContent}>
              <h3>{event.title}</h3>
              <p><strong>Date:</strong> {event.date}</p>
              <p><strong>Time:</strong> {event.time}</p>
              <p><strong>Location:</strong> {event.location}</p>
              <p>{event.description}</p>
              <Link href="/appointment" className={styles.cta}>Book Now</Link>
            </div>
          </motion.div>
        ))}
      </section>

      <section className={styles.ctaSection}>
        <h2>Host Your Event with Us</h2>
        <p>Planning a special event? Let&apos;s capture it beautifully.</p>
        <Link href="/appointment" className={styles.cta}>Get in Touch</Link>
      </section>
    </div>
  );
}
