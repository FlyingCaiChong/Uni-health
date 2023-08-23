"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      chartData: {},
      opts: {
        color: ["#1890FF", "#91CB74", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4", "#ea7ccc"],
        padding: void 0,
        title: {
          name: "80%",
          fontSize: 12,
          color: "#333333"
        },
        subtitle: {
          name: "剩余",
          fontSize: 12,
          color: "#999999"
        },
        extra: {
          arcbar: {
            type: "circle",
            width: 6,
            backgroundColor: "#E9E9E9",
            startAngle: 1.5,
            endAngle: 0.25,
            gap: 2
          }
        }
      }
    };
  },
  onReady() {
    this.getServerData();
  },
  methods: {
    getServerData() {
      setTimeout(() => {
        let res = {
          series: [
            {
              name: "正确率",
              color: "#2fc25b",
              data: 0.8
            }
          ]
        };
        this.chartData = JSON.parse(JSON.stringify(res));
        console.log("chartData", this.chartData);
      }, 500);
    },
    handleAdd() {
      common_vendor.index.navigateTo({
        url: "/page_records/food_add/food_add"
      });
    }
  }
};
if (!Array) {
  const _easycom_qiun_data_charts2 = common_vendor.resolveComponent("qiun-data-charts");
  const _easycom_food_record_list_item2 = common_vendor.resolveComponent("food-record-list-item");
  (_easycom_qiun_data_charts2 + _easycom_food_record_list_item2)();
}
const _easycom_qiun_data_charts = () => "../../uni_modules/qiun-data-charts/components/qiun-data-charts/qiun-data-charts.js";
const _easycom_food_record_list_item = () => "../../components/food-record-list-item/food-record-list-item.js";
if (!Math) {
  (_easycom_qiun_data_charts + _easycom_food_record_list_item)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      type: "arcbar",
      opts: $data.opts,
      chartData: $data.chartData
    }),
    b: common_assets._imports_0,
    c: common_vendor.o($options.handleAdd),
    d: common_vendor.p({
      title: "早餐",
      total: 400,
      quantity: 100
    }),
    e: common_assets._imports_1,
    f: common_vendor.p({
      title: "午餐",
      total: 500,
      quantity: 200
    }),
    g: common_assets._imports_2,
    h: common_vendor.p({
      title: "晚餐",
      total: 600,
      quantity: 300
    }),
    i: common_assets._imports_3,
    j: common_vendor.p({
      title: "加餐",
      total: 1e3,
      quantity: 400
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/fangheng/Documents/Uniapp/uni-health/page_records/food_record/food_record.vue"]]);
wx.createPage(MiniProgramPage);
