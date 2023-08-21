"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    ...common_vendor.mapMutations("m_user", ["updateToken", "updateOpenid"]),
    // 退出登录
    handleLogout() {
      this.updateToken("");
      this.updateOpenid("");
      common_vendor.index.reLaunch({
        url: "/pages/home/home"
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  (_easycom_uni_list_item2 + _easycom_uni_list2 + _easycom_uni_card2)();
}
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
const _easycom_uni_card = () => "../../uni_modules/uni-card/components/uni-card/uni-card.js";
if (!Math) {
  (_easycom_uni_list_item + _easycom_uni_list + _easycom_uni_card)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      title: "用户协议",
      clickable: true,
      link: "navigateTo"
    }),
    b: common_vendor.p({
      title: "隐私政策",
      clickable: true,
      link: "navigateTo"
    }),
    c: common_vendor.p({
      title: "隐私政策摘要",
      clickable: true,
      link: "navigateTo"
    }),
    d: common_vendor.p({
      title: "个人信息收集清单",
      clickable: true,
      link: "navigateTo"
    }),
    e: common_vendor.p({
      title: "第三方共享清单",
      clickable: true,
      link: "navigateTo"
    }),
    f: common_vendor.p({
      title: "资质证照",
      clickable: true,
      link: "navigateTo"
    }),
    g: common_vendor.p({
      title: "撤回隐私协议授权",
      clickable: true,
      link: "navigateTo"
    }),
    h: common_vendor.p({
      title: "账号注销(永久删除账户)",
      clickable: true,
      link: "navigateTo"
    }),
    i: common_vendor.p({
      padding: "0",
      spacing: "0",
      margin: "0",
      border: false,
      ["is-shadow"]: false
    }),
    j: common_vendor.o($options.handleLogout),
    k: common_vendor.p({
      title: "退出账号",
      clickable: true
    }),
    l: common_vendor.p({
      padding: "0",
      spacing: "0",
      margin: "0",
      border: false,
      ["is-shadow"]: false
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/fangheng/Documents/Uniapp/uni-health/pages/setting/setting.vue"]]);
wx.createPage(MiniProgramPage);
