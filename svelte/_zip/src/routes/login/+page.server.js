import db from '$lib/db.js';
import { redirect } from '@sveltejs/kit';

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const email = data.get('email');
    const password = data.get('password');

    const user = db.prepare(`SELECT * FROM users WHERE email=? AND password=?`)
                   .get(email, password);

    if (!user) return { error: "Invalid login" };

    if (user.role === 'instructor') throw redirect(303, '/instructor');
    if (user.role === 'student') throw redirect(303, '/student');
  }
};
