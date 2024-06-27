<script>
  import { onMount } from "svelte";
  const apiUrl = process.env.APIURL;
  let status = "checking...";

  onMount(async () => {
    try {
      const res = await fetch(`${apiUrl}/api/health`);
      const data = await res.json();
      status =
        data.status === "connected"
          ? "Database is connected"
          : "Database is disconnected";
    } catch (error) {
      status = "Database is disconnected";
    }
  });
</script>

<div>
  <h2>Database Status</h2>
  <p>{status}</p>
</div>
