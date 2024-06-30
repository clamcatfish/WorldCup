<!-- ScoreInput.svelte -->
<script>
  export let player;
  export let onScoreChange;
  export let onTiebreakerChange;
  export let onNameChange;
</script>

<style>
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
  .score-input input {
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
