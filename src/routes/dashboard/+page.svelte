<div class="container">
	<div class="card-big">
		<h2>Income:</h2>
	</div>
	<div class="card-big">
		<h2>Expense:</h2>
	</div>
		<div class="card-big">
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
		flex-direction: column;
		border: 1px solid #ddd;
		border-radius: 8px;
		background-color: white;
		box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
		transition: 150ms ease-out box-shadow;

		padding: 4px 1rem;
	}
  .card-big:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
	.card-big:nth-child(1) h2 {
		color: #28a745;
	}
	.card-big:nth-child(2) h2 {
		color: #dc3545;
	}
	/* @media (min-width: 720px) {
		.container {
      grid-template-columns: repeat(2, 1fr);
    }
	} */
</style>
