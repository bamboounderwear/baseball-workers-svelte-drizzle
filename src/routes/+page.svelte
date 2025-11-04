<script lang="ts">
  // Phase 2: pull tokens/games/news via +page.server.ts from D1 (drizzle)
</script>

<section class="border-b border-black">
  <div class="relative">
    <img alt="Hero" src="https://placehold.co/1600x600" class="w-full h-auto" />
    <div class="container-fluid py-8">
      <h1 class="text-4xl md:text-6xl font-extrabold">Welcome to the Team</h1>
      <p class="mt-2 text-lg">Season is around the corner.</p>
      <a href="/games" class="inline-block underline mt-4">See Next Games</a>
    </div>
  </div>
</section>

<section class="container-fluid py-10">
  <h2 class="text-2xl font-bold mb-4">Next games</h2>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <article class="border border-black p-4">
      <h3 class="font-semibold">Home Opener vs Rivals</h3>
      <p class="text-sm">Tomorrow — Home Park</p>
      <a class="underline mt-2 inline-block" href="/games/1">Details</a>
    </article>
    <article class="border border-black p-4">
      <h3 class="font-semibold">Game 2 vs Sharks</h3>
      <p class="text-sm">Next Week — Home Park</p>
      <a class="underline mt-2 inline-block" href="/games/2">Details</a>
    </article>
    <article class="border border-black p-4">
      <h3 class="font-semibold">Game 3 @ Wolves</h3>
      <p class="text-sm">Two Weeks — Away</p>
      <a class="underline mt-2 inline-block" href="/games/3">Details</a>
    </article>
  </div>
</section>

<section class="container-fluid py-10 border-t border-black">
  <h2 class="text-2xl font-bold mb-4">Recent news</h2>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <article class="border border-black p-4">
      <img alt="" class="w-full h-auto mb-3" src="https://placehold.co/600x300" />
      <h3 class="font-semibold"><a class="underline" href="/news/welcome">Welcome to the Team</a></h3>
      <p class="text-sm">Season kick-off</p>
    </article>
    <article class="border border-black p-4">
      <img alt="" class="w-full h-auto mb-3" src="https://placehold.co/600x300" />
      <h3 class="font-semibold"><a class="underline" href="/news/second">Second post</a></h3>
      <p class="text-sm">More updates soon</p>
    </article>
    <article class="border border-black p-4">
      <img alt="" class="w-full h-auto mb-3" src="https://placehold.co/600x300" />
      <h3 class="font-semibold"><a class="underline" href="/news/third">Third post</a></h3>
      <p class="text-sm">Stay tuned</p>
    </article>
  </div>
</section>

<section class="container-fluid py-10 border-t border-black">
  <h2 class="text-2xl font-bold mb-4">Sign up for the newsletter</h2>
  <form class="max-w-md border border-black p-4">
    <label class="block text-sm mb-1" for="email">Email</label>
    <input id="email" name="email" type="email" class="w-full border border-black p-2" placeholder="you@example.com" />
    <button class="mt-3 underline" type="submit">Sign Up</button>
  </form>
</section>
