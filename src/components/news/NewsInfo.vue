<template>
  <div class="newsinfo-container">
    <h1>{{newInfo.title}}</h1>
    <div class="mui-ellipsis">
      <span>发表时间:{{newInfo.add_time}}</span>
      <span>点击:{{newInfo.click}}次</span>
    </div>
    <div v-html="newInfo.content"></div>
    <comment-box :id="this.id"></comment-box>
  </div>
</template>

<script>
import comment from "../subcomponents/Comment.vue";
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      id: this.$route.params.id,
      pageIndex: 1,
      newInfo: {},
      comment: "",
      commentList: []
    };
  },
  created() {
    this.getNewInfo();
  },
  methods: {
    getNewInfo() {
      this.$http
        .get("api/getnew/" + this.id)
        .then(result => {
          console.log(result);
          if (result.status == 200) {
            this.newInfo = result.body.message[0];
          } else {
            Toast("新闻详情获取失败");
          }
        })
        .catch(err => {
          Toast("新闻详情获取失败");
        });
    },
    postComment() {
      if (this.comment.trim().length === 0) {
        Toast("请输入要评论的内容");
      } else {
        this.$http
          .post("api/postcomment/" + this.id, {
            content: this.comment.trim()
          })
          .then(result => {
            if (result.body.status === 0) {
              Toast("评论成功");
            }
            this.comment = "";
          })
          .catch(err => {
            Toast("评论失败");
          });
      }
    },
    getCommentList() {
      this.$http
        .get("api/getcomments/" + this.id + "?pageIndex=" + this.pageIndex)
        .then(result => {
          console.log(result);
        })
        .catch(result => {});
    }
  },
  components: {
    "comment-box": comment
  }
};
</script>

<style lang="scss" scoped>
.newsinfo-container {
  h1 {
    padding: 2px;
    font-size: 16px;
    color: red;
    text-align: center;
  }
  .mui-ellipsis {
    font-size: 12px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
  textarea {
    height: 100px;
    width: 100%;
  }
}
</style>
