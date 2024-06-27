<script>
  import { onMount } from "svelte";

  /**
   * @type {any[]}
   */
  let scores = [];

  onMount(async () => {
    const res = await fetch("/src/api/scores");
    scores = await res.json();
  });

  const getWinnerIndicator = (
    /** @type {number} */ playerScore,
    /** @type {number} */ opponentScore
  ) => (playerScore > opponentScore ? "→" : "");
</script>

<div class="scores-bar">
  {#each scores as { player1, player2, player1_score, player2_score }}
    <div class="score">
      <div class="player" class:left={player1_score > player2_score}>
        {player1}
        <span class="score"
          >{player1_score}
          {getWinnerIndicator(player1_score, player2_score)}</span
        >
      </div>
      <div class="player" class:left={player2_score > player1_score}>
        {player2}
        <span class="score"
          >{player2_score}
          {getWinnerIndicator(player2_score, player1_score)}</span
        >
      </div>
    </div>
  {/each}
</div>

<style>
  .scores-bar {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
  }
  .score {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
  .player {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .left {
    color: black;
  }
  .player.right {
    text-align: right;
  }
  .score {
    margin-left: auto;
  }
</style>
