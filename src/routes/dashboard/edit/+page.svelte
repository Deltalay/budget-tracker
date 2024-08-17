<script lang="ts">
	import { enhance } from '$app/forms';
</script>

<div>
	<form use:enhance method="post">
		<div>
			<label for="income">Income Monthly</label>
			<input type="text" id="income" name="income" />
		</div>
	</form>
</div>
