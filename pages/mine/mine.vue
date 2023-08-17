<template>
  <view class="mine-wrapper">
    <mine-header-card class="header-card"></mine-header-card>
    <mine-funcs-card class="funcs-card"></mine-funcs-card>
    <uni-card class="card-mt" padding="0" spacing="0" margin="0" :border="false" :is-shadow="false">
      <uni-list>
      	<uni-list-item showExtraIcon title="健康测评" clickable link="navigateTo" :extra-icon="{color: '#4cd964', size: '22', type: 'shop-filled'}"></uni-list-item>
      	<uni-list-item showExtraIcon title="健康方案" clickable link="navigateTo" :extra-icon="{ color: '#4cd964', size: '22', type: 'wallet-filled'}"></uni-list-item>
      </uni-list>
    </uni-card>
    <uni-card class="card-mt" padding="0" spacing="0" margin="0" :border="false" :is-shadow="false">
      <uni-list>
      	<uni-list-item showExtraIcon title="商务合作" clickable link="navigateTo" :extra-icon="{ color: '#4cd964', size: '22', type: 'staff'}"></uni-list-item>
      	<uni-list-item showExtraIcon title="建议反馈" clickable link="navigateTo" :extra-icon="{ color: '#4cd964', size: '22', type: 'info'}" ></uni-list-item>
      </uni-list>
    </uni-card>
    <uni-card class="card-mt cart-mb" padding="0" spacing="0" margin="0" :border="false" :is-shadow="false">
      <uni-list>
        <uni-list-item showExtraIcon title="设置" clickable link="navigateTo" to="/pages/setting/setting" :extra-icon="{ color: '#4cd964', size: '22', type: 'settings-filled'}"></uni-list-item>
      </uni-list>
    </uni-card>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        
      };
    }
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
