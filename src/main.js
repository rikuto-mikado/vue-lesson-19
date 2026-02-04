import { createApp } from 'vue';

// Import the root App component and child components
import App from './App.vue';
import BaseBadge from './components/BaseBadge.vue';

const app = createApp(App);

// Register components globally so they can be used in any template
app.component('base-badge', BaseBadge);

app.mount('#app');
