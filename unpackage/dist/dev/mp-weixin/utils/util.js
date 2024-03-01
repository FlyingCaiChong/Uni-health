"use strict";
const generateUUID = (length) => {
  return Number(Math.random().toString().substr(3, length) + Date.now()).toString(36);
};
function getDate(date, AddDayCount = 0) {
  if (!date) {
    date = /* @__PURE__ */ new Date();
  }
  if (typeof date !== "object") {
    date = date.replace(/-/g, "/");
  }
  const dd = new Date(date);
  dd.setDate(dd.getDate() + AddDayCount);
  const y = dd.getFullYear();
  const m = dd.getMonth() + 1 < 10 ? "0" + (dd.getMonth() + 1) : dd.getMonth() + 1;
  const d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
  return {
    fullDate: y + "-" + m + "-" + d,
    year: y,
    month: m,
    date: d,
    day: dd.getDay()
  };
}
exports.generateUUID = generateUUID;
exports.getDate = getDate;
