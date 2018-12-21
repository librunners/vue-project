<template>
  <div class="goods-container">
    <router-link
      tag="div"
      :to="'/home/goodsinfo/'+item.id"
      class="goods-item"
      v-for="item in goodsList"
      :key="item.id"
    >
      <img :src="item.img_url">
      <h1 class="title">{{ item.title }}</h1>
      <div class="info">
        <p class="price">
          <span class="new">￥{{ item.sell_price }}</span>
          <span class="old">￥{{ item.market_price }}</span>
        </p>
        <p class="remark">
          <span>热卖中</span>
          <span>剩{{ item.stock_quantity }}件</span>
        </p>
      </div>
    </router-link>
    <mt-button type="danger" plain size="large" @click="getMore">加载更多</mt-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageIndex: 1,
      goodsList: []
    };
  },
  created() {
    this.getGoodsList();
  },
  methods: {
    getGoodsList() {
      this.$http
        .get("api/getgoods?pageindex=" + this.pageIndex)
        .then(result => {
          console.log("tag", result);
          if (result.body.status == 0) {
            this.goodsList = this.goodsList.concat(result.body.message);
          } else {
            Toast("获取商品列表失败");
          }
        })
        .catch(err => {});
    },
    getMore() {
      this.pageIndex++;
      this.getGoodsList();
    }
  }
};
</script>

<style lang="scss" scoped>
.goods-container {
  display: flex;
  flex-wrap: wrap;
  padding: 7px;
  justify-content: space-between;

  .goods-item {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 49%;
    min-height: 293px;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    padding: 2px;
    margin: 4px 0;

    img {
      width: 100%;
    }

    .title {
      font-size: 14px;
    }

    .info {
      background-color: #eee;

      p {
        padding: 5px;
        margin: 0px;
      }

      .price {
        .new {
          color: red;
          font-size: 16px;
          font-weight: bolder;
        }
        .old {
          text-decoration: line-through;
          font-size: 12px;
          margin-left: 10px;
        }
      }
      .remark {
        display: flex;
        justify-content: space-between;
        font-size: 13px;
      }
    }
  }
}
</style>
