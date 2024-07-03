<script>
  import axios from "axios";
  import { onMount } from "svelte";

  let ids = [];
  onMount(async () => {
    try {
      const response = await axios.get("/api/players");
      ids = response.data;
    } catch (error) {
      console.log("Error fetching players:", error);
    }
  });
</script>

<main class="ml-8 mt-8">
  <h1 class="font-bold text-3xl">Add Player</h1>
  <hr class="my-2" />
  <div class="flex flex-col">
    {#each ids as id}
      <div class="flex flex-row p-1">
        <div class=" w-1/6">
          <p>{id.country}</p>
        </div>
        <div class=" w-1/6">
          <p>{id.name}</p>
        </div>
        <p class=" font-mono bg-gray-200 px-1">{id._id}</p>
      </div>
    {/each}
  </div>
</main>
