import db from '$lib/db.js';

export function load() {
  const classes = db.prepare(`SELECT * FROM classes`).all();
  return { classes };
}

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const email = data.get('email');
    const password = data.get('password');

    db.prepare(`INSERT INTO users (email, password, role) VALUES (?, ?, 'instructor')`)
      .run(email, password);

    return { success: true };
  },

  createClass: async ({ request }) => {
    const data = await request.formData();
    const title = data.get('title');

    db.prepare(`INSERT INTO classes (title, instructor_id) VALUES (?, 1)`)
      .run(title);

    return { success: true };
  }
};
