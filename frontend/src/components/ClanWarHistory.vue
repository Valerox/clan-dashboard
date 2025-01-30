<script setup lang="ts">
import { useClanStore } from '../stores/clanStore';
import { computed, ref } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

const clanStore = useClanStore();
const warLog = computed(() => clanStore.warLog?.items);

const formatDate = (date: string) => {
    return new Date(date.replace(
        /(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2}\.\d{3}Z)/,
        "$1-$2-$3T$4:$5:$6"
    )).toLocaleDateString("de-DE", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    });
};
</script>

<template>
    <div class="bg-background-light dark:bg-background-dark text-text dark:text-text-contrast p-6 rounded-lg shadow-lg">
        <h2 class="text-primary text-2xl font-bold mb-4">Clankriegs-Historie</h2>

        <DataTable :value="warLog" paginator :rows="8" class="w-full">
            <Column field="endTime" header="Datum" sortable>
                <template #body="slotProps">
                    {{ formatDate(slotProps.data.endTime) }}
                </template>
            </Column>

            <Column field="opponent.name" header="Gegner" sortable></Column>

            <Column field="result" header="Ergebnis" sortable>
                <template #body="slotProps">
                    <span v-if="slotProps.data.result === 'win'" class="text-green-500 font-bold">
                        🏆 Sieg
                    </span>
                    <span v-else class="text-red-500 font-bold">❌ Niederlage</span>
                </template>
            </Column>

            <Column header="Sterne">
                <template #body="slotProps">
                    ⭐ {{ slotProps.data.clan.stars }} / ⭐ {{ slotProps.data.opponent.stars }}
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<style scoped></style>

<style scoped></style>