<template>
  <div class="photoinfo-container">
    <h1>{{photoInfo.title}}</h1>
    <div class="subtitle">
      <span>发表时间：{{photoInfo.add_time}}</span>
      <span>点击:{{photoInfo.click}}次</span>
    </div>
    <hr>
    <!-- 缩略图区域 -->
    <div class="thumbs">
      <!-- 注意：这里使用的 vue-preview 组件是版本 1.1.3,
      之前上课录屏时候, 所使用的 1.0.5 版本的 vue-preview 存在 Bug-->
      <vue-preview :slides="thumbList"></vue-preview>
    </div>
    <div class="content" v-html="photoInfo.content"></div>
    <comment-box :id="this.id"></comment-box>
  </div>
</template>

<script>
import comment from "../subcomponents/Comment.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
      photoInfo: {},
      thumbList: []
    };
  },
  created() {
    this.getPhotoInfo();
    this.getThumbs();
  },
  methods: {
    getPhotoInfo() {
      this.$http
        .get("api/getimageinfo/" + this.id)
        .then(result => {
          if (result.body.status == 0) {
            this.photoInfo = result.body.message[0];
          }
        })
        .catch(err => {});
    },
    getThumbs() {
      this.$http.get("api/getthumimages/" + this.id).then(result => {
        if (result.body.status === 0) {
          result.body.message.forEach(element => {
            element.w = 600;
            element.h = 400;
            element.msrc = element.src;
          });
          console.log(result.body.message);
          this.thumbList = result.body.message;
        }
      });
    }
  },
  components: {
    "comment-box": comment
  }
};
</script>

<style scoped lang="scss">
.photoinfo-container {
  h1 {
    text-align: center;
    font-size: 14px;
    color: #26a2ff;
    padding: 10px;
  }

  .subtitle {
    justify-content: space-between;
    font-size: 13px;
    display: flex;
    padding: 5px;
    border-bottom: 1px solid #666;
  }
  .content {
    font-size: 13px;
    line-height: 30px;
  }
}
</style>

<style lang="scss">
.thumbs {
  .my-gallery {
    display: flex;
    flex-wrap: wrap;
  }
  figure {
    width: 100px;
    height: 100px;
    margin: 10px;
    box-shadow: 0 0 8px #999;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
