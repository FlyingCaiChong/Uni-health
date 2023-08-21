<template>
  <view class="user-list-item">
    <view class="user-list-item-left">
      {{ title }}
    </view>
    <view class="user-list-item-right">
      <slot name="right"></slot>
    </view>
  </view>
</template>

<script>
  export default {
    name: "user-list-item",
    props: {
      title: {
        type: String,
        default: ''
      },
    },
    data() {
      return {

      };
    }
  }
</script>

<style lang="scss">
  .user-list-item {
    height: 88rpx;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    border-bottom: 1px solid #eee;

    &-left {
      margin-left: 30rpx;
      font-size: 14px;
      color: #666;
    }

    &-right {
      margin-right: 30rpx;
      font-size: 14px;
      color: #666;
    }
  }
</style>