import Vue from "vue/dist/vue.js";
import App from "./App.vue";
import VueRouter from "vue-router";
import router from "./router.js";

//加载mui组件
import "../lib/mui/css/mui.min.css";
import "../lib/mui/css/icons-extra.css";

//按需加载mintui组件
import { Header } from "mint-ui";
import "mint-ui/lib/style.css";

Vue.use(VueRouter);
Vue.component(Header.name, Header);

new Vue({
  el: "#app",
  router,
  render: c => c(App)
});
