<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useClanStore } from './stores/clanStore';

let clanStore = useClanStore();
const isDarkMode = ref(false);
function toggleDarkMode() {
  isDarkMode.value = !isDarkMode.value;
  document.documentElement.classList.toggle('dark', isDarkMode.value);
  localStorage.setItem('darkMode', isDarkMode.value);
}

onMounted(() => {
  isDarkMode.value = localStorage.getItem('darkMode') === 'true';
  document.documentElement.classList.toggle('dark', isDarkMode.value);
});
</script>

<template>
  <div>
    <nav
      class="bg-background-dark dark:bg-background-dark text-text dark:text-text-contrast px-6 py-4 shadow-md flex justify-between items-center">
      <div class="text-primary font-bold text-xl flex flex-row">
        <img :src="clanStore.clanData?.badgeUrls?.small" alt="Clan logo" class="scale-75 object-contain" />
        <div class="pt-4 font-bold">{{ clanStore.clanData?.name }}</div>
      </div>
      <router-link to="/" class="hover:text-primary-dark transition">Home</router-link>
      <router-link to="/currentWar" class="hover:underline">Clankrieg</router-link>
      <router-link to="/history" class="hover:underline">Clankrieg-Verlauf</router-link>
      <router-link to="/members" class="hover:text-primary-dark transition">Mitglieder</router-link>
      <!-- <button @click="toggleDarkMode" class="ml-4 p-2 rounded-lg bg-primary-light dark:bg-primary-dark text-text">
        <i class="pi" :class="isDarkMode ? 'pi-moon' : 'pi-sun'"></i>
      </button> -->
      <div class="flex flex-row absolute top-0 right-10">

      </div>
    </nav>

    <main class="p-6">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
</style>
