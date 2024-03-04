"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  computed: {
    ...common_vendor.mapState("m_user", ["redirectInfo"])
  },
  methods: {
    ...common_vendor.mapMutations("m_user", ["updateToken", "updateOpenid", "updateUserInfo"]),
    handleLoginClick() {
      common_vendor.wx$1.login({
        success: (res) => {
          console.log("success", res);
          if (res.errMsg === "login:ok") {
            const code = res.code;
            common_vendor.index.$http.post("users/wxlogin", {
              code
            }).then((result) => {
              console.log("uni $toast", common_vendor.index.$toast);
              console.log("result", result);
              if (result.success) {
                const token = result.resultData.token;
                const openid = result.resultData.openid;
                this.updateToken(token);
                this.updateOpenid(openid);
                this.getUserInfo(openid);
              }
            }).catch((err) => {
              console.log("err", err);
            });
          }
        },
        fail: (err) => {
          console.log("fail", err);
        },
        complete: () => {
          console.log("complete");
        }
      });
    },
    navigateBack() {
      if (this.redirectInfo && this.redirectInfo.openType === "switchTab") {
        common_vendor.index.switchTab({
          url: this.redirectInfo.from,
          complete: () => {
            this.updateRedirectInfo(null);
          }
        });
      } else {
        common_vendor.index.navigateBack();
      }
    },
    getUserInfo(openid) {
      common_vendor.index.$http.get("info/userinfo", {
        params: {
          openid
        }
      }).then((res) => {
        if (res.resultData) {
          this.updateUserInfo(res.resultData);
        }
        common_vendor.index.$toast.success("登录成功");
        this.navigateBack();
      }).catch((err) => {
        console.log("get user info err: ", err);
        common_vendor.index.$toast.fail("登陆失败：", err);
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.handleLoginClick && $options.handleLoginClick(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/fangheng/Documents/Uniapp/uni-health/pages/login/login.vue"]]);
wx.createPage(MiniProgramPage);
