<script>
  import { Calendar } from "calendar";
  let thisMonth = false;
  const cal = new Calendar(1);
  const m = cal.monthDates(2021, 7, (d) => d.getDate());
  m.map((d) => console.log(d));
</script>

<div class="grid-template">
  <div>lun</div>
  <div>mar</div>
  <div>mer</div>
  <div>jeu</div>
  <div>ven</div>
  <div>sam</div>
  <div>dim</div>
  {#each m as w, i}
    {#each w as d, j}
      <div class:glass-effect={d === 26}>
        {d}
      </div>
    {/each}
  {/each}
</div>

<style>
  .grid-template {
    display: grid;
    grid-template-columns: repeat(7, 3em);
  }
  .grid-template div {
    text-align: center;
    line-height: 2rem;
    /* filter: blur(10px); */
  }
  .glass-effect {
    box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.7);
    text-align: inherit;
    width: 2.25rem;
    height: 2.25rem;
    border-radius: 50%;
    margin: 0 auto;
    padding: 0 auto;
    border: 1px solid rgba(0, 0, 0, 0.05);
  }
</style>
