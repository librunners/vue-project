import Vue from 'vue/dist/vue.js'
import App from './App.vue'

import VueRouter from "vue-router"
Vue.use(VueRouter)

import router from "./router.js"

new Vue({
    el: '#app',
    router,
    render: c => c(App)
})