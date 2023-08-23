"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      bannerList: []
    };
  },
  onLoad() {
    this.getBanners();
  },
  onPullDownRefresh() {
    this.getBanners().then(() => {
      common_vendor.index.stopPullDownRefresh();
    });
  },
  methods: {
    async getBanners() {
      try {
        const res = await common_vendor.index.$http.get("/home/getBanners");
        console.log("res", res);
        if (res.success) {
          this.bannerList = res.resultData;
        }
      } catch (e) {
      }
    },
    gotoFoodRecord() {
      common_vendor.index.navigateTo({
        url: "/page_records/food_record/food_record"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.bannerList, (item, index, i0) => {
      return {
        a: item.icon_url,
        b: index
      };
    }),
    b: common_vendor.o((...args) => $options.gotoFoodRecord && $options.gotoFoodRecord(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/fangheng/Documents/Uniapp/uni-health/pages/home/home.vue"]]);
wx.createPage(MiniProgramPage);
