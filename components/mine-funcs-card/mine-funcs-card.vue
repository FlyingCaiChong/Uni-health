<template>
  <view class="mine-header-card">
    <view class="funcs-item" v-for="(item, idx) in funcsList" :key="idx" @click="handleFunClick(item)">
      <image class="img" :src="item.icons" mode=""></image>
      <text class="title">{{ item.title }}</text>
    </view>
  </view>
</template>

<script>
  import { mapState } from 'vuex';
  export default {
    name:"mine-funcs-card",
    data() {
      return {
        funcsList: [
          {
            title: '基本信息',
            icons: '/static/common-icons/basic-info.png',
            url: '' // FIXME: 配置url
          },
          {
            title: '收藏的食物',
            icons: '/static/common-icons/favorite.png',
            url: '' // FIXME: 配置url
          },
          {
            title: '上传的食物',
            icons: '/static/common-icons/shop.png',
            url: '' // FIXME: 配置url
          },
          {
            title: '更多应用',
            icons: '/static/common-icons/funcs.png',
            url: '' // FIXME: 配置url
          }
        ]
      };
    },
    computed: {
      ...mapState('m_user', ['token']),
    },
    methods: {
      handleFunClick(item) {
        this.handleNavigation(item.url);
      },
      handleNavigation(url) {
        if (this.token.length) {
          if (!url) return;
          uni.navigateTo({
            url: url
          });
        } else {
          uni.navigateTo({
            url: '/pages/login/login'
          });
        }
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