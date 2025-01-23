<script setup lang="ts">
    import { ref } from 'vue';
    import { getClanDetails } from '../api/clashApi';
    const clan = ref({});

    getClanDetails().then((data) => {
        console.log(data);
      clan.value = data.data;
    });
    
</script>

<template>
    <div class="p-6">
      <h1 class="text-3xl font-bold mb-4">Clan Details</h1>
      <p>Hier findest du Informationen zu unserem Clan.</p>
      <br>
      <div class="p-4">
    <h1 class="text-3xl font-bold mb-4">{{ clan.name }}</h1>
    <p>Level: {{ clan.clanLevel }}</p>
    <p>Mitglieder: {{ clan.members }}</p>
  </div>
      <router-link to="/" class="text-blue-500">Zurück zur Startseite</router-link>
    </div>
  </template>

<style scoped>

</style>