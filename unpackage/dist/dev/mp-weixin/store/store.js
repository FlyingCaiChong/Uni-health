"use strict";
const common_vendor = require("../common/vendor.js");
const store_user = require("./user.js");
const store = new common_vendor.createStore({
  modules: {
    "m_user": store_user.moduleUser
  }
});
exports.store = store;
