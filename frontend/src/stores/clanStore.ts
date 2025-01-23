import { defineStore } from 'pinia';
import axios from 'axios';

export const useClanStore = defineStore('clan', {
  state: () => ({
    clanData: null, // Hier werden die Clan-Daten gespeichert
    error: null, // Für Fehlermeldungen
  }),

  actions: {
    // Aktion zum Abrufen der Clan-Daten vom Backend
    async fetchClanData() {
      try {
        const response = await axios.get('/api/clan/#CLANTAG'); // API-Endpunkt ersetzen
        this.clanData = response.data;
        this.error = null;
      } catch (err) {
        console.error('Fehler beim Abrufen der Clan-Daten:', err);
        this.error = 'Fehler beim Laden der Clan-Daten.';
      }
    },

    // Intervall zur automatischen Aktualisierung starten
    startAutoUpdate(interval = 60000) {
      this.fetchClanData(); // Daten sofort laden
      if (this._interval) clearInterval(this._interval); // Vorheriges Intervall löschen
      this._interval = setInterval(this.fetchClanData, interval); // Neues Intervall starten
    },

    // Intervall stoppen
    stopAutoUpdate() {
      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }
    },
  },

  // Speicher aufräumen, wenn der Store nicht mehr gebraucht wird
  onDestroy() {
    this.stopAutoUpdate();
  },
});