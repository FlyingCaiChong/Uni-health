"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      chartData: {}
    };
  },
  computed: {
    ...common_vendor.mapState("m_user", ["userInfo"])
  },
  onReady() {
    this.getWeightDatas();
  },
  methods: {
    async getWeightDatas() {
      const res = await common_vendor.index.$http.post("weight/getWeights", {
        userID: this.userInfo.userID,
        order: "ASC"
        // 升序 默认日期降序DESC
      });
      if (res && res.resultData) {
        this.chartData = {
          categories: res.resultData.map((i) => this.formatDate(i.weight_date)),
          series: [
            {
              name: "体重",
              data: res.resultData.map((i) => i.weight)
            }
          ]
        };
      }
    },
    formatDate(dateStr) {
      const date = new Date(dateStr);
      const transformedDateStr = (date.getMonth() + 1).toString().padStart(2, "0") + "-" + date.getDate().toString().padStart(2, "0");
      return transformedDateStr;
    }
  }
};
if (!Array) {
  const _easycom_qiun_data_charts2 = common_vendor.resolveComponent("qiun-data-charts");
  _easycom_qiun_data_charts2();
}
const _easycom_qiun_data_charts = () => "../../uni_modules/qiun-data-charts/components/qiun-data-charts/qiun-data-charts.js";
if (!Math) {
  _easycom_qiun_data_charts();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      type: "line",
      chartData: $data.chartData
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/fangheng/Documents/Uniapp/uni-health/page_records/weight_statistics/weight_statistics.vue"]]);
wx.createPage(MiniProgramPage);
