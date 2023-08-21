"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "mine-header-card",
  data() {
    return {
      itemList: [
        {
          title: "当前(公斤)",
          value: 70
        },
        {
          title: "目标(公斤)",
          value: 60.2
        },
        {
          title: "BMI",
          value: 23.2
        }
      ]
    };
  },
  computed: {
    ...common_vendor.mapState("m_user", ["token"]),
    isLogin() {
      return this.token.length > 0;
    }
  },
  methods: {
    handleArrowClick() {
      console.log("handle arrow click");
      if (this.isLogin) {
        common_vendor.index.navigateTo({
          url: "/pages/userinfo/userinfo"
        });
      } else {
        common_vendor.index.navigateTo({
          url: "/pages/login/login"
        });
      }
    },
    handleLoginClick() {
      common_vendor.index.navigateTo({
        url: "/pages/login/login"
      });
    }
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
  return common_vendor.e({
    a: $options.isLogin
  }, $options.isLogin ? {} : {
    b: common_vendor.o((...args) => $options.handleLoginClick && $options.handleLoginClick(...args))
  }, {
    c: common_vendor.o($options.handleArrowClick),
    d: common_vendor.p({
      type: "right",
      size: "24",
      color: "#666"
    }),
    e: common_vendor.f($data.itemList, (item, idx, i0) => {
      return {
        a: common_vendor.t($options.isLogin ? item.value : "--"),
        b: common_vendor.t(item.title),
        c: idx
      };
    })
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/fangheng/Documents/Uniapp/uni-health/components/mine-header-card/mine-header-card.vue"]]);
wx.createComponent(Component);
