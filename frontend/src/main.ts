import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import 'primevue/resources/themes/saga-blue/theme.css';  // Theme
import 'primevue/resources/primevue.min.css';           // Core CSS
import 'primeicons/primeicons.css';                     // Icons
import routes from './router/routes.js';
import { createPinia } from 'pinia';

const app = createApp(App);
const pinia = createPinia();

app.use(PrimeVue);
app.use(routes);
app.use(pinia);
app.mount('#app');
