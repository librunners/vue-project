<template>
  <div class="shopcar-container">
    <div class="goods-list">
      <div class="mui-card" v-for="item in goodslist" :key="item.id">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <mt-switch
              v-model="$store.getters.getGoodsSelected[item.id]"
              @change="selectedChanged(item.id, $store.getters.getGoodsSelected[item.id])"
            ></mt-switch>
            <img :src="item.thumb_path">
            <div class="content">
              <h1>{{item.title}}</h1>
              <span class="price">￥{{ item.sell_price }}</span>
              <numbox :total="$store.getters.getTotalIds[item.id]" :goodsid="item.id"></numbox>
              <a href>删除</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner jiesuan">
          <div>
            <p>总计（不含运费）</p>
            <p>
              已勾选商品
              <span class="red">{{ $store.getters.getTotalPrice.total }}</span>件， 总价
              <span class="red">￥{{$store.getters.getTotalPrice.amout}}</span>
            </p>
          </div>
          <mt-button type="danger">去结算</mt-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import numbox from "../subcomponents/NumBoxCar.vue";
export default {
  data() {
    return {
      goodslist: []
    };
  },
  created() {
    this.getGoodsList();
  },
  methods: {
    selectedChanged(id, val) {
      this.$store.commit("updateGoodsSelected", { id, selected: val });
    },
    getGoodsList() {
      //获取到购物车商品的id集合
      var ids = [];
      this.$store.state.car.forEach(item => {
        ids.push(item.id);
      });

      if (ids.length > 0) {
        this.$http
          .get("api/goods/getshopcarlist/" + ids.join(","))
          .then(result => {
            console.log("result :", result);
            if (result.body.status === 0) {
              this.goodslist = result.body.message;
            }
          });
      }
    }
  },
  components: {
    numbox
  }
};
</script>

<style lang="scss" scoped>
.shopcar-container {
  background-color: #eee;
  overflow: hidden;
  .goods-list {
    .mui-card-content-inner {
      display: flex;
      overflow: hidden;
      justify-content: space-between;
      align-items: center;

      img {
        width: 60px;
        height: 60px;
      }
      .content {
        h1 {
          font-size: 14px;
          font-weight: bold;
        }
        .numbox {
          height: 24px;
        }
        .price {
          color: red;
          font-size: 14px;
          font-weight: bold;
        }
      }
    }
  }

  .red {
    color: red;
    font-weight: bolder;
  }
  .jiesuan {
    justify-content: space-between;
    display: flex;
  }
}
</style>