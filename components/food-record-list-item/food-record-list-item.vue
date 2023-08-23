<template>
  <view class="food-record-list-item">
    <view class="food-record-list-item-header">
      <text class="title">{{ title }}</text>
      <text class="value">{{ quantity }}</text>
      <text class="unit">/{{total}} 千卡</text>
    </view>
    <view class="food-record-list-item-content">
      <view class="food-record-list-item-content-sub">
        <text class="title">暂无数据</text>
        <uni-icons class="arrow" type="right" size="20" color="#999"></uni-icons>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    name: "food-record-list-item",
    props: {
      title: {
        type: String,
        default: ''
      },
      total: {
        type: Number,
        default: 0
      },
      // 热量
      quantity: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {

      };
    }
  }
</script>

<style lang="scss">
  .food-record-list-item {
    margin: 30rpx;
    margin-top: 0;
    min-height: 176rpx;
    background-color: #fff;
    border-radius: 16rpx;
    display: flex;
    flex-direction: column;

    &-header {
      height: 88rpx;
      border-bottom: 1px solid #eee;
      display: flex;
      flex-direction: row;
      align-items: center;

      .title {
        color: #333;
        font-size: 12px;
        margin-left: 20rpx;
        font-weight: 700;
      }

      .value {
        margin-left: auto;
        color: #333;
        font-size: 12px;
      }

      .unit {
        margin-left: 4rpx;
        margin-right: 20rpx;
        color: #999;
        font-size: 12px;
      }
    }

    &-content {
      flex: 1;

      &-sub {
        display: flex;
        flex-direction: row;
        align-items: center;
        height: 88rpx;

        .title {
          font-size: 12px;
          color: #666;
          margin-left: 20rpx;
        }

        .arrow {
          margin-left: auto;
          margin-right: 20rpx;
        }
      }
    }
  }
</style>