<template>
  <div class="goodsinfo-container">
    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <div ref="ball" class="ball" v-show="ballFlag"></div>
    </transition>

    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swiper :lunbotuList="lunbotuList" :isFull="false"></swiper>
        </div>
      </div>
    </div>

    <div class="mui-card">
      <div class="mui-card-header">{{ goodsinfo.title }}</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价：
            <del>￥{{ goodsinfo.market_price }}</del>&nbsp;&nbsp;销售价：
            <span class="now_price">￥{{ goodsinfo.sell_price }}</span>
          </p>
          <p>购买数量：
            <numbox @getcount="getSelectedCount" :max="goodsinfo.stock_quantity"></numbox>
          </p>
          <p>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
          </p>
        </div>
      </div>
    </div>

    <!-- 商品参数区域 -->
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：{{ goodsinfo.goods_no }}</p>
          <p>库存情况：{{ goodsinfo.stock_quantity }}件</p>
          <p>上架时间：{{ goodsinfo.add_time }}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
        <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>

<script>
import swiper from "../subcomponents/Swiper.vue";
import numbox from "../subcomponents/NumBox.vue";
export default {
  data() {
    return {
      goodsinfo: {},
      id: this.$route.params.id,
      lunbotuList: [],
      selectedCount: 1,
      ballFlag: false
    };
  },
  created() {
    this.getLunBoTuList();
    this.getGoodsbyId();
  },
  methods: {
    getGoodsbyId() {
      this.$http.get("api/goods/getinfo/" + this.id).then(result => {
        if (result.body.status === 0) {
          this.goodsinfo = result.body.message[0];
        }
      });
    },
    getLunBoTuList() {
      this.$http.get("api/getthumimages/" + this.id).then(result => {
        console.log("result :", result);

        if (result.body.status === 0) {
          result.body.message.forEach(item => {
            item.img = item.src;
          });
          this.lunbotuList = result.body.message;
        }
      });
    },
    addToShopCar() {
      this.ballFlag = !this.ballFlag;

      //组装一个goodsinfo对象
      var goodsinfo = {
        id: this.id,
        total: this.selectedCount,
        price: this.goodsinfo.sell_price,
        selected: true
      };

      this.$store.commit("addToCar", goodsinfo);
    },
    getSelectedCount(count) {
      this.selectedCount = count;
    },
    beforeEnter(el) {
      el.style.transform = "translate(0,0)";
    },
    enter(el, done) {
      el.offsetWidth;

      const ballPosition = this.$refs.ball.getBoundingClientRect();
      const badgePosition = document
        .getElementById("badge")
        .getBoundingClientRect();

      const x = badgePosition.left - ballPosition.left;
      const y = badgePosition.top - ballPosition.top;

      el.style.transform = `translate(${x}px,${y}px)`;
      el.style.transition = "all 0.5s cubic-bezier(.4,-0.3,1,.68)";
      done();
    },
    afterEnter(el) {
      this.ballFlag = !this.ballFlag;
    },
    goDesc(id) {
      // 点击使用编程式导航跳转到 图文介绍页面
      this.$router.push({ name: "goodsdesc", params: { id } });
    },
    goComment(id) {
      // 点击跳转到 评论页面
      this.$router.push({ name: "goodscomment", params: { id } });
    }
  },
  components: {
    swiper,
    numbox
  }
};
</script>

<style lang="scss" scoped>
.goodsinfo-container {
  .now_price {
    color: red;
    font-size: 16px;
    font-weight: bold;
  }

  .mui-card-footer {
    display: block;
    button {
      margin: 15px 0;
    }
  }
  .ball {
    width: 20px;
    height: 20px;
    z-index: 100;
    background-color: red;
    border-radius: 50%;
    top: 390px;
    left: 146px;
    position: absolute;
  }
}
</style>