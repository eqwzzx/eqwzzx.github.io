<script setup lang="ts">
const router = useRouter();

const goBack = () => {
  router.push("/");
}
</script>

<template>
  <div class="font-montserrat">
  <h1 class="font-bold text-3xl mt-7 text-center">Projects</h1>
  <p class="text-center mt-5 text-lg">All of my projects</p>
    <div class="flex flex-col md:flex-row justify-center items-center mt-24 gap-24">
      <div @click="" class="flex rounded-2xl flex-col border-2 border-gray-500 h-40 text-md w-60 text-center border-solid p-4 transition hover:transform hover:scale-105 hover:transition hover:duration-200 cursor-pointer">
        <h4 class="font-bold">Pulsar</h4>
        <p class="mt-5">Multipurpose discord bot for your discord server</p>
        <p class="mt-2 text-sm text-green-400 font-mono">Done</p>
      </div>
<!--      <div @click="" class="flex rounded-2xl flex-col border-2 border-gray-500 h-40 text-md w-60 text-center border-solid p-4 transition hover:transform hover:scale-105 hover:transition hover:duration-200 cursor-pointer">-->
<!--        <h4 class="font-bold">404 Not found</h4>-->
<!--        <p class="mt-5">Soon...</p>-->
<!--        <p class="mt-2 text-sm text-orange-400 font-mono">In development</p>-->
<!--      </div>-->
    </div>
    <div class="flex justify-center">
      <button @click="goBack" class="mt-24 bg-gray-700 p-4 rounded-lg text-white">Go back</button>
    </div>
  </div>
</template>

<!--
<p class="mt-2 text-sm text-orange-400 font-mono">In development</p>
<p class="mt-2 text-sm text-green-400 font-mono">Done</p>
<p class="mt-2 text-sm text-red-400 font-mono">Not supported</p>
-->