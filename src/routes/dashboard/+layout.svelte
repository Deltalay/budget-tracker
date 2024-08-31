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
				<li>
					<a href="/dashboard"
						><svg
							xmlns="http://www.w3.org/2000/svg"
							width="1em"
							height="1em"
							viewBox="0 0 24 24"
							{...$$props}
						>
							<path fill="currentColor" d="M4 21V9l8-6l8 6v12h-6v-7h-4v7z" />
						</svg>Home</a
					>
				</li>
				<li>
					<a href="/dashboard/transactions">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="1em"
							height="1em"
							viewBox="0 0 24 24"
							{...$$props}
						>
							<path
								fill="currentColor"
								d="m16 11.78l4.24-7.33l1.73 1l-5.23 9.05l-6.51-3.75L5.46 19H22v2H2V3h2v14.54L9.5 8z"
							/>
						</svg>Graph</a
					>
				</li>
				<li>
					<a href="/dashboard/budgets"
						><svg
							xmlns="http://www.w3.org/2000/svg"
							width="1em"
							height="1em"
							viewBox="0 0 24 24"
							{...$$props}
						>
							<path
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								d="M2 7h18m-4-5l5 5l-5 5m6 5H4m4-5l-5 5l5 5"
							/>
						</svg>Tracsactions</a
					>
				</li>
				<li>
					<a href="/dashboard/goals"
						><svg
							xmlns="http://www.w3.org/2000/svg"
							width="1em"
							height="1em"
							viewBox="0 0 24 24"
							{...$$props}
						>
							<path
								fill="currentColor"
								d="M4 11h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1m10 0h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1M4 21h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1m13 0c2.206 0 4-1.794 4-4s-1.794-4-4-4s-4 1.794-4 4s1.794 4 4 4"
							/>
						</svg>Category</a
					>
				</li>
				<li>
					<a href="/dashboard/setting"
						><svg
							xmlns="http://www.w3.org/2000/svg"
							width="1em"
							height="1em"
							viewBox="0 0 20 20"
							{...$$props}
						>
							<path
								fill="currentColor"
								d="M11.078 0c.294 0 .557.183.656.457l.706 1.957q.379.094.654.192q.3.107.78.33l1.644-.87a.7.7 0 0 1 .832.131l1.446 1.495c.192.199.246.49.138.744l-.771 1.807q.191.352.308.604q.126.273.312.76l1.797.77c.27.115.437.385.419.674l-.132 2.075a.69.69 0 0 1-.46.605l-1.702.605q-.073.352-.154.606a9 9 0 0 1-.298.774l.855 1.89a.68.68 0 0 1-.168.793l-1.626 1.452a.7.7 0 0 1-.796.096l-1.676-.888a7 7 0 0 1-.81.367l-.732.274l-.65 1.8a.7.7 0 0 1-.64.457L9.11 20a.7.7 0 0 1-.669-.447l-.766-2.027a15 15 0 0 1-.776-.29a10 10 0 0 1-.618-.293l-1.9.812a.7.7 0 0 1-.755-.133L2.22 16.303a.68.68 0 0 1-.155-.783l.817-1.78a10 10 0 0 1-.302-.644a14 14 0 0 1-.3-.811L.49 11.74a.69.69 0 0 1-.49-.683l.07-1.921a.69.69 0 0 1 .392-.594L2.34 7.64q.13-.478.23-.748a9 9 0 0 1 .314-.712L2.07 4.46a.68.68 0 0 1 .15-.79l1.404-1.326a.7.7 0 0 1 .75-.138l1.898.784q.314-.209.572-.344q.307-.162.824-.346l.66-1.841A.7.7 0 0 1 8.984 0zm-1.054 7.019c-1.667 0-3.018 1.335-3.018 2.983s1.351 2.984 3.018 2.984s3.017-1.336 3.017-2.984s-1.35-2.983-3.017-2.983"
							/>
						</svg>Settings</a
					>
				</li>
				<li>
					<a href="/logout"
						><svg
							xmlns="http://www.w3.org/2000/svg"
							width="1em"
							height="1em"
							viewBox="0 0 24 24"
							{...$$props}
						>
							<path
								fill="currentColor"
								d="m17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5M4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4z"
							/>
						</svg>Logout</a
					>
				</li>
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
		margin: 24px 0;
	}

	.sidebar .nav-links li a {
		color: #ecf0f1;
		text-decoration: none;
		font-size: 18px;
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
	.nav-links li > a {
		display: flex;
		align-items: center;
		gap: 1rem;
	}
</style>
