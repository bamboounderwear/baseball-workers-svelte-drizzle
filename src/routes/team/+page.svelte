<section class="container-fluid py-10">
  <h1 class="text-3xl font-bold">Team</h1>
  <p class="text-lg mb-6">Meet the team.</p>
  <p class="mb-6 max-w-prose">About team description goes here. In Phase 2 we will pull from D1.</p>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
    {#each Array(8) as _, i}
      <article class="border border-black p-3">
        <img alt="" src="https://placehold.co/400x400" class="w-full h-auto mb-2" />
        <h3 class="font-semibold">Player {i + 1}</h3>
        <p class="text-sm">Short bio here.</p>
      </article>
    {/each}
  </div>
</section>
