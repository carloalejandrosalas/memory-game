import Vue from "vue";
import App from "./App.vue";
import "./master.scss";

// Font awesome
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
