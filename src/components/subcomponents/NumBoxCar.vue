<template>
  <div class="mui-numbox" data-numbox-min="1">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input
      @change="countChanged"
      class="mui-input-numbox"
      type="number"
      ref="numbox"
      :value="total"
      id
    >
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>

<script>
import mui from "../../lib/mui/js/mui.min.js";
export default {
  mounted() {
    mui(".mui-numbox").numbox();
  },
  methods: {
    countChanged() {
      //需要将这个同步到store中
      this.$store.commit("updateGoodsInfo", {
        id: this.goodsid,
        total: this.$refs.numbox.value
      });
    }
  },
  props: ["total", "goodsid"]
};
</script>

<style lang="scss" scoped>
</style>