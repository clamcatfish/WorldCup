<script>
  // @ts-ignore
  import { onMount } from "svelte";

  let playerA = { name: "Player A", scores: [0] };
  let playerB = { name: "Player B", scores: [0] };
  let sets = 1;

  function addScoreColumn() {
    playerA.scores.push(0);
    playerB.scores.push(0);
  }

  // @ts-ignore
  function handleNameChange(event, player) {
    const value = event.target.value;
    player.name = value;
  }
  function handleScoreChange(event, player, index) {
    const value = event.target.value;
    player.scores[index] = value !== "" ? parseInt(value, 10) : 0;
  }

  function handleSubmit() {
    console.log("Player A Scores:", playerA.scores);
    console.log("Player B Scores:", playerB.scores);
  }
</script>

<main>
  <h1>Add Game Score</h1>
  <table>
    <thead>
      <tr>
        <th>Player</th>
        {#each playerA.scores as _, index}
          <th>Set {index + 1}</th>
        {/each}
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <input
            type="text"
            value={playerA.name}
            on:change={(e) => handleNameChange(e, playerA)}
          />
        </td>
        {#each playerA.scores as score, index}
          <td>
            <input
              type="number"
              value={score}
              on:input={(e) => handleScoreChange(e, playerA, index)}
            />
          </td>
        {/each}
      </tr>
      <tr>
        <td>
          <input
            type="text"
            value={playerB.name}
            on:change={(e) => handleNameChange(e, playerB)}
          /></td
        >
        {#each playerB.scores as score, index}
          <td>
            <input
              type="number"
              value={score}
              on:input={(e) => handleScoreChange(e, playerB, index)}
            />
          </td>
        {/each}
      </tr>
    </tbody>
  </table>
  <button class="add-column-btn" on:click={addScoreColumn}>Add Set</button>
  <button on:click={handleSubmit}>Submit Scores</button>
</main>

<style>
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th,
  td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
  }
  .add-column-btn {
    margin-top: 10px;
  }
</style>
