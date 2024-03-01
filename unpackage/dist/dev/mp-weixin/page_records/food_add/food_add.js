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
      loadMoreStatus: "more",
      show: false,
      inputValue: void 0,
      dataSwitchIndex: 0,
      activeItem: {}
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
  onReachBottom() {
    if (this.loadMoreStatus === "more") {
      this.loadMoreStatus = "loading";
      this.currentPage++;
      this.getEnergyList();
    }
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
    handleAdd(item) {
      this.open(item);
    },
    open(item) {
      this.activeItem = item;
      this.$refs.popup.open("bottom");
    },
    change(e) {
      this.show = e.show;
    },
    handlePopupClose() {
      this.$refs.popup.close();
    },
    handleDataSwitch(index) {
      this.dataSwitchIndex = index;
    },
    handleConfirm() {
    }
  }
};
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  const _easycom_food_record_list_add_item2 = common_vendor.resolveComponent("food-record-list-add-item");
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_search_bar2 + _easycom_food_record_list_add_item2 + _easycom_uni_load_more2 + _easycom_uni_list2 + _easycom_uni_icons2 + _easycom_uni_easyinput2 + _easycom_uni_popup2)();
}
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
const _easycom_food_record_list_add_item = () => "../../components/food-record-list-add-item/food-record-list-add-item.js";
const _easycom_uni_load_more = () => "../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_search_bar + _easycom_food_record_list_add_item + _easycom_uni_load_more + _easycom_uni_list + _easycom_uni_icons + _easycom_uni_easyinput + _easycom_uni_popup)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: "overflow:" + ($data.show ? "hidden" : "visible"),
    b: common_vendor.o($options.search),
    c: common_vendor.o($options.cancel),
    d: common_vendor.o($options.clear),
    e: common_vendor.o(($event) => $data.searchValue = $event),
    f: common_vendor.p({
      focus: true,
      modelValue: $data.searchValue
    }),
    g: common_vendor.f($data.list, (item, idx, i0) => {
      return {
        a: idx,
        b: common_vendor.o(($event) => $options.handleAdd(item), idx),
        c: "d1e83544-2-" + i0 + ",d1e83544-1",
        d: common_vendor.p({
          title: item.name,
          note: $options.getNote(item)
        })
      };
    }),
    h: common_vendor.o($options.handleLoadMore),
    i: common_vendor.p({
      status: $data.loadMoreStatus
    }),
    j: common_vendor.o($options.handlePopupClose),
    k: common_vendor.p({
      type: "closeempty",
      size: "20",
      color: "#666"
    }),
    l: common_vendor.t($data.activeItem.name),
    m: common_vendor.o(($event) => $data.inputValue = $event),
    n: common_vendor.p({
      placeholder: "请输入",
      ["input-border"]: false,
      type: "number",
      focus: true,
      modelValue: $data.inputValue
    }),
    o: $data.dataSwitchIndex === 0 ? 1 : "",
    p: common_vendor.o(($event) => $options.handleDataSwitch(0)),
    q: $data.dataSwitchIndex === 1 ? 1 : "",
    r: common_vendor.o(($event) => $options.handleDataSwitch(1)),
    s: common_vendor.o((...args) => $options.handleConfirm && $options.handleConfirm(...args)),
    t: common_vendor.sr("popup", "d1e83544-4"),
    v: common_vendor.o($options.change),
    w: common_vendor.p({
      type: "bottom",
      ["background-color"]: "#fff"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/fangheng/Documents/Uniapp/uni-health/page_records/food_add/food_add.vue"]]);
wx.createPage(MiniProgramPage);
