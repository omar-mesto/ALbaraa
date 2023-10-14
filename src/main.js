import { createApp } from 'vue';
import '../src/assets/base.css'

import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import './assets/main.css';
// import 'flowbite';

const app = createApp(App);


const pinia = createPinia();

app.use(pinia);
app.use(router);

app.mount('#app');
