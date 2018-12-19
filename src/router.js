import VueRouter from "vue-router";
import Home from "./components/tabbar/Home.vue";
import Member from "./components/tabbar/Member.vue";
import Shopcar from "./components/tabbar/Shopcar.vue";
import Search from "./components/tabbar/Search.vue";
import NewsList from "./components/news/NewsList.vue";
// import NewsInfo from './components/news/NewsInfo.vue'
import PhotoList from "./components/photos/PhotoList.vue";
import Photoinfo from "./components/photos/PhotoInfo.vue";
import Comments from "./components/subcomponents/Comment.vue";

var routes = new VueRouter({
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: Comments },
    { path: "/member", component: Member },
    { path: "/shopcar", component: Shopcar },
    { path: "/search", component: Search },
    { path: "/home/newslist", component: NewsList },
    // { path: "/home/newslist/:id", component: NewsInfo },
    { path: "/home/PhotoList", component: PhotoList },
    { path: "/home/photoinfo/:id", component: Photoinfo }
  ],
  linkActiveClass: "mui-active"
});

export default routes;
