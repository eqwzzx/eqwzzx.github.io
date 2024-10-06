<script setup lang="ts">
const router = useRouter();

const goBack = () => {
  router.push("/");
}

const discord = () => {
  window.open("https://discord.com/users/808641359006400512")
}

const mail = () => {
  window.open("mailto:root@eqwzzx.fun")
}
</script>

<template>
  <div class="font-montserrat">
    <h1 class="font-bold text-3xl mt-7 text-center">Contact</h1>
    <p class="text-center mt-5 text-lg">My social media, other ways to contact me</p>
    <div class="flex flex-col md:flex-row justify-center items-center mt-24 gap-24">
      <div @click="discord" class="flex rounded-2xl flex-col border-2 border-gray-500 h-40 text-md w-40 text-center border-solid p-4 transition hover:transform hover:scale-105 hover:transition hover:duration-200 cursor-pointer">
        <h4 class="font-bold">Discord</h4>
        <p class="mt-5 text-md">Most preferred way of contacting me</p>
      </div>
      <div @click="mail" class="flex rounded-2xl flex-col border-2 border-gray-500 h-40 text-md w-40 text-center border-solid p-4 transition hover:transform hover:scale-105 hover:transition hover:duration-200 cursor-pointer">
        <h4 class="font-bold">Mail</h4>
        <p class="mt-5 text-md">Checked occasionally, not ideal</p>
      </div>
    </div>
    <div class="flex justify-center">
      <button @click="goBack" class="mt-24 bg-gray-700 p-4 rounded-lg text-white">Go back</button>
    </div>
  </div>
</template>
