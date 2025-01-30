<script setup>
import { ref, onMounted, computed } from "vue";

const warStore = useWarStore();
const clanTag = ref("DEINCLANTAG");

onMounted(() => {
  warStore.fetchCurrentWar(clanTag.value);
});

const myClan = computed(() => warStore.warData?.clan);
const enemyClan = computed(() => warStore.warData?.opponent);
</script>

<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">⚔️ Clankrieg Übersicht</h1>

    <p v-if="warStore.isLoading">⏳ Lade Daten...</p>
    <p v-else-if="warStore.isError" class="text-red-500">❌ Fehler beim Laden der Kriegsdaten!</p>

    <div v-else class="bg-gray-100 p-4 rounded-lg shadow-md">
      <h2 class="text-xl font-semibold">🆚 {{ myClan?.name }} vs. {{ enemyClan?.name }}</h2>
      <p>Status: <strong>{{ warStore.warData?.state }}</strong></p>
      <p>Verbleibende Zeit: <strong>{{ new Date(warStore.warData?.endTime).toLocaleString("de-DE") }}</strong></p>

      <div class="grid grid-cols-2 gap-4 mt-4">
        <div class="bg-white p-4 rounded-lg shadow">
          <h3 class="text-lg font-semibold">🏆 Unser Clan</h3>
          <p>Sterne: <strong>{{ myClan?.stars }}</strong></p>
          <p>Zerstörung: <strong>{{ myClan?.destructionPercentage }}%</strong></p>
          <p>Verbleibende Angriffe: <strong>{{ myClan?.attacks }}</strong></p>
        </div>
        <div class="bg-white p-4 rounded-lg shadow">
          <h3 class="text-lg font-semibold">🔥 Gegner</h3>
          <p>Sterne: <strong>{{ enemyClan?.stars }}</strong></p>
          <p>Zerstörung: <strong>{{ enemyClan?.destructionPercentage }}%</strong></p>
          <p>Verbleibende Angriffe: <strong>{{ enemyClan?.attacks }}</strong></p>
        </div>
      </div>

      <h2 class="text-xl font-semibold mt-6">📜 Angriffsübersicht</h2>
      <DataTable :value="myClan?.members" class="p-datatable-sm mt-4">
        <Column field="name" header="Spieler"></Column>
        <Column field="attacks" header="Angriffe benutzt">
          <template #body="slotProps">
            {{ slotProps.data.attacks?.length || 0 }}/2
          </template>
        </Column>
        <Column field="bestOpponentAttack" header="Beste Attacke">
          <template #body="slotProps">
            ⭐ {{ slotProps.data.bestOpponentAttack?.stars || 0 }} | {{ slotProps.data.bestOpponentAttack?.destructionPercentage || 0 }}%
          </template>
        </Column>
      </DataTable>
    </div>
  </div>
</template>