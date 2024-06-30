<script>
  // @ts-ignore
  import axios from "axios";
  import PlayerRow from "../../components/PlayerRow.svelte";

  let playerCount = 2;
  let setCount = 2;
  let players = [];
  for (let i = 0; i < playerCount; i++) {
    players.push({
      name: `Player ${i + 1}`,
      playerId: "",
      scores: Array(setCount).fill(0),
      tiebreakers: Array(setCount).fill(null),
    });
  }

  function addPlayerRow() {
    players.push({
      name: `Player ${playerCount + 1}`,
      playerId: "",
      scores: Array(setCount).fill(0),
      tiebreakers: Array(setCount).fill(null),
    });
    playerCount += 1;
    players = [...players];
  }

  function removePlayerRow() {
    players.pop();
    playerCount -= 1;
    players = [...players];
  }

  function handleNameChange(event, player) {
    const value = event.target.value;
    player.name = value;
    console.log(player);
  }

  function handleScoreChange(player, index, value) {
    player.scores[index] = value !== "" ? parseInt(value, 10) : 0;
    console.log(players[0].scores);
  }

  function handleTiebreakerChange(player, index, value) {
    player.tiebreakers[index] = value !== "" ? parseInt(value, 10) : null;
    console.log(players[0].tiebreakers);
  }

  function addScoreColumn() {
    players.forEach((player) => {
      player.scores.push(0);
      player.tiebreakers.push(null);
    });
    setCount += 1;
    players = [...players];
  }

  function removeScoreColumn() {
    players.forEach((player) => {
      player.scores.pop();
      player.tiebreakers.pop();
    });
    setCount -= 1;
    players = [...players];
  }

  async function handleSubmit() {
    try {
      const response = await axios.post("/api/scores/add", { players });
      console.log("Score saved:", response.data);
    } catch (error) {
      console.error("Error saving score:", error);
    }
  }
</script>

<main class="ml-8 mt-8">
  <h1 class="font-bold text-3xl">Add Game Score</h1>
  <hr class="my-2" />
  <div class="flex flex-row">
    <table>
      <thead>
        <tr>
          <th>Player</th>
          {#each { length: setCount } as _, index}
            <th>Set {index + 1}</th>
          {/each}
        </tr>
      </thead>
      <tbody>
        {#each players as player}
          <tr>
            <td class="player-box">
              <input
                type="text"
                value={player.name}
                on:input={(e) => handleNameChange(e, player)}
              />
            </td>
            {#each player.tiebreakers as tiebreaker, index}
              <td>
                <div class="tiebreaker-row">
                  <input
                    type="number"
                    value={tiebreaker}
                    on:input={(e) =>
                      handleTiebreakerChange(player, index, e.target.value)}
                  />
                </div>
                <div class="score-row">
                  <input
                    type="number"
                    value={player.scores[index]}
                    on:input={(e) =>
                      handleScoreChange(player, index, e.target.value)}
                    placeholder="Score"
                  />
                </div>
              </td>
            {/each}
          </tr>
        {/each}
      </tbody>
    </table>
    <div class="flex flex-col">
      <button on:click={addScoreColumn} class="add-button">
        <span class="material-icons"> add_circle_outline </span>
      </button>
      <button on:click={removeScoreColumn} class="minus-button">
        <span class="material-icons"> remove_circle_outline </span>
      </button>
    </div>
  </div>
  <div class="flex flex-row">
    <button on:click={addPlayerRow} class="add-button">
      <span class="material-icons"> add_circle_outline </span>
    </button>
    <button on:click={removePlayerRow} class="minus-button">
      <span class="material-icons"> remove_circle_outline </span>
    </button>
  </div>
  <button
    class="px-4 py-2 mt-4 bg-emerald-600 text-white font-semibold rounded-md"
    on:click={handleSubmit}>Submit</button
  >
</main>

<style>
  table {
    border-collapse: collapse;
    border-width: 1px;
    border-color: black;
  }
  td {
    padding: 0%;
    text-align: center;
    width: 50px;
    height: 25px;
    border-width: 1px;
    border-color: darkgray;
  }
  .player-box input,
  .player-box {
    min-height: 45px;
    width: 100px;
    background-color: teal;
    color: white;
    font-weight: 500;
  }
  .player-box input {
    margin-left: 8px;
  }
  .material-icons {
    vertical-align: middle;
  }
  .minus-button,
  .add-button {
    height: 24px;
    width: 24px;
    line-height: 1;
  }
  .score-input {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .score-row {
    height: 30px;
  }
  .tiebreaker-row {
    height: 15px;
    background-color: #f0f0f0;
  }
  .score-row,
  .tiebreaker-row {
    display: flex;
    align-items: center;
  }
  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .tiebreaker-row input,
  .score-row input {
    width: 100%;
    height: 100%;
    text-align: center;
    color: black;
    font-weight: 500;
  }
  .tiebreaker-row input {
    color: darkgray;
    font-size: small;
    background-color: #f0f0f0;
  }
</style>
