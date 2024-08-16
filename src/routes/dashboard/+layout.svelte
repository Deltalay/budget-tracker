<script lang="ts">
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<svelte:head>
	<title>Dashboard</title>
</svelte:head>
<header>
	<nav>
		<ul class="ulcontainer">
			<li class="logo">BUDGET TRACKER</li>
			<li class="welcome">Welcome back, {data.username}</li>
		</ul>
	</nav>
</header>
<div></div>
<slot />

<style>
	ul {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	header {
		background-color: #702963;
		color: #fff;
		padding: 10px 20px;
		border-bottom: 2px solid hsl(311, 46%, 27%);
	}

	nav ul.ulcontainer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		list-style: none;
	}

	nav ul.ulcontainer li {
		font-size: 18px;
		padding: 5px 10px;
	}

	nav ul.ulcontainer li.logo {
		font-weight: bold;
		font-size: 22px;
	}

	nav ul.ulcontainer li.welcome {
		font-style: italic;
	}

	/* Add some responsive design */
	@media (max-width: 768px) {
		nav ul.ulcontainer {
			flex-direction: column;
			align-items: flex-start;
		}

		nav ul.ulcontainer li {
			font-size: 16px;
			padding: 10px 0;
		}
	}
</style>
