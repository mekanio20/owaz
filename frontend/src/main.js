import { createApp } from "vue";
import router from "./router/index.js";
import App from "./App.vue";
import "./style.css";
import "flowbite";

import Toast, { POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";

const app = createApp(App);

app.use(Toast, {
  position: POSITION.TOP_RIGHT,
  timeout: 5000,
  hideProgressBar: false,
  closeOnClick: true,
});

app.use(router);
app.mount("#app");