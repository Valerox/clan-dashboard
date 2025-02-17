import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";

export const useClanStore = defineStore("clan", () => {
  const _interval = ref<number | null>(null);
  const clanTag = "#2G8UCRVPP";

  const clanData = ref({});
  const warLog = ref([]);
  const currentWar = ref({});

  const api = axios.create({
    baseURL: "http://localhost:5000/",
  });

  function fetchClan() {
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
  function fetchCurrentWar() {
    api
      .get(`/clan/${encodeURIComponent(clanTag)}/currentwar`)
      .then((response) => {
        console.log(response.data);
        currentWar.value = response.data;
      })
      .catch((err) => {
        console.error("Fehler beim Abrufen der Clankrieg-Daten:", err);
      });
  }

  function fetchData () {
    fetchClan();
    fetchCurrentWar();
  }

  function startAutoUpdate(interval = 60000) {
    fetchData(); // Daten sofort laden
    if (_interval.value) clearInterval(_interval.value); // Vorheriges Intervall löschen
    _interval.value = setInterval(fetchData, interval); // Neues Intervall starten
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
    currentWar,
    startAutoUpdate,
    stopAutoUpdate,
  };
});
