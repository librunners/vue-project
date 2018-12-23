import Vue from "vue/dist/vue.js";
import App from "./App.vue";
import VueRouter from "vue-router";
import router from "./router.js";
import Vuex from "vuex";

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
Vue.use(Vuex);

Vue.http.options.root = "http://www.liulongbin.top:3005";

//定义全局时间过滤器
Vue.filter("dateFormat", function(dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
  return moment(dataStr).format(pattern);
});

var car = JSON.parse(localStorage.getItem("car") || "[]");

var store = new Vuex.Store({
  state: {
    car: car
  },
  mutations: {
    addToCar(state, goodsinfo) {
      var falg = false;
      //判断car里面有该商品么
      state.car.some(item => {
        if (item.id == goodsinfo.id) {
          item.total = item.total + parseInt(goodsinfo.total);
          falg = true;
          return true;
        }
      });

      if (!falg) {
        state.car.push(goodsinfo);
      }

      localStorage.setItem("car", JSON.stringify(state.car));
    },
    updateGoodsInfo(state, data) {
      state.car.some(item => {
        if (item.id == data.id) {
          item.total = parseInt(data.total);
          return true;
        }
      });

      localStorage.setItem("car", JSON.stringify(state.car));
    },
    updateGoodsSelected(state, info) {
      state.car.some(item => {
        if (item.id == info.id) {
          item.selected = info.selected;
        }
      });

      localStorage.setItem("car", JSON.stringify(state.car));
    }
  },
  getters: {
    getAllTotal(state) {
      var total = 0;
      state.car.forEach(item => {
        total += item.total;
      });

      return total;
    },
    getTotalIds(state) {
      var o = {};
      state.car.forEach(item => {
        o[item.id] = item.total;
      });

      return o;
    },
    getGoodsSelected(state) {
      var o = {};
      state.car.forEach(item => {
        o[item.id] = item.selected;
      });
      return o;
    },
    getTotalPrice(state) {
      var o = {
        total: 0,
        amout: 0
      };

      state.car.forEach(item => {
        if (item.selected) {
          o.total += item.total;
          o.amout += item.price * item.total;
        }
      });
      return o;
    }
  }
});

new Vue({
  el: "#app",
  router,
  store,
  render: c => c(App)
});
