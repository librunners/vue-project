<template>
  <div>商品详情{{id}}</div>
</template>

<script>
export default {
  data() {
    return {
      goods: {},
      id: this.$route.params.id
    };
  },
  created() {},
  methods: {
    getGoodsbyId() {}
  }
};
</script>

<style scoped>
</style>