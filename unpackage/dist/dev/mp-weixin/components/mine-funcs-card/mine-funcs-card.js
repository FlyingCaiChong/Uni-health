"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "mine-funcs-card",
  data() {
    return {
      funcsList: [
        {
          title: "基本信息",
          icons: "/static/common-icons/basic-info.png"
        },
        {
          title: "收藏的食物",
          icons: "/static/common-icons/favorite.png"
        },
        {
          title: "上传的食物",
          icons: "/static/common-icons/shop.png"
        },
        {
          title: "更多应用",
          icons: "/static/common-icons/funcs.png"
        }
      ]
    };
  },
  methods: {
    handleFunClick(item) {
      console.log("handle fun click: ", item.title);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.funcsList, (item, idx, i0) => {
      return {
        a: item.icons,
        b: common_vendor.t(item.title),
        c: idx,
        d: common_vendor.o(($event) => $options.handleFunClick(item), idx)
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/fangheng/Documents/Uniapp/uni-health/components/mine-funcs-card/mine-funcs-card.vue"]]);
wx.createComponent(Component);
