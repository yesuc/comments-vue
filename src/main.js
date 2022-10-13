import Vue from "vue";
import Vuetify from "vuetify/lib";
import Vuex from "vuex";
import App from "./components/core/App";
import createStore from "./store";

Vue.config.productionTip = false;

Vue.use(Vuetify);
const vuetify = new Vuetify({
  theme: { dark: true },
});

Vue.use(Vuex);
const store = createStore();

new Vue({
  vuetify,
  store: store,
  render: (h) => h(App)
}).$mount("#app");
