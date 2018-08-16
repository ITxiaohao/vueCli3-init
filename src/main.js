import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// var env = process.env.NODE_ENV;
// console.log(env);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
