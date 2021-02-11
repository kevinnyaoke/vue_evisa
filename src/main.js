import Vue from "vue";
import App from "./App.vue";

import VueApollo from "vue-apollo";
import apolloClient from "./vue-apollo";

import VueRouter from "vue-router";
Vue.use(VueRouter);

import './assets/assets-evisa/style.css'
import './assets/assets-evisa/evisake.css'
import './assets/assets-evisa/fonts.css'  
import './assets/assets-evisa/dropdown.css'

    

Vue.config.productionTip = false;

Vue.use(VueApollo);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

const router = new VueRouter({
  mode: "history",
  routes: [
    {

      path: "/",
      components: require("./Pages/Home.vue")
    },

    {
      path: "/pages/:id/",
      components: require("./Pages/Pages.vue")
    },

    {
      path: "/eligibility/",
      components: require("./Pages/Eligibility.vue")
    },

  ]
});

new Vue({
  apolloProvider,
  router,
  render: h => h(App)
}).$mount("#app");