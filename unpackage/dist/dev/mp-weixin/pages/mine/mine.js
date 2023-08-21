"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  computed: {
    ...common_vendor.mapState("m_user", ["token"])
  },
  onShow() {
    console.log("onShow");
  },
  methods: {
    // 健康测评
    handleHealthEvaluation() {
      this.handleNavigation();
    },
    // 健康方案
    handleHealthScheme() {
      this.handleNavigation();
    },
    // 商务合作
    handleBusiness() {
      this.handleNavigation();
    },
    // 意见反馈
    handleFeedback() {
      this.handleNavigation();
    },
    // 设置
    handleSetting() {
      this.handleNavigation("/pages/setting/setting");
    },
    handleNavigation(url) {
      if (this.token.length) {
        if (!url)
          return;
        common_vendor.index.navigateTo({
          url
        });
      } else {
        common_vendor.index.navigateTo({
          url: "/pages/login/login"
        });
      }
    }
  }
};
if (!Array) {
  const _easycom_mine_header_card2 = common_vendor.resolveComponent("mine-header-card");
  const _easycom_mine_funcs_card2 = common_vendor.resolveComponent("mine-funcs-card");
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  (_easycom_mine_header_card2 + _easycom_mine_funcs_card2 + _easycom_uni_list_item2 + _easycom_uni_list2 + _easycom_uni_card2)();
}
const _easycom_mine_header_card = () => "../../components/mine-header-card/mine-header-card.js";
const _easycom_mine_funcs_card = () => "../../components/mine-funcs-card/mine-funcs-card.js";
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
const _easycom_uni_card = () => "../../uni_modules/uni-card/components/uni-card/uni-card.js";
if (!Math) {
  (_easycom_mine_header_card + _easycom_mine_funcs_card + _easycom_uni_list_item + _easycom_uni_list + _easycom_uni_card)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.handleHealthEvaluation),
    b: common_vendor.p({
      showExtraIcon: true,
      title: "健康测评",
      clickable: true,
      ["extra-icon"]: {
        color: "#4cd964",
        size: "22",
        type: "shop-filled"
      }
    }),
    c: common_vendor.o($options.handleHealthScheme),
    d: common_vendor.p({
      showExtraIcon: true,
      title: "健康方案",
      clickable: true,
      ["extra-icon"]: {
        color: "#4cd964",
        size: "22",
        type: "wallet-filled"
      }
    }),
    e: common_vendor.p({
      padding: "0",
      spacing: "0",
      margin: "0",
      border: false,
      ["is-shadow"]: false
    }),
    f: common_vendor.o($options.handleBusiness),
    g: common_vendor.p({
      showExtraIcon: true,
      title: "商务合作",
      clickable: true,
      ["extra-icon"]: {
        color: "#4cd964",
        size: "22",
        type: "staff"
      }
    }),
    h: common_vendor.o($options.handleFeedback),
    i: common_vendor.p({
      showExtraIcon: true,
      title: "建议反馈",
      clickable: true,
      ["extra-icon"]: {
        color: "#4cd964",
        size: "22",
        type: "info"
      }
    }),
    j: common_vendor.p({
      padding: "0",
      spacing: "0",
      margin: "0",
      border: false,
      ["is-shadow"]: false
    }),
    k: common_vendor.o($options.handleSetting),
    l: common_vendor.p({
      showExtraIcon: true,
      title: "设置",
      clickable: true,
      ["extra-icon"]: {
        color: "#4cd964",
        size: "22",
        type: "settings-filled"
      }
    }),
    m: common_vendor.p({
      padding: "0",
      spacing: "0",
      margin: "0",
      border: false,
      ["is-shadow"]: false
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/fangheng/Documents/Uniapp/uni-health/pages/mine/mine.vue"]]);
wx.createPage(MiniProgramPage);
