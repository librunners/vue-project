<template>
  <div class="goods-container">
    <div class="goods-item">
      <img src="http://demo.dtcms.net/upload/201504/20/thumb_201504200046589514.jpg" alt>
      <h1 class="title">华为（HUAWEI）荣耀6Plus 16G双4G版</h1>
      <div class="info">
        <p class="price">
          <span class="new">￥1299</span>
          <span class="old">￥1999</span>
        </p>
        <p class="remark">
          <span>热卖中</span>
          <span>剩300件</span>
        </p>
      </div>
    </div>
    <div class="goods-item">
      <img src="http://demo.dtcms.net/upload/201504/20/thumb_201504200046589514.jpg" alt>
      <h1 class="title">华为（HUAWEI）荣耀6Plus 16G双4G版华为（HUAWEI）荣耀6Plus 16G双4G版</h1>
      <div class="info">
        <p class="price">
          <span class="new">￥1299</span>
          <span class="old">￥1999</span>
        </p>
        <p class="remark">
          <span>热卖中</span>
          <span>剩300件</span>
        </p>
      </div>
    </div>
    <div class="goods-item">
      <img src="http://demo.dtcms.net/upload/201504/20/thumb_201504200046589514.jpg" alt>
      <h1 class="title">华为（HUAWEI）荣耀6Plus 16G双4G版</h1>
      <div class="info">
        <p class="price">
          <span class="new">￥1299</span>
          <span class="old">￥1999</span>
        </p>
        <p class="remark">
          <span>热卖中</span>
          <span>剩300件</span>
        </p>
      </div>
    </div>
    <div class="goods-item">
      <img src="http://demo.dtcms.net/upload/201504/20/thumb_201504200046589514.jpg" alt>
      <h1 class="title">华为（HUAWEI）荣耀6Plus 16G双4G版</h1>
      <div class="info">
        <p class="price">
          <span class="new">￥1299</span>
          <span class="old">￥1999</span>
        </p>
        <p class="remark">
          <span>热卖中</span>
          <span>剩300件</span>
        </p>
      </div>
    </div>
    <div class="goods-item">
      <img src="http://demo.dtcms.net/upload/201504/20/thumb_201504200046589514.jpg" alt>
      <h1 class="title">华为（HUAWEI）荣耀6Plus 16G双4G版</h1>
      <div class="info">
        <p class="price">
          <span class="new">￥1299</span>
          <span class="old">￥1999</span>
        </p>
        <p class="remark">
          <span>热卖中</span>
          <span>剩300件</span>
        </p>
      </div>
    </div>
    <div class="goods-item">
      <img src="http://demo.dtcms.net/upload/201504/20/thumb_201504200046589514.jpg" alt>
      <h1 class="title">华为（HUAWEI）荣耀6Plus 16G双4G版</h1>
      <div class="info">
        <p class="price">
          <span class="new">￥1299</span>
          <span class="old">￥1999</span>
        </p>
        <p class="remark">
          <span>热卖中</span>
          <span>剩300件</span>
        </p>
      </div>
    </div>
    <div class="goods-item">
      <img src="http://demo.dtcms.net/upload/201504/20/thumb_201504200046589514.jpg" alt>
      <h1 class="title">华为（HUAWEI）荣耀6Plus 16G双4G版</h1>
      <div class="info">
        <p class="price">
          <span class="new">￥1299</span>
          <span class="old">￥1999</span>
        </p>
        <p class="remark">
          <span>热卖中</span>
          <span>剩300件</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
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
