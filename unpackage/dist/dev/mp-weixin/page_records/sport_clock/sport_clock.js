"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_util = require("../../utils/util.js");
const _sfc_main = {
  data() {
    return {
      startDate: "",
      endDate: "",
      selected: [],
      currentSelect: ""
    };
  },
  computed: {
    ...common_vendor.mapState("m_user", ["userInfo"]),
    clockedNum() {
      return this.selected.length;
    }
  },
  onReady() {
    this.startDate = utils_util.getDate(/* @__PURE__ */ new Date(), -30).fullDate;
    this.endDate = utils_util.getDate(/* @__PURE__ */ new Date()).fullDate;
  },
  onShow() {
    this.getClocks();
  },
  methods: {
    onChange(e) {
      const { fulldate } = e;
      const found = this.selected.find((i) => i.date === fulldate);
      if (found) {
        console.log("已打卡!");
        return;
      }
      this.currentSelect = fulldate;
      this.$refs.alertDialog.open();
    },
    async onDialogConfirm() {
      await this.addClocks();
    },
    onDialogClose() {
      console.log("关闭对话框");
    },
    async addClocks() {
      try {
        console.log("userID", this.userInfo);
        const res = await common_vendor.index.$http.post("sports/addClocks", {
          date: this.currentSelect,
          userID: this.userInfo.userID
        });
        if (res.resultData) {
          common_vendor.index.$toast.success(res.resultData);
        }
      } catch (e) {
      } finally {
        this.getClocks();
      }
    },
    async getClocks() {
      try {
        const res = await common_vendor.index.$http.post("sports/getClocks", {
          userID: this.userInfo.userID
        });
        if (res.resultData) {
          this.selected = res.resultData.map((i) => ({
            date: i.clock_date,
            info: "已打卡"
          }));
        }
      } catch (e) {
      }
    }
  }
};
if (!Array) {
  const _easycom_uni_calendar2 = common_vendor.resolveComponent("uni-calendar");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_popup_dialog2 = common_vendor.resolveComponent("uni-popup-dialog");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_calendar2 + _easycom_uni_icons2 + _easycom_uni_popup_dialog2 + _easycom_uni_popup2)();
}
const _easycom_uni_calendar = () => "../../uni_modules/uni-calendar/components/uni-calendar/uni-calendar.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_popup_dialog = () => "../../uni_modules/uni-popup/components/uni-popup-dialog/uni-popup-dialog.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_calendar + _easycom_uni_icons + _easycom_uni_popup_dialog + _easycom_uni_popup)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.onChange),
    b: common_vendor.p({
      lunar: true,
      showMonth: true,
      selected: $data.selected,
      ["start-date"]: $data.startDate,
      ["end-date"]: $data.endDate
    }),
    c: common_vendor.p({
      type: "flag-filled",
      size: "20"
    }),
    d: common_vendor.t($options.clockedNum),
    e: common_vendor.o($options.onDialogConfirm),
    f: common_vendor.o($options.onDialogClose),
    g: common_vendor.p({
      type: "info",
      cancelText: "取消",
      confirmText: "确定",
      title: "打卡",
      content: "确定打卡吗？"
    }),
    h: common_vendor.sr("alertDialog", "f1458c34-2"),
    i: common_vendor.p({
      type: "dialog"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/fangheng/Documents/Uniapp/uni-health/page_records/sport_clock/sport_clock.vue"]]);
wx.createPage(MiniProgramPage);
