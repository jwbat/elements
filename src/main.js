import { createApp } from 'vue';

import App from './App.vue';

import BaseButton from './components/ui/BaseButton.vue';
import BaseCard from './components/ui/BaseCard.vue';
import ControlPanel from './components/ui/ControlPanel.vue';

const app = createApp(App);

app.component('base-button', BaseButton);
app.component('base-card', BaseCard);
app.component('control-panel', ControlPanel);

app.mount('#app');
