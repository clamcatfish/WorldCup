<script>
  // @ts-ignore
  import { onMount } from "svelte";

  let playerA = { name: "Player A", scores: [0] };
  let playerB = { name: "Player B", scores: [0] };
  let sets = 1;

  function addScoreColumn() {
    playerA = { ...playerA, scores: [...playerA.scores, 0] };
    playerB = { ...playerB, scores: [...playerB.scores, 0] };
    console.log(playerA.scores)
  }
  function removeScoreColumn() {
    playerA = { ...playerA, scores: playerA.scores.splice(0, playerA.scores.length-1) };
    playerB = { ...playerB, scores: playerB.scores.splice(0, playerB.scores.length-1) }
    console.log(playerA.scores)
  }

  // @ts-ignore
  function handleNameChange(event, player) {
    const value = event.target.value;
    player.name = value;
  }
  function handleScoreChange(event, player, index) {
    const value = event.target.value;
    player.scores[index] = value !== "" ? parseInt(value, 10) : 0;

        // Reassign to trigger reactivity
    if (player === playerA) {
      playerA = { ...playerA };
    } else {
      playerB = { ...playerB };
    }
  }
  

  function handleSubmit() {
    console.log("Player A Scores:", playerA.scores);
    console.log("Player B Scores:", playerB.scores);
  }
</script>

<main>
  <h1>Add Game Score</h1>
  <div class="flex flex-row items-center">
    <table>
      <thead>
      </thead>
      <tbody>
        <tr>
          <td class="player-box">
            <input
              type="text"
              value={playerA.name}
              on:change={(e) => handleNameChange(e, playerA)}
            />
          </td>
          {#each playerA.scores as score, index}
          <td class="score-box">
            <input
                type="number"
                value={score}
                on:input={(e) => handleScoreChange(e, playerA, index)}
              />
            </td>
          {/each}
        </tr>
        <tr>
          <td class="player-box">
            <input
              type="text"
              value={playerB.name}
              on:change={(e) => handleNameChange(e, playerB)}
            /></td
          >
          {#each playerB.scores as score, index}
            <td class="score-box">
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
    <div class="flex flex-col">
      <button on:click={addScoreColumn} class="add-button">
        <span class="material-icons">
          add_circle_outline
        </span>
      </button>
      <button on:click={removeScoreColumn} class="minus-button">
        <span class="material-icons">
          remove_circle_outline
        </span>
      </button>
    </div>
  </div>
  <button on:click={handleSubmit}>Submit Scores</button>

</main>

<style>
  table {
    border-collapse: collapse;
  }
  th,
  td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: center;
  }
  .player-box {
    width: 10rem;
  }
  .material-icons {
    vertical-align: middle;
  }
  .score-box {
    width: 20px;
  }
</style>
