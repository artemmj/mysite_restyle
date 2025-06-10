import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { prismDirective } from './directives/prism';

const app = createApp(App);

app.directive('prism', prismDirective);
app.use(router);
app.mount('#app');
