import * as bootstrap from 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia';
import App from './App.vue'

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.provide('bootstrap', bootstrap);
app.mount('#app');
