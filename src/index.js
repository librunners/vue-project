import Vue from "vue/dist/vue.js";
import App from "./App.vue";
import VueRouter from "vue-router";
import router from "./router.js";

//加载mui组件
import "../lib/mui/css/mui.min.css";
import "../lib/mui/css/icons-extra.css";

//按需加载mintui组件
import { Header, Swipe, SwipeItem } from "mint-ui";
import "mint-ui/lib/style.css";

//安装ajax请求组件 vue-resource
import VuerResource from "vue-resource";

Vue.use(VueRouter);
Vue.use(VuerResource);
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

new Vue({
  el: "#app",
  router,
  render: c => c(App)
});
