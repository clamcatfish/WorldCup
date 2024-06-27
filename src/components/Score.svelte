<script>
  export let left1 = "";
  export let right1 = "";
  export let left2 = "";
  export let right2 = "";
</script>

<div class="row">
  <div class="left">{left1}</div>
  <div class="right">{right1}</div>
</div>
<div class="row">
  <div class="left">{left2}</div>
  <div class="right">{right2}</div>
</div>

<style>
  .row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
  .left,
  .right {
    flex: 1;
  }
  .right {
    text-align: right;
  }
</style>
