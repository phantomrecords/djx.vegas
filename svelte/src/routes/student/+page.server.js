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

    db.prepare(`INSERT INTO users (email, password, role) VALUES (?, ?, 'student')`)
      .run(email, password);

    return { success: true };
  },

  enroll: async ({ request }) => {
    const data = await request.formData();
    const class_id = data.get('class_id');

    db.prepare(`INSERT INTO enrollments (student_id, class_id) VALUES (1, ?)`)
      .run(class_id);

    return { success: true };
  }
};
