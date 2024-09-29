import { createApp } from "vue";
import router from "./router/index.js";
import { i18n } from './i18/index'
import App from "./App.vue";
import "./style.css";
import "flowbite";

import Toast, { POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";
import VueLazyload from "vue-lazyload";

i18n.global.locale = localStorage.getItem('lang') || 'ru'
const app = createApp(App);

app.use(Toast, {
  position: POSITION.TOP_RIGHT,
  timeout: 5000,
  hideProgressBar: false,
  closeOnClick: true,
});

app.config.globalProperties.$uploadUrl = 'http://owaz.com.tm:5050/uploads/images'
app.use(VueLazyload)
app.use(i18n)
app.use(router);
app.mount("#app");