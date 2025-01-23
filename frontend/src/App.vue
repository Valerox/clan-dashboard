<script setup lang="ts">

</script>

<template>
  <div>
    <nav class="p-4 bg-gray-800 text-white flex space-x-4">
      <router-link to="/" class="hover:underline">Home</router-link>
      <router-link to="/clan" class="hover:underline">Clan-Details</router-link>
      <router-link to="/members" class="hover:underline">Mitglieder</router-link>
    </nav>

    <main class="p-6">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
