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
    <view class="funcs-box">
      <view class="funcs-item item1 flip-in-hor-bottom fade-in" hover-class="vibrate-1" @click="gotoFoodRecord">
        <text class="title">饮食摄入</text>
      </view>
      <view class="funcs-item item2 flip-in-hor-bottom fade-in" hover-class="vibrate-1">
         <text class="title">运动消耗</text>
      </view>
      <view class="funcs-item item3 flip-in-hor-bottom fade-in" hover-class="vibrate-1">
         <text class="title">体重记录</text>
      </view>
      <view class="funcs-item item4 flip-in-hor-bottom fade-in" hover-class="vibrate-1">
         <text class="title">腰围记录</text>
      </view>
    </view>
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
    onPullDownRefresh() {
      this.getBanners().then(() => {
        uni.stopPullDownRefresh();
      })
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
      },
      
      gotoFoodRecord() {
        uni.navigateTo({
          url: '/page_records/food_record/food_record'
        })
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
  
  .funcs-box {
    display: flex;
    flex-direction: column;
    padding: 0 30rpx;
    
    .funcs-item {
      height: 160rpx;
      margin-top: 30rpx;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 16rpx;
      box-shadow: 2px 2px 4px rgba(0,0,0,0.4);
      cursor: pointer;
      .title {
        font-size: 24px;
        font-weight: 700;
        color: white;
      }
    }
    
    .item1 {
      background: linear-gradient(to right, #435334, #CEDEBD);
      .title {
        color: #FAF1E4;
      }
    }
    
    .item2 {
      background: linear-gradient(to right, #0C356A, #40F8FF);
      .title {
        color: #D5FFD0;
      }
    }
    
    .item3 {
      background: linear-gradient(to right, #836096, #F0B86E);
      .title {
        color: #EBE76C;
      }
    }
    
    .item4 {
      background: linear-gradient(to right,  #645CBB,  #BFACE2);
      .title {
        color: #EBC7E6;
      }
    }
    
    .fade-in {
    	-webkit-animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    	        animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    }
    
    .flip-in-hor-bottom {
    	-webkit-animation: flip-in-hor-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    	        animation: flip-in-hor-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    }
    
    .vibrate-1 {
    	-webkit-animation: vibrate-1 0.3s linear infinite both;
    	        animation: vibrate-1 0.3s linear infinite both;
    }
  }
}

@-webkit-keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes flip-in-hor-bottom {
  0% {
    -webkit-transform: rotateX(80deg);
            transform: rotateX(80deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateX(0);
            transform: rotateX(0);
    opacity: 1;
  }
}
@keyframes flip-in-hor-bottom {
  0% {
    -webkit-transform: rotateX(80deg);
            transform: rotateX(80deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: rotateX(0);
            transform: rotateX(0);
    opacity: 1;
  }
}

@-webkit-keyframes vibrate-1 {
  0% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
  20% {
    -webkit-transform: translate(-2px, 2px);
            transform: translate(-2px, 2px);
  }
  40% {
    -webkit-transform: translate(-2px, -2px);
            transform: translate(-2px, -2px);
  }
  60% {
    -webkit-transform: translate(2px, 2px);
            transform: translate(2px, 2px);
  }
  80% {
    -webkit-transform: translate(2px, -2px);
            transform: translate(2px, -2px);
  }
  100% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
}
@keyframes vibrate-1 {
  0% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
  20% {
    -webkit-transform: translate(-2px, 2px);
            transform: translate(-2px, 2px);
  }
  40% {
    -webkit-transform: translate(-2px, -2px);
            transform: translate(-2px, -2px);
  }
  60% {
    -webkit-transform: translate(2px, 2px);
            transform: translate(2px, 2px);
  }
  80% {
    -webkit-transform: translate(2px, -2px);
            transform: translate(2px, -2px);
  }
  100% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
}


</style>
