<template>
  <view class="setting-wrapper">
    <uni-card class="card-mt" padding="0" spacing="0" margin="0" :border="false" :is-shadow="false">
      <uni-list>
      	<uni-list-item title="用户协议" clickable link="navigateTo"></uni-list-item>
      	<uni-list-item title="隐私政策" clickable link="navigateTo"></uni-list-item>
      	<uni-list-item title="隐私政策摘要" clickable link="navigateTo"></uni-list-item>
      	<uni-list-item title="个人信息收集清单" clickable link="navigateTo"></uni-list-item>
      	<uni-list-item title="第三方共享清单" clickable link="navigateTo"></uni-list-item>
      	<uni-list-item title="资质证照" clickable link="navigateTo"></uni-list-item>
      	<uni-list-item title="撤回隐私协议授权" clickable link="navigateTo"></uni-list-item>
      	<uni-list-item title="账号注销(永久删除账户)" clickable link="navigateTo"></uni-list-item>
      </uni-list>
    </uni-card>
    <uni-card class="card-mt" padding="0" spacing="0" margin="0" :border="false" :is-shadow="false">
      <uni-list>
      	<uni-list-item title="退出账号" clickable link="navigateTo"></uni-list-item>
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
.setting-wrapper {
  display: flex;
  flex-direction: column;
  .card-mt {
    margin-top: 30rpx;
    margin-left: 30rpx;
    margin-right: 30rpx;
  }
  .uni-card {
    border-radius: 16rpx;
  }
}
</style>
