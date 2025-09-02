'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './Appointment.module.css';

export default function AppointmentPage() {
	const [status, setStatus] = useState({ type: 'idle', message: '' });

	async function handleSubmit(event) {
		event.preventDefault();
		setStatus({ type: 'idle', message: '' });
		const form = event.currentTarget;
		const formData = new FormData(form);
		const payload = Object.fromEntries(formData.entries());

		if (!payload.name || !payload.email || !payload.service || !payload.date) {
			setStatus({ type: 'error', message: 'Please fill in all required fields.' });
			return;
		}

		try {
			const res = await fetch('/api/appointments', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(payload),
			});
			if (!res.ok) throw new Error('Failed to submit');
			setStatus({ type: 'success', message: 'Thank you! We will confirm shortly.' });
			form.reset();
		} catch (e) {
			setStatus({ type: 'error', message: 'Something went wrong. Please try again.' });
		}
	}

	return (
		<div className={styles.container}>
			<header className={styles.header}>
				<h1>Book an Appointment</h1>
				<p className="helper">Tell us what you need and when you’re available.</p>
			</header>
			<motion.form onSubmit={handleSubmit} className={styles.form} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
				<div className={styles.row}>
					<div>
						<label className={styles.label} htmlFor="name">Full name*</label>
						<input id="name" name="name" className={styles.input} required />
					</div>
					<div>
						<label className={styles.label} htmlFor="email">Email*</label>
						<input id="email" name="email" type="email" className={styles.input} required />
					</div>
				</div>
				<div className={styles.row}>
					<div>
						<label className={styles.label} htmlFor="phone">Phone</label>
						<input id="phone" name="phone" className={styles.input} />
					</div>
					<div>
						<label className={styles.label} htmlFor="service">Service*</label>
						<select id="service" name="service" className={styles.select} required>
							<option value="">Select a service</option>
							<option>Portraits / Headshots</option>
							<option>Events</option>
							<option>Product Photography</option>
							<option>Printing Only</option>
						</select>
					</div>
				</div>
				<div className={styles.row}>
					<div>
						<label className={styles.label} htmlFor="date">Preferred date*</label>
						<input id="date" name="date" type="date" className={styles.input} required />
					</div>
					<div>
						<label className={styles.label} htmlFor="time">Preferred time</label>
						<input id="time" name="time" type="time" className={styles.input} />
					</div>
				</div>
				<div>
					<label className={styles.label} htmlFor="notes">Notes</label>
					<textarea id="notes" name="notes" rows={4} className={styles.textarea} placeholder="Tell us any specifics..." />
				</div>
				<div className={styles.actions}>
					<button type="reset" className={styles.button}>Clear</button>
					<button type="submit" className={styles.button}>Submit</button>
				</div>
				{status.type === 'success' && <div className={styles.success}>{status.message}</div>}
				{status.type === 'error' && <div className={styles.error}>{status.message}</div>}
			</motion.form>
		</div>
	);
}
