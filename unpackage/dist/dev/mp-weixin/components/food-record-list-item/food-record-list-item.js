"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "food-record-list-item",
  props: {
    title: {
      type: String,
      default: ""
    },
    total: {
      type: Number,
      default: 0
    },
    // 热量
    quantity: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {};
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($props.title),
    b: common_vendor.t($props.quantity),
    c: common_vendor.t($props.total),
    d: common_vendor.p({
      type: "right",
      size: "20",
      color: "#999"
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/fangheng/Documents/Uniapp/uni-health/components/food-record-list-item/food-record-list-item.vue"]]);
wx.createComponent(Component);
