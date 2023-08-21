<template>
  <view class="mine-wrapper">
    <mine-header-card class="header-card"></mine-header-card>
    <mine-funcs-card class="funcs-card"></mine-funcs-card>
    <uni-card class="card-mt" padding="0" spacing="0" margin="0" :border="false" :is-shadow="false">
      <uni-list>
      	<uni-list-item showExtraIcon title="健康测评" clickable @click="handleHealthEvaluation" :extra-icon="{color: '#4cd964', size: '22', type: 'shop-filled'}"></uni-list-item>
      	<uni-list-item showExtraIcon title="健康方案" clickable @click="handleHealthScheme" :extra-icon="{ color: '#4cd964', size: '22', type: 'wallet-filled'}"></uni-list-item>
      </uni-list>
    </uni-card>
    <uni-card class="card-mt" padding="0" spacing="0" margin="0" :border="false" :is-shadow="false">
      <uni-list>
      	<uni-list-item showExtraIcon title="商务合作" clickable @click="handleBusiness" :extra-icon="{ color: '#4cd964', size: '22', type: 'staff'}"></uni-list-item>
      	<uni-list-item showExtraIcon title="建议反馈" clickable @click="handleFeedback" :extra-icon="{ color: '#4cd964', size: '22', type: 'info'}" ></uni-list-item>
      </uni-list>
    </uni-card>
    <uni-card class="card-mt cart-mb" padding="0" spacing="0" margin="0" :border="false" :is-shadow="false">
      <uni-list>
        <uni-list-item showExtraIcon @click="handleSetting" title="设置" clickable :extra-icon="{ color: '#4cd964', size: '22', type: 'settings-filled'}"></uni-list-item>
      </uni-list>
    </uni-card>
  </view>
</template>

<script>
  import { mapState } from 'vuex';
  export default {
    data() {
      return {
        
      };
    },
    computed: {
      ...mapState('m_user', ['token']),
    },
    onShow() {
      console.log('onShow');
      // uni.$http.get('/my/userinfo').then(res => {
      //   console.log('userinfo res: ', res);
      // }).catch(err => {
      //   console.log('userinfo err: ', err);
      // })
    },
    methods: {
      // 健康测评
      handleHealthEvaluation() {
        // FIXME: 健康方案url
        this.handleNavigation();
      },
      // 健康方案
      handleHealthScheme() {
        // FIXME: 健康方案url
        this.handleNavigation();
      },
      // 商务合作
      handleBusiness() {
        // FIXME: 商务合作url
        this.handleNavigation();
      },
      // 意见反馈
      handleFeedback() {
        // FIXME: 意见反馈url
        this.handleNavigation();
      },
      // 设置
      handleSetting() {
        this.handleNavigation('/pages/setting/setting');
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
.mine-wrapper {
  display: flex;
  flex-direction: column;
  
  .header-card {
    margin: 30rpx;
    margin-bottom: 0;
  }
  
  .funcs-card {
    margin: 30rpx;
    margin-bottom: 0;
  }
  
  .card-mt {
    margin-top: 30rpx;
    margin-left: 30rpx;
    margin-right: 30rpx;
  }
  .cart-mb {
    margin-bottom: 30rpx;
  }
  .uni-card {
    border-radius: 16rpx;
  }
}
</style>
