<script lang="ts">
	import { enhance } from '$app/forms';
	import Header from '$lib/header.svelte';
</script>

<Header></Header>

<div class="container">
  <div class="form-container">
    <h1>Create Account</h1>
    <form method="post" use:enhance>
      <div class="form-group">
        <label for="username">Name</label>
        <input type="text" id="username" name="username" required />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" name="password" required />
      </div>
      <div class="form-group">
        <label for="confirm-password">Confirm Password</label>
        <input type="password" id="confirm-password" required />
      </div>
      <div class="form-group">
        <button type="submit">Create Account</button>
      </div>
    </form>
  </div>
</div>

<style>
  .container {
    position: absolute;
    width: 100%;
      top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  }
	.form-container {
		max-width: 500px;
		width: auto;
		margin: 0 auto;
		padding: 20px;
		border: 1px solid #ddd;
		border-radius: 8px;
		background-color: #fff;
		box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
	}

	h1 {
		text-align: center;
		margin-bottom: 20px;
	}

	.form-group {
		margin-bottom: 15px;
	}

	.form-group label {
		display: block;
		margin-bottom: 5px;
		font-weight: bold;
	}

	.form-group input {
		width: 100%;
		padding: 10px;
		border: 1px solid #ccc;
		border-radius: 4px;
		box-sizing: border-box;
	}

	.form-group input:focus {
		border-color: #702963;
		outline: none;
		box-sizing: border-box;
	}

	.form-group .error {
		color: red;
		font-size: 0.875em;
		margin-top: 5px;
	}

	.form-group button {
		width: 100%;
		padding: 10px;
		background-color: #702963;
		color: #fff;
		border: none;
		border-radius: 4px;
		font-size: 1em;
		cursor: pointer;
    font-weight: 600;
	}

	.form-group button:hover {
		background-color:#4a1b3c;
	}

	@media (max-width: 600px) {
		.form-container {
			padding: 15px;
		}

		.form-group input,
		.form-group button {
			font-size: 0.875em;
		}
	}
</style>
