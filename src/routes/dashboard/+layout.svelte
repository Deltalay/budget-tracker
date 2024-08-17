<script lang="ts">
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<svelte:head>
	<title>Dashboard</title>
</svelte:head>
<div style="display: flex;">
	<aside class="sidebar">
		<div class="logo">
			<a href="/dashboard">BUDGET TRACKER</a>
		</div>
		<nav>
			<ul class="nav-links">
				<li><a href="/dashboard">Dashboard</a></li>
				<li><a href="/dashboard/transactions">Transactions</a></li>
				<li><a href="/dashboard/budgets">Budgets</a></li>
				<li><a href="/dashboard/goals">Goals</a></li>
				<li><a href="/dashboard/subscription">Subscription</a></li>
				<li><a href="/dashboard/edit">Edit</a></li>
			</ul>
		</nav>
		<div class="welcome" id="welcome-message">
			Welcome back, {data.username}
		</div>
	</aside>
	<div class="slot">
		<slot />
	</div>
</div>

<style>
	.slot {
		padding: 1rem 2rem;
		width: 100%;
		background-color: #ecf0f1;
	}
	.sidebar {
		width: 250px;
		background-color: #702963;
		color: #ecf0f1;
		height: 100vh;
		min-width: 250px;
		position: fi;
		padding: 20px;
		box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		justify-content: space-between;
	}

	.sidebar .logo {
		font-size: 24px;
		font-weight: bold;
		margin-bottom: 30px;
	}

	.sidebar .logo a {
		color: #ecf0f1;
		text-decoration: none;
	}

	.sidebar nav {
		flex-grow: 1;
	}

	.sidebar .nav-links {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.sidebar .nav-links li {
		margin: 15px 0;
	}

	.sidebar .nav-links li a {
		color: #ecf0f1;
		text-decoration: none;
		font-size: 18px;
		display: block;
		transition: color 0.3s ease;
	}

	.sidebar .nav-links li a:hover {
		color: #d1a3d1;
	}

	.sidebar .nav-links li a.active {
		color: #d1a3d1;
	}

	.sidebar .welcome {
		margin-top: auto;
		font-size: 16px;
		padding-top: 20px;
		border-top: 1px solid #874b89;
	}
</style>
