import { createApp } from 'vue';
import './styles/style.scss';
import '../node_modules/bootstrap/dist/js/bootstrap';
import App from './App.vue';
import router from './router';

createApp(App).use(router).mount('#app');
