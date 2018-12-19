<template>
  <div>
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            :class="['mui-control-item', item.id == 0 ? 'mui-active':'']"
            v-for="item in categoris"
            :key="item.id"
            @click="getPhotoListByCategoryId(item.id)"
          >{{item.title}}</a>
        </div>
      </div>
    </div>
    <ul class="photoList">
      <router-link
        tag="li"
        :to="'/home/photoinfo/'+item.id"
        v-for="item in photoList"
        :key="item.id"
      >
        <img v-lazy="item.img_url">
        <div class="info">
          <h1 class="info-title">{{ item.title }}</h1>
          <div class="info-content">{{ item.zhaiyao }}</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
import mui from "../../../lib/mui/js/mui.min.js";

export default {
  data() {
    return {
      categoris: [],
      photoList: []
    };
  },
  created() {
    this.getAllCategory();
    this.getPhotoListByCategoryId(0);
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005
    });
  },
  methods: {
    getAllCategory() {
      this.$http
        .get("api/getimgcategory")
        .then(result => {
          console.log("tag", result);
          if (result.body.status === 0) {
            result.body.message.unshift({
              id: 0,
              title: "全部"
            });
            this.categoris = result.body.message;
          } else {
            Toast("分类信息获取失败");
          }
        })
        .catch(err => {
          Toast("分类信息获取失败");
        });
    },
    getPhotoListByCategoryId(categoryId) {
      this.$http.get("api/getimages/" + categoryId).then(result => {
        if (result.body.status == 0) {
          this.photoList = result.body.message;
        } else {
          Toast("获取图片列表失败");
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
* {
  touch-action: pan-y;
}
.photoList {
  list-style: none;
  padding: 10px;
  margin: 0;

  li {
    background-color: #ccc;
    text-align: center;
    margin-bottom: 5px;
    position: relative;
    box-shadow: 0 0 9px #999;
  }

  img[lazy="loading"] {
    width: 40px;
    height: 300px;
    margin: auto;
    text-align: center;
  }

  img {
    width: 100%;
    vertical-align: middle;
  }

  .info {
    text-align: left;
    color: white;
    position: absolute;
    bottom: 0;
    max-height: 84px;
    background-color: rgba(0, 0, 0, 0.6);

    .info-title {
      font-size: 14px;
    }
    .info-content {
      font-size: 13px;
    }
  }
}
</style>
