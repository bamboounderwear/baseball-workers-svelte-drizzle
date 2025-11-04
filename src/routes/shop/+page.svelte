<section class="container-fluid py-10">
  <h1 class="text-3xl font-bold">Shop</h1>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
    {#each ['team-cap','jersey','hoodie','ball'] as slug}
      <article class="border border-black p-3">
        <a href={'/product/' + slug}>
          <img alt="" src="https://placehold.co/600x600" class="w-full h-auto mb-2" />
          <h3 class="font-semibold">{slug}</h3>
        </a>
      </article>
    {/each}
  </div>
</section>
