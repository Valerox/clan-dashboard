import ref from 'vue';
<script setup lang="ts">
import { ref } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import { useClanStore } from '../stores/clanStore';

const clanStore = useClanStore();
const formatClanRole = (role) => {
  const mapping = {
    leader: 'Chef',
    coLeader: 'Co-Chef',
    admin: 'Ältester',
    member: 'Bursch'
  };
  return mapping[role] || 'Unbekannt';
};
</script>

<template>
  <div class="p-6">
    <h1 class="text-3xl font-bold mb-4">Mitgliederliste</h1>
    <p>Hier siehst du alle Mitglieder unseres Clans.</p>
    <br>
    <DataTable :value="clanStore.clanData?.memberList" responsiveLayout="scroll">
      <Column field="name" header="Name"></Column>
      <Column header="Rolle">
        <template #body="data">
          {{ formatClanRole(data.data.role) }}
        </template>
      </Column>
      <Column field="trophies" header="Trophäen">
      <template #body="data">
        <div class="flex items-center">
          <span>{{ data.data.trophies }}</span>
          <img :src="data.data.league.iconUrls.small" class="w-8 h-8 ml-3" />
        </div>
        </template>
      </Column>
      <Column field="townHallLevel" header="Rathaus"></Column>
      <Column header="Spendenverhältnis">
        <template #body="data">
          {{ data.data.donations }} / {{ data.data.donationsReceived }}
        </template>
      </Column>
    </DataTable>
    <router-link to="/" class="text-blue-500">Zurück zur Startseite</router-link>
  </div>
</template>

<style scoped></style>