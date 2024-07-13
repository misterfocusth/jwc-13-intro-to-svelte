<script>
  import "./app.css";
</script>

<nav class="flex flex-row items-center gap-4 p-4 bg-white rounded-lg shadow mb-8">
  <a href="/" class="hover:text-blue-600">Home</a>
  <a href="/about" class="hover:text-blue-600">About</a>
</nav>

<body class="h-screen">
  <slot />
</body>

<footer>
  <p class="text-center text-gray-500">Created with ❤️ by Sila at JWC13</p>
</footer>

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>
