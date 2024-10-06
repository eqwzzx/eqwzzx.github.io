<script setup>
const toggleDarkMode = () => {
  document.documentElement.classList.toggle('dark');
}
</script>

<template>
  <header>
    <div class="flex justify-between items-center p-4">
      <h1 class="font-bold text-left text-3xl ml-12 hover:transform hover:scale-105 hover:transition hover:duration-300">eqwzzx</h1>
      <button @click="toggleDarkMode" class="backdrop-blur-md  bg-black text-white cursor-pointer rounded-md px-4 py-2 text-lg hover:bg-gray-700 transition-all">Switch Theme</button>
    </div>
  </header>
</template>
