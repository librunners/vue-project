<template>
  <div class="app-container">
    <mt-header fixed title="Vue 项目"></mt-header>
    <transition>
      <router-view></router-view>
    </transition>
    <nav class="mui-bar mui-bar-tab">
      <router-link to="/home" tag="a" class="mui-tab-item">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link to="/member" tag="a" class="mui-tab-item">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link to="/shopcar" tag="a" class="mui-tab-item">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge">9</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link to="/search" tag="a" class="mui-tab-item">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
  </div>
</template>

<style scoped>
.v-enter {
  position: absolute;
  opacity: 0;
  transform: translateX(100%);
}

.v-leave-to {
  position: absolute;
  opacity: 0;
  transform: translateX(-100%);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
.app-container {
  padding-top: 40px;
  padding-bottom: 50px;
  overflow-x: hidden;
}
</style>
