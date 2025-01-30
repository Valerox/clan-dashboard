import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";

export const useClanStore = defineStore("clan", () => {
  const clanData = ref({});
  const warLog = ref([]);
  const _interval = ref<number | null>(null);
  const clanTag = "#2G8UCRVPP";

  const api = axios.create({
    baseURL: "http://localhost:5000/",
  });

  function fetchClanData() {
    api
      .get(`/clan/${encodeURIComponent(clanTag)}`)
      .then((response) => {
        console.log(response.data);
        clanData.value = response.data;
      })
      .catch((err) => {
        console.error("Fehler beim Abrufen der Clan-Daten:", err);
      });
  }
  function startAutoUpdate(interval = 60000) {
    fetchClanData(); // Daten sofort laden
    if (_interval.value) clearInterval(_interval.value); // Vorheriges Intervall löschen
    _interval.value = setInterval(fetchClanData, interval); // Neues Intervall starten
  }

  function stopAutoUpdate() {
    if (_interval.value) {
      clearInterval(_interval.value);
      _interval.value = null;
    }
  }
  startAutoUpdate();
  api
    .get(`/clan/${encodeURIComponent(clanTag)}/lastwars`)
    .then((response) => {
      warLog.value = response.data;
      console.log(warLog.value);
    })
    .catch((err) => {
      console.error("Fehler beim Abrufen der Clan-Daten:", err);
    });
  return {
    clanData,
    warLog,
    startAutoUpdate,
    stopAutoUpdate,
  };
});
