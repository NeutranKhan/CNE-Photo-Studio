import { db } from '../../../lib/firebaseConfig';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

export async function POST(request) {
	try {
		const body = await request.json();
		const { name, email, phone, service, date, time, notes } = body || {};

		if (!name || !email || !service || !date) {
			return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
		}

		const docRef = await addDoc(collection(db, 'appointments'), {
			name,
			email,
			phone: phone || null,
			service,
			date,
			time: time || null,
			notes: notes || null,
			createdAt: serverTimestamp(),
		});

		return new Response(JSON.stringify({ ok: true, id: docRef.id }), {
			status: 200,
			headers: { 'Content-Type': 'application/json' },
		});
	} catch (error) {  // Optional: Log the error
		return new Response(JSON.stringify({ error: 'Failed to save appointment' }), { status: 500 });
	}
}
