<div class="container">
	<div class="card-big">
		<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24">
			<path
				fill="currentColor"
				d="M7 15h2c0 1.08 1.37 2 3 2s3-.92 3-2c0-1.1-1.04-1.5-3.24-2.03C9.64 12.44 7 11.78 7 9c0-1.79 1.47-3.31 3.5-3.82V3h3v2.18C15.53 5.69 17 7.21 17 9h-2c0-1.08-1.37-2-3-2s-3 .92-3 2c0 1.1 1.04 1.5 3.24 2.03C14.36 11.56 17 12.22 17 15c0 1.79-1.47 3.31-3.5 3.82V21h-3v-2.18C8.47 18.31 7 16.79 7 15"
			/>
		</svg>
		<h2>Income:</h2>
	</div>
	<div class="card-big">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
			<path
				fill="currentColor"
				d="M7 15h2c0 1.08 1.37 2 3 2s3-.92 3-2c0-1.1-1.04-1.5-3.24-2.03C9.64 12.44 7 11.78 7 9c0-1.79 1.47-3.31 3.5-3.82V3h3v2.18C15.53 5.69 17 7.21 17 9h-2c0-1.08-1.37-2-3-2s-3 .92-3 2c0 1.1 1.04 1.5 3.24 2.03C14.36 11.56 17 12.22 17 15c0 1.79-1.47 3.31-3.5 3.82V21h-3v-2.18C8.47 18.31 7 16.79 7 15"
			/>
		</svg>
		<h2>Expense:</h2>
	</div>
	<div class="card-big">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
			<path
				fill="currentColor"
				d="M7 15h2c0 1.08 1.37 2 3 2s3-.92 3-2c0-1.1-1.04-1.5-3.24-2.03C9.64 12.44 7 11.78 7 9c0-1.79 1.47-3.31 3.5-3.82V3h3v2.18C15.53 5.69 17 7.21 17 9h-2c0-1.08-1.37-2-3-2s-3 .92-3 2c0 1.1 1.04 1.5 3.24 2.03C14.36 11.56 17 12.22 17 15c0 1.79-1.47 3.31-3.5 3.82V21h-3v-2.18C8.47 18.31 7 16.79 7 15"
			/>
		</svg>
		<h2>Total:</h2>
	</div>
	<div></div>
	<div></div>
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1rem;
	}
	.card-big {
		display: flex;
		flex-direction: row;
		border: 1px solid #ddd;
		border-radius: 8px;
		background-color: white;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
		transition: 150ms ease-out box-shadow;
	}
	.card-big:hover {
		box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
	}
	.card-big:nth-child(1) svg {
		color: #28a745;
	}
	.card-big:nth-child(2) svg {
		color: #dc3545;
	}
	.card-big:nth-child(3) svg {
		color: #0d6efd;
	}
	.card-big svg {
		width: 3rem;
		height: auto;
	}
	/* @media (min-width: 720px) {
		.container {
      grid-template-columns: repeat(2, 1fr);
    }
	} */
</style>
