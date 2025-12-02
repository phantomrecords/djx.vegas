<h2>Student Signup</h2>

<form method="POST">
  <input name="email" placeholder="Email" />
  <input name="password" type="password" placeholder="Password" />
  <button>Create Student Account</button>
</form>

<hr>

<h3>Enroll in a Class</h3>
<form method="POST" action="?/enroll">
  <select name="class_id">
    {#each data.classes as c}
      <option value={c.id}>{c.title}</option>
    {/each}
  </select>
  <button>Enroll</button>
</form>