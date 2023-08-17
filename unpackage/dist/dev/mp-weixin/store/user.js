"use strict";
const common_vendor = require("../common/vendor.js");
const moduleUser = {
  namespaced: true,
  state: () => ({
    token: common_vendor.index.getStorageSync("token") || "",
    userInfo: JSON.parse(common_vendor.index.getStorageSync("userInfo") || "{}"),
    redirectInfo: null,
    openid: common_vendor.index.getStorageSync("openid") || ""
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
      this.commit("m_user/saveUserInfoToStorage");
    },
    saveUserInfoToStorage(state) {
      common_vendor.index.setStorageSync("userInfo", JSON.stringify(state.userInfo));
    },
    updateToken(state, token) {
      state.token = token;
      this.commit("m_user/saveTokenToStorage");
    },
    saveTokenToStorage(state) {
      console.log("save token", state.token);
      common_vendor.index.setStorageSync("token", state.token);
    },
    updateRedirectInfo(state, info) {
      state.redirectInfo = info;
    },
    updateOpenid(state, openid) {
      state.openid = openid;
      this.commit("m_user/saveOpenidToStorage");
    },
    saveOpenidToStorage(state) {
      common_vendor.index.setStorageSync("openid", state.openid);
    }
  }
};
exports.moduleUser = moduleUser;
