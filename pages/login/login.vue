<template>
  <view class="login-wrapper">
    <image src="/static/common-icons/empty.png" class="empty-img" mode=""></image>
    <text class="tips">登录后解锁所有功能</text>
    <button class="login-btn" type="primary" @click="handleLoginClick">立即登录</button>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        
      };
    },
    methods: {
      handleLoginClick() {
        console.log('click login')
      }
    },
  }
</script>

<style lang="scss">
  page {
    height: 100%;
  }
.login-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .empty-img {
    margin-top: 200rpx;
    width: 256rpx;
    height: 256rpx;
  }
  .tips {
    margin-top: 30rpx;
    font-size: 14px;
    color: #666;
  }
  .login-btn {
    margin-top: 30rpx;
    width: 630rpx;
  }
}
</style>
