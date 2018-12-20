<template>
  <div class="comment-container">
    <h3>发表评论</h3>
    <textarea v-model="msg" placeholder="请开始BB吧"></textarea>
    <mt-button type="primary" size="large" @click="addComment">发表评论</mt-button>
    <div class="cmt-list">
      <div class="cmt-item" v-for="(item, index) in comments" :key="item.id">
        <div class="cmt-title">
          <span>第{{ ++index }}楼</span>
          <span>用户:{{ item.user_name }}</span>
          <span>发表时间:{{ item.add_time}}</span>
        </div>
        <div class="cmt-content">{{ item.content === 'undefined' ? '此用户很懒，啥都没说': item.content }}</div>
      </div>
    </div>
    <mt-button type="primary" plain size="large" @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      msg: "",
      comments: [],
      pageIndex: 1
    };
  },
  created() {
    this.getComments();
  },
  methods: {
    getComments() {
      this.$http
        .get("api/getcomments/" + this.id + "?pageindex=" + this.pageIndex)
        .then(result => {
          console.log(result);
          if (result.body.status == 0) {
            this.comments = this.comments.concat(result.body.message);
          } else {
            Toast("获取评论失败！");
          }
        });
    },
    getMore() {
      this.pageIndex++;
      this.getComments();
    },
    addComment() {
      if (this.msg.length === 0) {
        return Toast("评论不能为空");
      }

      this.$http
        .post("api/postcomment/" + this.$route.params.id, {
          content: this.msg.trim()
        })
        .then(result => {
          if (result.body.status == 0) {
            var cmt = {
              user_name: "匿名用户",
              add_time: Date.now(),
              content: this.msg.trim()
            };

            this.comments.unshift(cmt);
            this.msg = "";
          }
        });
    }
  },
  props: ["id"]
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
  .cmt-list {
    font-size: 13px;

    .cmt-title {
      background-color: #ccc;
      padding: 5px;
    }
    .cmt-content {
      padding: 10px;
    }
  }
}
</style>
