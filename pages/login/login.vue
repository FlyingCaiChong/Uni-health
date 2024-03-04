<template>
  <view class="login-wrapper">
    <image src="/static/common-icons/empty.png" class="empty-img" mode=""></image>
    <text class="tips">登录后解锁所有功能</text>
    <button class="login-btn" type="primary" @click="handleLoginClick">立即登录</button>
  </view>
</template>

<script>
  import { mapState, mapMutations } from 'vuex';
  export default {
    data() {
      return {
        
      };
    },
    computed: {
      ...mapState('m_user', ['redirectInfo'])
    },
    methods: {
      ...mapMutations('m_user', ['updateToken', 'updateOpenid', 'updateUserInfo']),
      handleLoginClick() {
        wx.login({
          success: (res) => {
            console.log('success', res);
            if (res.errMsg === 'login:ok') {
              // 登录成功 获取到code
              const code = res.code;
              uni.$http.post('users/wxlogin', {
                code
              }).then(result => {
                console.log('uni $toast', uni.$toast);
                console.log('result', result);
                if (result.success) {
                  // 登录成功
                  const token = result.resultData.token;
                  const openid = result.resultData.openid;
                  // 保存token
                  this.updateToken(token);
                  this.updateOpenid(openid);
                  this.getUserInfo(openid);
                }
              }).catch(err => {
                console.log('err', err);
              })
            }
          },
          fail: (err) => {
            console.log('fail', err);
          },
          complete: () => {
            console.log('complete');
          }
        })
      },
      navigateBack() {
       if (this.redirectInfo && this.redirectInfo.openType === 'switchTab') {
         uni.switchTab({
           url: this.redirectInfo.from,
           complete: () => {
             this.updateRedirectInfo(null)
           }
         })
       } else {
         uni.navigateBack();
       }
      },
      getUserInfo(openid) {
        uni.$http.get('info/userinfo', {
          params: {
            openid
          }
        }).then(res => {
          if (res.resultData) {
            this.updateUserInfo(res.resultData);
          }
          uni.$toast.success('登录成功');
          this.navigateBack();
        }).catch(err => {
          console.log('get user info err: ', err);
          uni.$toast.fail('登陆失败：', err);
        });
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
