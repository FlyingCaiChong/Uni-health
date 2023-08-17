<template>
  <view class="mine-header-card">
    <view class="funcs-item" v-for="(item, idx) in funcsList" :key="idx" @click="handleFunClick(item)">
      <image class="img" :src="item.icons" mode=""></image>
      <text class="title">{{ item.title }}</text>
    </view>
  </view>
</template>

<script>
  export default {
    name:"mine-funcs-card",
    data() {
      return {
        funcsList: [
          {
            title: '基本信息',
            icons: '/static/common-icons/basic-info.png'
          },
          {
            title: '收藏的食物',
            icons: '/static/common-icons/favorite.png'
          },
          {
            title: '上传的食物',
            icons: '/static/common-icons/shop.png'
          },
          {
            title: '更多应用',
            icons: '/static/common-icons/funcs.png'
          }
        ]
      };
    },
    methods: {
      handleFunClick(item) {
        console.log('handle fun click: ', item.title);
      }
    },
  }
</script>

<style lang="scss">
.mine-header-card {
  border-radius: 16rpx;
  background-color: #fff;
  height: 180rpx;
  display: flex;
  .funcs-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .img {
      width: 48rpx;
      height: 48rpx;
    }
    
    .title {
      margin-top: 10rpx;
      color: #666;
      font-size: 12px;
    }
  }
}
</style>