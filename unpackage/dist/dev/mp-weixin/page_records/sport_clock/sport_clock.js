"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      selected: [],
      currentSelect: ""
    };
  },
  computed: {
    clockedNum() {
      return this.selected.length;
    }
  },
  methods: {
    onChange(e) {
      console.log("on change", e);
      const { fulldate } = e;
      const found = this.selected.find((i) => i.date === fulldate);
      if (found) {
        console.log("已打卡!");
        return;
      }
      this.currentSelect = fulldate;
      this.$refs.alertDialog.open();
    },
    onDialogConfirm() {
      this.selected.push({
        date: this.currentSelect,
        info: "已打卡"
      });
      console.log("数据", this.selected);
    },
    onDialogClose() {
      console.log("关闭对话框");
    }
  }
};
if (!Array) {
  const _easycom_uni_calendar2 = common_vendor.resolveComponent("uni-calendar");
  const _easycom_uni_popup_dialog2 = common_vendor.resolveComponent("uni-popup-dialog");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_calendar2 + _easycom_uni_popup_dialog2 + _easycom_uni_popup2)();
}
const _easycom_uni_calendar = () => "../../uni_modules/uni-calendar/components/uni-calendar/uni-calendar.js";
const _easycom_uni_popup_dialog = () => "../../uni_modules/uni-popup/components/uni-popup-dialog/uni-popup-dialog.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_calendar + _easycom_uni_popup_dialog + _easycom_uni_popup)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.onChange),
    b: common_vendor.p({
      lunar: true,
      showMonth: true,
      selected: $data.selected
    }),
    c: common_vendor.t($options.clockedNum),
    d: common_vendor.o($options.onDialogConfirm),
    e: common_vendor.o($options.onDialogClose),
    f: common_vendor.p({
      type: "info",
      cancelText: "取消",
      confirmText: "确定",
      title: "打卡",
      content: "确定打卡吗？"
    }),
    g: common_vendor.sr("alertDialog", "f1458c34-1"),
    h: common_vendor.p({
      type: "dialog"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/fangheng/Documents/Uniapp/uni-health/page_records/sport_clock/sport_clock.vue"]]);
wx.createPage(MiniProgramPage);
