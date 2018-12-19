<template>
  <div class="comment-container">
    <h3>发表评论</h3>
    <textarea v-model="commtent" placeholder="请开始BB吧"></textarea>
    <mt-button type="primary" size="large">发表评论</mt-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      commtent: ""
    };
  },
  created() {},
  methods: {}
};
</script>

<style scoped lang="scss">
* {
  padding: 0;
  margin: 0;
}
.comment-container {
  h3 {
    font-size: 18px;
    padding: 10px 2px;
  }
  textarea {
    height: 100px;
    padding: 10px;
  }
}
</style>
