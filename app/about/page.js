'use client';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './About.module.css';

export default function AboutPage() {
	return (
		<div className={styles.container}>
			<motion.header className={styles.header}
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
			>
				<h1>About CNE Best Photo and Print</h1>
				<p className={styles.lead}>
					We’re a full‑service photo studio and print shop. From portraits and events to
					museum‑quality prints, we combine expert photography with premium printing under one roof.
				</p>
			</motion.header>

			<section>
				<h2 className={styles.sectionTitle}>What We Offer</h2>
				<div className={styles.grid}>
					<motion.div whileHover={{ y: -6, boxShadow: '0 12px 30px rgba(0,0,0,0.12)' }} className={styles.card} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>Portraits & Headshots</motion.div>
					<motion.div whileHover={{ y: -6, boxShadow: '0 12px 30px rgba(0,0,0,0.12)' }} className={styles.card} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }}>Events & On‑location</motion.div>
					<motion.div whileHover={{ y: -6, boxShadow: '0 12px 30px rgba(0,0,0,0.12)' }} className={styles.card} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.2 }}>Archival Prints & Framing</motion.div>
				</div>
			</section>

			<section>
				<h2 className={styles.sectionTitle}>Our Studio</h2>
				<div className={styles.collage}>
					<Image src="/images/featured-1.jpg" alt="Studio sample 1" width={400} height={300} />
					<Image src="/images/featured-2.jpg" alt="Studio sample 2" width={400} height={300} />
					<Image src="/images/featured-3.jpg" alt="Studio sample 3" width={400} height={300} />
					<Image src="/images/featured-4.jpg" alt="Studio sample 4" width={400} height={300} />
					<Image src="/images/featured-5.jpg" alt="Studio sample 5" width={400} height={300} />
					<Image src="/images/featured-6.jpg" alt="Studio sample 6" width={400} height={300} />
				</div>
			</section>

			<section>
				<h2 className={styles.sectionTitle}>By the Numbers</h2>
				<div className={styles.stats}>
					<div className={styles.stat}><strong>500+</strong><div>Happy Clients</div></div>
					<div className={styles.stat}><strong>1,500+</strong><div>Sessions Shot</div></div>
					<div className={styles.stat}><strong>10k+</strong><div>Prints Delivered</div></div>
				</div>
			</section>

			<section>
				<h2 className={styles.sectionTitle}>Our Promise</h2>
				<p className={styles.lead}>
					Friendly guidance, clear communication, and results you’ll be proud to share.
					We obsess over color accuracy, finishing, and the little details that matter.
				</p>
				<div className={styles.ctaRow}>
					<Link className={styles.cta} href="/appointment">Book Appointment</Link>
					<Link className={styles.cta} href="/store">Visit Store</Link>
				</div>
			</section>
		</div>
	);
}
