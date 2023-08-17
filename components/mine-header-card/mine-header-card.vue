<template>
  <view class="mine-header-card">
    <view class="top-box">
      <image src="" class="img"></image>
      <text class="user-title">微信用户</text>
      <uni-icons class="right-arrow" type="right" size="24" color="#666" @click="handleArrowClick"></uni-icons>
    </view>
    <view class="bottom-box">
      <view class="bottom-box-item" v-for="(item, idx) in itemList" :key="idx">
        <text class="value">{{ item.value }}</text>
        <text class="title">{{ item.title }}</text>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    name:"mine-header-card",
    data() {
      return {
        itemList: [
          {
            title: '当前(公斤)',
            value: 70
          },
          {
            title: '目标(公斤)',
            value: 60.2
          },
          {
            title: 'BMI',
            value: 23.2
          }
        ]
      };
    },
    methods: {
      handleArrowClick() {
        console.log('handle arrow click')
      }
    },
  }
</script>

<style lang="scss">
.mine-header-card {
  border-radius: 16rpx;
  background-color: #fff;
  height: 300rpx;
  display: flex;
  flex-direction: column;
  .top-box {
    height: 170rpx;
    border-bottom: 1px solid #eeeeee;
    display: flex;
    flex-direction: row;
    align-items: center;
    
    .img {
      margin-left: 40rpx;
      border-radius: 50rpx;
      width: 100rpx;
      height: 100rpx;
      background-color: #eeeeee;
    }
    .user-title {
      color: #333;
      font-size: 16px;
      font-weight: 500;
      margin-left: 30rpx;
    }
    .right-arrow {
      margin-left: auto;
      margin-right: 30rpx;
    }
  }
  .bottom-box {
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    .bottom-box-item {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .value {
        color: #333;
        font-size: 14px;
      }
      .title {
        color: #999;
        font-size: 12px;
      }
    }
  }
}
</style>