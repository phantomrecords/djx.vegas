<h2>Instructor Signup</h2>

<form method="POST">
  <input name="email" placeholder="Email" required>
  <input name="password" type="password" placeholder="Password" required>
  <button>Create Instructor Account</button>
</form>

<hr>

<h3>Create Class</h3>
<form method="POST" action="?/createClass">
  <input name="title" placeholder="Class Title">
  <button>Create</button>
</form>

{#if data.classes}
  <h3>Your Classes</h3>
  <ul>
    {#each data.classes as c}
      <li>{c.title}</li>
    {/each}
  </ul>
{/if}