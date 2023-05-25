import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@/assets/styles.scss';
import { setupPrimevue, setupCustomComponents } from './plugins';

const app = createApp(App);

setupPrimevue(app);
setupCustomComponents(app);

app.use(router);

app.mount('#app');
