import { createApp } from 'vue';
import App from './App.vue';
import VideoPlayer from '../PATH/TO/VideoPlayer.vue';

createApp(App)
  .component('VideoPlayer', VideoPlayer)
  .mount('#app');
