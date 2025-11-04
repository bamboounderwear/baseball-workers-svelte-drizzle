<section class="container-fluid py-10">
  <h1 class="text-3xl font-bold">News</h1>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
    {#each ['welcome','second','third'] as slug}
      <article class="border border-black p-4">
        <img alt="" class="w-full h-auto mb-3" src="https://placehold.co/600x300" />
        <h3 class="font-semibold"><a class="underline" href={'/news/' + slug}>Post: {slug}</a></h3>
      </article>
    {/each}
  </div>
</section>
