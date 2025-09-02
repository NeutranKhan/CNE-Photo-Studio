import { db } from '../../../lib/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';

export async function POST(request) {
	try {
		const body = await request.json();
		const { name, email, phone, position, resume, coverLetter } = body || {};

		if (!name || !email || !position) {
			return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
		}

		const docRef = await addDoc(collection(db, 'applications'), {
			name,
			email,
			phone,
			position,
			resume,
			coverLetter,
			timestamp: new Date(),
		});

		return new Response(JSON.stringify({ ok: true, id: docRef.id, message: 'Application submitted successfully!' }), {
			status: 200,
			headers: { 'Content-Type': 'application/json' },
		});
	} catch (error) {
		console.error('Application save error:', error);
		return new Response(JSON.stringify({ error: 'Failed to save application' }), { status: 500 });
	}
}
