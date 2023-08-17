export default {
  namespaced: true,
  state: () => ({
    token: uni.getStorageSync('token') || '',
    userInfo: JSON.parse(uni.getStorageSync('userInfo') || '{}'),
    redirectInfo: null,
    openid: uni.getStorageSync('openid') || '',
  }),
  getters: {
    token(state) {
      return state.token;
    },
    openid(state) {
      return state.openid;
    }
  },
  mutations: {
    updateUserInfo(state, userInfo) {
      state.userInfo = userInfo;
      this.commit('m_user/saveUserInfoToStorage');
    },
    saveUserInfoToStorage(state) {
      uni.setStorageSync('userInfo', JSON.stringify(state.userInfo));
    },
    updateToken(state, token) {
      state.token = token;
      this.commit('m_user/saveTokenToStorage')
    },
    saveTokenToStorage(state) {
      console.log('save token', state.token);
      uni.setStorageSync('token', state.token)
    },
    updateRedirectInfo(state, info) {
      state.redirectInfo = info
    },
    updateOpenid(state, openid) {
      state.openid = openid;
      this.commit('m_user/saveOpenidToStorage');
    },
    saveOpenidToStorage(state) {
      uni.setStorageSync('openid', state.openid);
    }
  }
}