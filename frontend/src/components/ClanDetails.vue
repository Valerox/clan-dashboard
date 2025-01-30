<script setup lang="ts">
    import { computed, ref } from 'vue';
   import { useClanStore } from '../stores/clanStore';
    const clanStore = useClanStore();
    const clan = computed(() => clanStore.clanData);

    const formatWarStatus = (status) => {
      const mapping = {
        always: 'Immer',
        often: 'Oft',
        never: 'Nie',
        unknown: 'Unbekannt'
      };
      return mapping[status] || 'Unbekannt';
    };
    
</script>

<template>
  <div class="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl">
    <div v-if="clan" class="space-y-6">
      <!-- Clan Header -->
      <div class="flex items-center space-x-4">
        <img :src="clan.badgeUrls?.medium" alt="Clan Badge" class="w-16 h-16 rounded-full shadow-lg">
        <div>
          <h1 class="text-2xl font-bold">{{ clan.name }}</h1>
          <p class="text-gray-500">Tag: <span class="font-mono">{{ clan.tag }}</span></p>
        </div>
      </div>

      <!-- Statistiken -->
      <div class="grid grid-cols-3 gap-4">
        <div class="p-4 bg-gray-100 rounded-lg text-center">
          <p class="text-lg font-semibold">{{ clan.members }}</p>
          <p class="text-gray-600 text-sm">Mitglieder</p>
        </div>
        <div class="p-4 bg-gray-100 rounded-lg text-center">
          <p class="text-lg font-semibold">{{ clan.clanPoints }}</p>
          <p class="text-gray-600 text-sm">Clan Punkte</p>
        </div>
        <div class="p-4 bg-gray-100 rounded-lg text-center">
          <p class="text-lg font-semibold">{{ clan.warLeague.name }}</p>
          <p class="text-gray-600 text-sm">Kriegsliga</p>
        </div>
        <div class="p-4 bg-gray-100 rounded-lg text-center">
          <p class="text-lg font-semibold">{{ clan.warWins }}</p>
          <p class="text-gray-600 text-sm">Kriegsiege</p>
        </div>
        <div class="p-4 bg-gray-100 rounded-lg text-center">
          <p class="text-lg font-semibold">{{ clan.warWinStreak }}</p>
          <p class="text-gray-600 text-sm">Siegesserie</p>
        </div>
        <div class="p-4 bg-gray-100 rounded-lg text-center">
          <p class="text-lg font-semibold">{{ Math.round(clan.warWins / (clan.warWins + clan.warLosses + clan.warTies) * 100), 0}}%</p>
          <p class="text-gray-600 text-sm">Winrate</p>
        </div>
      </div>

      <!-- Clan Beschreibung -->
      <div class="p-4 bg-gray-50 rounded-lg">
        <h2 class="text-lg font-semibold mb-2">Beschreibung</h2>
        <p class="text-gray-600">{{ clan.description || 'Keine Beschreibung verfügbar' }}</p>
      </div>

      <!-- Kriegsstatus -->
      <div class="flex items-center space-x-2">
        <span class="text-lg font-semibold">Kriegsstatus:</span>
        <span 
          class="px-3 py-1 rounded-full text-white"
          :class="{
            'bg-green-500': clan.warFrequency === 'always',
            'bg-yellow-500': clan.warFrequency === 'often',
            'bg-gray-400': clan.warFrequency === 'never'
          }"
        >
          {{ formatWarStatus(clan.warFrequency) }}
        </span>
      </div>
    </div>
</div>
</template>

<style scoped>

</style>