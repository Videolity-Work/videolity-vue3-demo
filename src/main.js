import { createApp } from "vue";
import "./assets/style.css";
import App from "./App.vue";
import VueSmoothScroll from "vue3-smooth-scroll";
import VideoPlayer from './components/VideoPlayer.vue';
import Button from "./components/Button.vue";
import LinkButton from "./components/VideoPlayer.vue";

let app = createApp(App)
.component('VideoPlayer', VideoPlayer)
.mount('#app');

app.use(VueSmoothScroll);

app.component("Button", Button);
app.component("LinkButton", LinkButton);

app.mount("#app");
