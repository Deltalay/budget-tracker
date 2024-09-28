<script lang="ts">
	import type { PageData } from "./$types";
  export let data: PageData;
</script>

<div>
  <div class="initial_container">
    <form>
      <label for="income">Income</label>
      <input name="income" id="income" placeholder="Income"  />
    </form>
  </div>
</div>
<style>
  .initial_container {
    display: flex;
    justify-content: space-between;
    width: full;
    
  }
</style>