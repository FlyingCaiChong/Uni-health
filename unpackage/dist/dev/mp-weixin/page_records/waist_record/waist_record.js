"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      currentPage: 1,
      pageSize: 20,
      total: 0,
      loadMoreStatus: "more",
      waistList: [],
      pattern: {
        color: "#7A7E83",
        backgroundColor: "#fff",
        selectedColor: "#F0B86E",
        buttonColor: "#F0B86E",
        iconColor: "#fff"
      },
      content: [
        {
          iconPath: "/static/common-icons/add.png",
          selectedIconPath: "/static/common-icons/add_active.png",
          text: "添加",
          active: true
        },
        {
          iconPath: "/static/common-icons/chart.png",
          selectedIconPath: "/static/common-icons/chart_active.png",
          text: "统计",
          active: true
        }
      ]
    };
  },
  computed: {
    ...common_vendor.mapState("m_user", ["userInfo"])
  },
  onShow() {
    this.getWaistList();
  },
  onHide() {
    if (this.$refs.fab.isShow) {
      this.$refs.fab.close();
    }
  },
  onPullDownRefresh() {
    this.currentPage = 1;
    this.getWaistList().finally(() => {
      common_vendor.index.stopPullDownRefresh();
    });
  },
  onReachBottom() {
    if (this.loadMoreStatus === "more") {
      this.loadMoreStatus = "loading";
      this.currentPage++;
      this.getWaistList();
    }
  },
  methods: {
    onFabClick() {
      console.log("on fab click");
    },
    onTrigger(e) {
      console.log(e);
      if (e.item.text === "添加") {
        common_vendor.index.navigateTo({
          url: "/page_records/waist_add/waist_add"
        });
      } else if (e.item.text === "统计") {
        common_vendor.index.navigateTo({
          url: "/page_records/waist_statistics/waist_statistics"
        });
      }
    },
    onClickItem(item) {
      console.log("on click item", item);
      common_vendor.index.navigateTo({
        url: `/page_records/waist_add/waist_add?item=${encodeURIComponent(JSON.stringify(item))}`
      });
    },
    async getWaistList() {
      try {
        const res = await common_vendor.index.$http.post("waist/getWaists", {
          userID: this.userInfo.userID,
          currentPage: this.currentPage,
          pageSize: this.pageSize
        });
        if (res.success) {
          this.total = res.resultData.total;
          if (this.currentPage === 1) {
            this.waistList = res.resultData.list.map((i) => ({
              id: i.id,
              userID: i.userID,
              date: i.waist_date,
              waist: `${i.waist}`
            }));
          } else {
            this.waistList = [...this.waistList, ...res.resultData.list.map((i) => ({
              id: i.id,
              userID: i.userID,
              date: i.waist_date,
              waist: `${i.waist}`
            }))];
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
        this.getWaistList();
      }
    }
  }
};
if (!Array) {
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  const _easycom_uni_fab2 = common_vendor.resolveComponent("uni-fab");
  (_easycom_uni_list_item2 + _easycom_uni_load_more2 + _easycom_uni_list2 + _easycom_uni_fab2)();
}
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_load_more = () => "../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
const _easycom_uni_fab = () => "../../uni_modules/uni-fab/components/uni-fab/uni-fab.js";
if (!Math) {
  (_easycom_uni_list_item + _easycom_uni_load_more + _easycom_uni_list + _easycom_uni_fab)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.waistList.length
  }, $data.waistList.length ? {
    b: common_vendor.f($data.waistList, (item, k0, i0) => {
      return {
        a: item.id,
        b: common_vendor.o(($event) => $options.onClickItem(item), item.id),
        c: "11906cde-1-" + i0 + ",11906cde-0",
        d: common_vendor.p({
          title: item.date,
          ["right-text"]: item.waist,
          ["show-arrow"]: true,
          clickable: true
        })
      };
    }),
    c: common_vendor.o($options.handleLoadMore),
    d: common_vendor.p({
      status: $data.loadMoreStatus
    })
  } : {}, {
    e: common_vendor.sr("fab", "11906cde-3"),
    f: common_vendor.o($options.onFabClick),
    g: common_vendor.o($options.onTrigger),
    h: common_vendor.p({
      pattern: $data.pattern,
      content: $data.content,
      horizontal: "left",
      vertical: "bottom"
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/fangheng/Documents/Uniapp/uni-health/page_records/waist_record/waist_record.vue"]]);
wx.createPage(MiniProgramPage);
