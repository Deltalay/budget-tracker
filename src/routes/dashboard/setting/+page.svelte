<script lang="ts">
	import type { PageData } from "./$types";

  export let data: PageData;
</script>

<div>
  {data.user.budgets?.amount_limit}
</div>