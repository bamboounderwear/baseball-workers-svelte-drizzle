<script lang="ts">
  export let params;
</script>

<section class="container-fluid py-10">
  <img alt="" src="https://placehold.co/1000x700" class="w-full h-auto mb-6" />
  <h1 class="text-3xl font-bold capitalize">{params.slug.replace('-', ' ')}</h1>
  <p class="text-xl my-2">$25.00</p>
  <p class="max-w-prose mb-4">Description will come from D1 in Phase 2.</p>
  <form class="flex gap-3 items-end">
    <label class="block">
      <span class="text-sm block mb-1">Qty</span>
      <input type="number" min="1" value="1" class="border border-black p-2 w-20" />
    </label>
    <button class="underline">Add to cart</button>
  </form>
</section>
