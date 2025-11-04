<script lang="ts">
  export let params;
</script>

<section class="container-fluid py-10">
  <h1 class="text-3xl font-bold">Game {params.id}</h1>
  <p class="mb-4">Date — Opponent — Venue</p>

  <h2 class="text-xl font-semibold mb-2">Tickets</h2>
  <div class="overflow-auto border border-black">
    <table class="w-full text-left">
      <thead class="border-b border-black">
        <tr>
          <th class="p-2">Section</th>
          <th class="p-2">Row</th>
          <th class="p-2">Seat</th>
          <th class="p-2">Price</th>
          <th class="p-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {#each Array(5) as _, i}
        <tr class="border-b border-black">
          <td class="p-2">A</td>
          <td class="p-2">3</td>
          <td class="p-2">{i+1}</td>
          <td class="p-2">$25.00</td>
          <td class="p-2">
            <form>
              <label class="sr-only" for={'section-' + i}>Section</label>
              <select id={'section-' + i} class="border border-black p-1">
                <option>A</option><option>B</option>
              </select>
              <button class="underline ml-2">Add to cart</button>
            </form>
          </td>
        </tr>
        {/each}
      </tbody>
    </table>
  </div>
</section>
