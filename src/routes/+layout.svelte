<script lang="ts">
  export let data;
</script>

<link rel="stylesheet" href="/custom.css">

<div class="min-h-screen flex flex-col">
  <header class="border-b border-black">
    <nav class="container-fluid flex items-center justify-between py-4">
      <a href="/" class="font-bold uppercase tracking-widest">Baseball Team</a>
      <ul class="flex gap-6">
        <li><a href="/team" class="underline">Team</a></li>
        <li><a href="/news" class="underline">News</a></li>
        <li><a href="/games" class="underline">Games</a></li>
        <li><a href="/shop" class="underline">Shop</a></li>
        <li><a href="/admin" class="underline">Admin</a></li>
      </ul>
      <a href="/cart" aria-label="Cart" class="underline">Cart (0)</a>
    </nav>
  </header>

  <main class="flex-1">
    <slot />
  </main>

  <footer class="border-t border-black">
    <div class="container-fluid py-6 text-sm flex items-center justify-between">
      <span>&copy; {new Date().getFullYear()} Baseball Team</span>
      <ul class="flex gap-4">
        <li><a class="underline" href="https://twitter.com">Twitter</a></li>
        <li><a class="underline" href="https://instagram.com">Instagram</a></li>
        <li><a class="underline" href="https://facebook.com">Facebook</a></li>
      </ul>
    </div>
  </footer>
</div>
