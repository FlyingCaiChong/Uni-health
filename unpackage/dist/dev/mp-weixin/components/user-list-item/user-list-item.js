"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "user-list-item",
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($props.title)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/fangheng/Documents/Uniapp/uni-health/components/user-list-item/user-list-item.vue"]]);
wx.createComponent(Component);
