<section class="container-fluid py-10">
  <h1 class="text-3xl font-bold">Games & Schedule</h1>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
    {#each [1,2,3] as id}
      <article class="border border-black p-4">
        <h3 class="font-semibold">Game {id}</h3>
        <p class="text-sm">Opponent TBD — Venue TBD</p>
        <a class="underline mt-2 inline-block" href={'/games/' + id}>Open game</a>
      </article>
    {/each}
  </div>
</section>
