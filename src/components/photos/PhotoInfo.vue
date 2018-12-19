<template>
  <div class="photoinfo-container">
    <h1>{{photoInfo.title}}</h1>
    <div class="subtitle">
      <span>发表时间：{{photoInfo.add_time}}</span>
      <span>点击:{{photoInfo.click}}次</span>
    </div>
    <div class="content" v-html="photoInfo.content"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      photoInfo: {}
    };
  },
  created() {
    this.getPhotoInfo();
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
    }
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
