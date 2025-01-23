import ref from 'vue';
<script setup lang="ts">
import { ref } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import { getClanDetails } from '../api/clashApi';

const members = ref([{ name: 'Spieler1', role: 'Anführer', trophies: 3200 },
{ name: 'Spieler2', role: 'Mitglied', trophies: 2800 },]);

getClanDetails().then((data) => {
        console.log(data);
        members.value = data.data.memberList;
    });
</script>

<template>
    <div class="p-6">
      <h1 class="text-3xl font-bold mb-4">Mitgliederliste</h1>
      <p>Hier siehst du alle Mitglieder unseres Clans.</p>
      <br>
      <DataTable :value="members" responsiveLayout="scroll">
    <Column field="name" header="Name"></Column>
    <Column field="role" header="Rolle"></Column>
    <Column field="trophies" header="Trophäen"></Column>
  </DataTable>
      <router-link to="/" class="text-blue-500">Zurück zur Startseite</router-link>
    </div>
  </template>

<style scoped>

</style>