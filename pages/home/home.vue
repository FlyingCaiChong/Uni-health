<template>
  <view class="home-wrapper">
    <!-- banner -->
    <view class="banner">
      <swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
        <swiper-item v-for="(item, index) in bannerList" :key="index">
          <view class="swiper-item">
            <image :src="item.icon_url" mode="aspectFill" />
          </view>
        </swiper-item>
      </swiper>
    </view>
    <!-- functions -->
    <!-- List -->
  </view>
</template>

<script>
  export default {
    data() {
      return {
        bannerList: []
      };
    },
    onLoad() {
      this.getBanners()
    },
    methods: {
      async getBanners() {
        try{
          const res = await uni.$http.get('/home/getBanners');
          console.log('res', res);
          if (res.success) {
            this.bannerList = res.resultData;
          }
        }catch(e){
          //TODO handle the exception
        }
      }
    },
  }
</script>

<style lang="scss">
.home-wrapper {
  .banner {
    width: 750rpx;
    height: 300rpx;
    .swiper-item {
      width: 100%;
      height: 100%;
      image {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
