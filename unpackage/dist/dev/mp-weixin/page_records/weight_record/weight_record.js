"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      weightList: [],
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
    this.getWeightList();
  },
  onHide() {
    if (this.$refs.fab.isShow) {
      this.$refs.fab.close();
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
          url: "/page_records/weight_add/weight_add"
        });
      } else if (e.item.text === "统计") {
        common_vendor.index.navigateTo({
          url: "/page_records/weight_statistics/weight_statistics"
        });
      }
    },
    onClickItem(item) {
      console.log("on click item", item);
      common_vendor.index.navigateTo({
        url: `/page_records/weight_add/weight_add?item=${encodeURIComponent(JSON.stringify(item))}`
      });
    },
    async getWeightList() {
      const res = await common_vendor.index.$http.post("weight/getWeights", {
        userID: this.userInfo.userID
      });
      if (res && res.resultData) {
        this.weightList = res.resultData.map((i) => ({
          id: i.id,
          userID: i.userID,
          date: i.weight_date,
          weight: `${i.weight}`
        }));
      }
    }
  }
};
if (!Array) {
  const _easycom_uni_list_item2 = common_vendor.resolveComponent("uni-list-item");
  const _easycom_uni_list2 = common_vendor.resolveComponent("uni-list");
  const _easycom_uni_fab2 = common_vendor.resolveComponent("uni-fab");
  (_easycom_uni_list_item2 + _easycom_uni_list2 + _easycom_uni_fab2)();
}
const _easycom_uni_list_item = () => "../../uni_modules/uni-list/components/uni-list-item/uni-list-item.js";
const _easycom_uni_list = () => "../../uni_modules/uni-list/components/uni-list/uni-list.js";
const _easycom_uni_fab = () => "../../uni_modules/uni-fab/components/uni-fab/uni-fab.js";
if (!Math) {
  (_easycom_uni_list_item + _easycom_uni_list + _easycom_uni_fab)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.weightList.length
  }, $data.weightList.length ? {
    b: common_vendor.f($data.weightList, (item, k0, i0) => {
      return {
        a: item.id,
        b: common_vendor.o(($event) => $options.onClickItem(item), item.id),
        c: "874196e0-1-" + i0 + ",874196e0-0",
        d: common_vendor.p({
          title: item.date,
          ["right-text"]: item.weight,
          ["show-arrow"]: true,
          clickable: true
        })
      };
    })
  } : {}, {
    c: common_vendor.sr("fab", "874196e0-2"),
    d: common_vendor.o($options.onFabClick),
    e: common_vendor.o($options.onTrigger),
    f: common_vendor.p({
      pattern: $data.pattern,
      content: $data.content,
      horizontal: "left",
      vertical: "bottom"
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/fangheng/Documents/Uniapp/uni-health/page_records/weight_record/weight_record.vue"]]);
wx.createPage(MiniProgramPage);
