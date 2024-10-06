<script setup>
import Footer from '../components/footer.vue'

const projects = () => {
  useRouter().push("/projects");
}

const contacts = () => {
  useRouter().push("/contact");
}
</script>
<template>
  <div class="font-montserrat">
    <header>
      <h2 class="font-bold text-left ml-5 mt-5 text-2xl">eqwzzx</h2>
      <img class="mx-auto rounded-2xl h-40 w-40 hover:transform hover:scale-105 hover:cursor-grab active:cursor-grabbing hover:transition hover:duration-300 transition duration-300" src="https://i.imgur.com/DpWYj2j.png" alt="pfp">
    </header>
    <main>
      <h1 class="font-bold text-center text-3xl mt-24 lg:mt-5">Welcome to eqwzzx's Portfolio</h1>
      <p class="text-center mt-2">Hi! I'm eqwzzx (Fish), I'm just starting out web development. I'm from Kazakhstan.</p>
      <div class="flex flex-col md:flex-row justify-center items-center mt-24 gap-24">
        <div @click="projects" class="flex rounded-2xl flex-col border-2 border-gray-500 h-40 text-md w-40 text-center border-solid p-4 transition hover:transform hover:scale-105 hover:transition hover:duration-200 hover:border-sky-500 hover:-rotate-12 cursor-pointer">
          <h4 class="font-bold">Projects</h4>
          <p class="mt-5">List of all of my projects</p>
        </div>
        <div @click="contacts" class="flex rounded-2xl flex-col border-2 border-gray-500 h-40 text-md w-40 text-center border-solid p-4 transition hover:transform hover:scale-105 hover:transition hover:duration-200 hover:border-sky-500 hover:-rotate-12 cursor-pointer">
          <h4 class="font-bold">Contact</h4>
          <p class="mt-5">My social media, etc</p>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>
