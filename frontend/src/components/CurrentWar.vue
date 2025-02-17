<script setup>
import { ref, onMounted, computed } from "vue";
import { useClanStore } from "../stores/clanStore";
import DataTable from "primevue/datatable";
import Column from "primevue/column";

const clanStore = useClanStore();
const currentwar = computed(() => clanStore.currentWar);

const myClan = computed(() => clanStore.currentWar?.clan);
const enemyClan = computed(() => clanStore.currentWar?.opponent);

function getStatusClass(status) {
  switch (status) {
    case "Angegriffen":
      return "bg-green-100 text-green-700";
    case "Verteidigung":
      return "bg-yellow-100 text-yellow-700";
    case "Nicht angegriffen":
      return "bg-red-100 text-red-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
}
</script>

<template>
  <DataTable :value="myClan?.members" class="p-datatable-sm mt-4">
    <Column field="name" header="Spieler"></Column>
    <Column field="attacks" header="Angriffe benutzt">
      <template #body="slotProps">
        {{ slotProps.data.attacks?.length || 0 }}/2
      </template>
    </Column>
    <Column field="bestOpponentAttack" header="Beste Attacke">
      <template #body="slotProps">
        ⭐ {{ slotProps.data.bestOpponentAttack?.stars || 0 }} | {{
          slotProps.data.bestOpponentAttack?.destructionPercentage || 0 }}%
      </template>
    </Column>
  </DataTable>
</template>