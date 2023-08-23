"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "food-record-list-add-item",
  props: {
    title: {
      type: String,
      default: ""
    },
    note: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  methods: {
    handleAdd() {
      this.$emit("add");
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  (_easycom_uni_icons2 + _easycom_uni_list_item2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_list_item)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.handleAdd),
    b: common_vendor.p({
      type: "plus-filled",
      size: "20",
      color: "#00DFA2"
    }),
    c: common_vendor.p({
      title: $props.title,
      note: $props.note
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/fangheng/Documents/Uniapp/uni-health/components/food-record-list-add-item/food-record-list-add-item.vue"]]);
wx.createComponent(Component);
