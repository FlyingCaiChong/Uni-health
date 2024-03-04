"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
const utils_request = require("./utils/request.js");
const store_store = require("./store/store.js");
require("./js_sdk/luch-request/luch-request/core/Request.js");
require("./js_sdk/luch-request/luch-request/core/dispatchRequest.js");
require("./js_sdk/luch-request/luch-request/adapters/index.js");
require("./js_sdk/luch-request/luch-request/helpers/buildURL.js");
require("./js_sdk/luch-request/luch-request/utils.js");
require("./js_sdk/luch-request/luch-request/core/buildFullPath.js");
require("./js_sdk/luch-request/luch-request/helpers/isAbsoluteURL.js");
require("./js_sdk/luch-request/luch-request/helpers/combineURLs.js");
require("./js_sdk/luch-request/luch-request/core/settle.js");
require("./js_sdk/luch-request/luch-request/core/InterceptorManager.js");
require("./js_sdk/luch-request/luch-request/core/mergeConfig.js");
require("./js_sdk/luch-request/luch-request/core/defaults.js");
require("./js_sdk/luch-request/luch-request/utils/clone.js");
require("./store/user.js");
if (!Math) {
  "./pages/home/home.js";
  "./pages/mine/mine.js";
  "./pages/setting/setting.js";
  "./pages/login/login.js";
  "./pages/userinfo/userinfo.js";
  "./page_records/food_record/food_record.js";
  "./page_records/food_add/food_add.js";
  "./page_records/sport_clock/sport_clock.js";
  "./page_records/weight_record/weight_record.js";
  "./page_records/waist_record/waist_record.js";
  "./page_records/weight_add/weight_add.js";
  "./page_records/weight_statistics/weight_statistics.js";
  "./page_records/waist_add/waist_add.js";
  "./page_records/waist_statistics/waist_statistics.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.warn("当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！");
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/fangheng/Documents/Uniapp/uni-health/App.vue"]]);
common_vendor.index.$http = utils_request.request;
const defaultToastObj = {
  mask: true,
  duration: 2e3
};
const toast = ["fail", "success", "error", "exception"].reduce((prev, next) => {
  prev[next] = (obj) => {
    if (typeof obj === "string") {
      common_vendor.index.showToast({
        title: obj,
        icon: next,
        ...defaultToastObj
      });
    } else {
      common_vendor.index.showToast({
        ...defaultToastObj,
        ...obj,
        icon: next
      });
    }
  };
  return prev;
}, {});
common_vendor.index.$toast = toast;
function createApp() {
  const app = common_vendor.createSSRApp(App);
  app.use(store_store.store);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
