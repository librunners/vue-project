<template>
  <div class="newlist-container">
    <ul class="mui-table-view">
      <router-link
        tag="li"
        :to="'/home/newslist/'+item.id"
        v-for="item in newList"
        :key="item.id"
        class="mui-table-view-cell mui-media"
      >
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" :src="item.img_url">
          <div class="mui-media-body">
            <h1>{{item.title}}</h1>
            <p class="mui-ellipsis">
              <span>发表时间：{{item.add_time}}</span>
              <span>点击：{{item.click}}次</span>
            </p>
          </div>
        </a>
      </router-link>
    </ul>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      newList: []
    };
  },
  created() {
    this.getNewList();
  },
  methods: {
    getNewList() {
      this.$http
        .get("api/getnewslist")
        .then(result => {
          console.log(result);
          if (result.status === 200) {
            this.newList = result.body.message;
          } else {
            Toast("新闻列表加载失败");
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.mui-table-view {
  li {
    h1 {
      font-size: 14px;
    }
    .mui-ellipsis {
      font-size: 12px;
      color: #226aff;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
