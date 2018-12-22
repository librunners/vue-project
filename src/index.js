import Vue from "vue/dist/vue.js";
import App from "./App.vue";
import VueRouter from "vue-router";
import router from "./router.js";

//加载mui组件
import "./lib/mui/css/mui.min.css";
import "./lib/mui/css/icons-extra.css";

// //按需加载mintui组件 导致小图标无法使用
// import { Header, Swipe, SwipeItem, Button, Lazyload } from "mint-ui";
// import "mint-ui/lib/style.css";
// Vue.component(Header.name, Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
// Vue.use(Lazyload);
import MintUI from "mint-ui";
Vue.use(MintUI);
import "mint-ui/lib/style.css";

//安装ajax请求组件 vue-resource
import VuerResource from "vue-resource";

//安装时间格式化插件
import moment from "moment";

//安装缩略图插件
import VuePreview from "vue-preview";
Vue.use(VuePreview);

Vue.use(VueRouter);
Vue.use(VuerResource);

Vue.http.options.root = "http://www.liulongbin.top:3005";

//定义全局时间过滤器
Vue.filter("dateFormat", function(dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern);
});

new Vue({
  el: "#app",
  router,
  render: c => c(App)
});
