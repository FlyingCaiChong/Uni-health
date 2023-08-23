"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      searchValue: "",
      currentPage: 1,
      pageSize: 10,
      total: 0,
      list: [],
      loadMoreStatus: "more"
    };
  },
  onLoad() {
    this.getEnergyList();
  },
  onPullDownRefresh() {
    this.currentPage = 1;
    this.getEnergyList().finally(() => {
      common_vendor.index.stopPullDownRefresh();
    });
  },
  methods: {
    async getEnergyList() {
      try {
        const res = await common_vendor.index.$http.post("/foods/getEnergyList", {
          currentPage: this.currentPage,
          pageSize: this.pageSize
        });
        if (res.success) {
          this.total = res.resultData.total;
          if (this.currentPage === 1) {
            this.list = res.resultData.list;
          } else {
            this.list = [...this.list, ...res.resultData.list];
          }
        }
      } catch (e) {
      } finally {
        if (this.total > this.currentPage * this.pageSize) {
          this.loadMoreStatus = "more";
        } else {
          this.loadMoreStatus = "noMore";
        }
      }
    },
    handleLoadMore(e) {
      console.log("handle load more: ", e);
      const status = e.detail.status;
      if (status === "more") {
        this.loadMoreStatus = "loading";
        this.currentPage++;
        this.getEnergyList();
      }
    },
    getNote(item) {
      return `${item.energy}${item.unit}/${item.per_value}${item.per_unit}`;
    },
    search() {
    },
    cancel() {
    },
    clear() {
    },
    handleAdd() {
    }
  }
};
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  const _easycom_food_record_list_add_item2 = common_vendor.resolveComponent("food-record-list-add-item");
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  (_easycom_uni_search_bar2 + _easycom_food_record_list_add_item2 + _easycom_uni_load_more2 + _easycom_uni_list2)();
}
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
const _easycom_food_record_list_add_item = () => "../../components/food-record-list-add-item/food-record-list-add-item.js";
const _easycom_uni_load_more = () => "../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
if (!Math) {
  (_easycom_uni_search_bar + _easycom_food_record_list_add_item + _easycom_uni_load_more + _easycom_uni_list)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.search),
    b: common_vendor.o($options.cancel),
    c: common_vendor.o($options.clear),
    d: common_vendor.o(($event) => $data.searchValue = $event),
    e: common_vendor.p({
      focus: true,
      modelValue: $data.searchValue
    }),
    f: common_vendor.f($data.list, (item, idx, i0) => {
      return {
        a: idx,
        b: common_vendor.o($options.handleAdd, idx),
        c: "d1e83544-2-" + i0 + ",d1e83544-1",
        d: common_vendor.p({
          title: item.name,
          note: $options.getNote(item)
        })
      };
    }),
    g: common_vendor.o($options.handleLoadMore),
    h: common_vendor.p({
      status: $data.loadMoreStatus
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/fangheng/Documents/Uniapp/uni-health/page_records/food_add/food_add.vue"]]);
wx.createPage(MiniProgramPage);
