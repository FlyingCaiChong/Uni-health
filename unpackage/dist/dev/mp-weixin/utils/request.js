"use strict";
const common_vendor = require("../common/vendor.js");
const js_sdk_luchRequest_luchRequest_core_Request = require("../js_sdk/luch-request/luch-request/core/Request.js");
const store_store = require("../store/store.js");
const request = new js_sdk_luchRequest_luchRequest_core_Request.Request({
  // baseURL: 'http://47.100.86.234',
  baseURL: "http://127.0.0.1:3001/health",
  // baseURL: 'http://47.100.86.234/health',
  timeout: 6e4
});
const showToastMessage = (msg) => {
  common_vendor.index.showToast({
    title: msg,
    icon: "error",
    duration: 1500,
    mask: true
  });
};
const errorHandler = (error) => {
  console.log("errorHandler: ", error);
};
[request].forEach((item) => {
  item.interceptors.request.use((config) => {
    const token = store_store.store.state.m_user.token;
    console.log("token: ", token);
    if (token) {
      config.header["Authorization"] = "Bearer " + token;
    }
    return config;
  }, errorHandler);
  item.interceptors.response.use((response) => {
    const { data } = response;
    if (data.status === "complete") {
      return data;
    } else {
      console.log("sss", data);
      showToastMessage(data.errorMesssage);
      return Promise.reject(data);
    }
  }, errorHandler);
});
exports.request = request;
