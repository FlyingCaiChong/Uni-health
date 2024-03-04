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
    this.getWaistDatas();
  },
  methods: {
    async getWaistDatas() {
      const res = await common_vendor.index.$http.post("waist/getWaists", {
        userID: this.userInfo.userID,
        currentPage: 1,
        pageSize: 100,
        order: "ASC"
        // 升序 默认日期降序DESC
      });
      if (res && res.resultData.list) {
        this.chartData = {
          categories: res.resultData.list.map((i) => this.formatDate(i.waist_date)),
          series: [
            {
              name: "腰围",
              data: res.resultData.list.map((i) => i.waist)
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
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/fangheng/Documents/Uniapp/uni-health/page_records/waist_statistics/waist_statistics.vue"]]);
wx.createPage(MiniProgramPage);
