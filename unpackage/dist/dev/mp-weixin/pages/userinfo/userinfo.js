"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_util = require("../../utils/util.js");
const _sfc_main = {
  data() {
    return {
      localUserInfo: {
        userID: null,
        gender: 0,
        birthday: "2000-01-01",
        height: 130,
        currentWeight: 30,
        targetWeight: 30
      },
      genderRange: ["男", "女"],
      genderIndex: 0,
      birthday: "2000-01-01",
      heightIndex: 0,
      heightRange: Array.from({ length: 131 }, (_, i) => i + 100),
      currentWeightIndex: 0,
      targetWeightIndex: 0,
      weightRange: Array.from({ length: 1701 }, (_, i) => (i + 300) / 10)
    };
  },
  computed: {
    ...common_vendor.mapState("m_user", ["openid"]),
    startDate() {
      return this.getDate("start");
    },
    endDate() {
      return this.getDate("end");
    }
  },
  onLoad() {
    common_vendor.index.$http.get("info/userinfo", {
      params: {
        openid: this.openid
      }
    }).then((res) => {
      if (res.resultData) {
        this.localUserInfo = res.resultData;
        this.localUserInfo.currentWeight = res.resultData.current_weight;
        this.localUserInfo.targetWeight = res.resultData.target_weight;
        this.genderIndex = this.localUserInfo.gender === 0 ? 0 : 1;
        this.birthday = this.localUserInfo.birthday ?? "2000-01-01";
        const heightIndex = this.heightRange.findIndex((i) => i === this.localUserInfo.height);
        this.heightIndex = heightIndex !== -1 ? heightIndex : 0;
        const currentWeightIndex = this.weightRange.findIndex((i) => i === this.localUserInfo.currentWeight);
        this.currentWeightIndex = currentWeightIndex !== -1 ? currentWeightIndex : 0;
        const targetWeightIndex = this.weightRange.findIndex((i) => i === this.localUserInfo.targetWeight);
        this.targetWeightIndex = targetWeightIndex !== -1 ? targetWeightIndex : 0;
      } else {
        this.localUserInfo.userID = "HU" + utils_util.generateUUID(6);
      }
    }).catch((err) => {
      console.log("get user info err: ", err);
    });
  },
  methods: {
    bindGenderPickerChange(e) {
      console.log("bindGenderPickerChange: ", e);
      this.genderIndex = e.detail.value;
      this.localUserInfo.gender = this.genderIndex;
    },
    bindBirthdayChange(e) {
      this.birthday = e.detail.value;
      this.localUserInfo.birthday = this.birthday;
    },
    bindHeightPickerChange(e) {
      this.heightIndex = e.detail.value;
      this.localUserInfo.height = this.heightRange[this.heightIndex];
    },
    bindCurrentWeightPickerChange(e) {
      this.currentWeightIndex = e.detail.value;
      this.localUserInfo.currentWeight = this.weightRange[this.currentWeightIndex];
    },
    bindTargetWeightPickerChange(e) {
      this.targetWeightIndex = e.detail.value;
      this.localUserInfo.targetWeight = this.weightRange[this.targetWeightIndex];
    },
    handleSave() {
      console.log("sss", this.localUserInfo);
      const requestBody = {
        openid: this.openid,
        userID: this.localUserInfo.userID,
        gender: this.localUserInfo.gender,
        birthday: this.localUserInfo.birthday,
        height: this.localUserInfo.height,
        currentWeight: this.localUserInfo.currentWeight,
        targetWeight: this.localUserInfo.targetWeight
      };
      common_vendor.index.$http.post("info/updateUserInfo", requestBody).then((res) => {
        if (res.success) {
          common_vendor.index.$toast.success("修改成功");
          common_vendor.index.navigateBack();
        }
      }).catch((err) => {
        console.log("update user info err", err);
        common_vendor.index.$toast.failure("修改失败");
      });
    },
    getDate(type) {
      const date = /* @__PURE__ */ new Date();
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();
      if (type === "start") {
        year = year - 100;
      } else {
        year = year;
      }
      month = month > 9 ? month : "0" + month;
      day = day > 9 ? day : "0" + day;
      return `${year}-${month}-${day}`;
    }
  }
};
if (!Array) {
  const _easycom_user_list_item2 = common_vendor.resolveComponent("user-list-item");
  _easycom_user_list_item2();
}
const _easycom_user_list_item = () => "../../components/user-list-item/user-list-item.js";
if (!Math) {
  _easycom_user_list_item();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.localUserInfo.userID),
    b: common_vendor.p({
      title: "用户ID"
    }),
    c: common_vendor.t($data.genderRange[$data.genderIndex]),
    d: common_vendor.o((...args) => $options.bindGenderPickerChange && $options.bindGenderPickerChange(...args)),
    e: $data.genderRange,
    f: $data.genderIndex,
    g: common_vendor.p({
      title: "性别"
    }),
    h: common_vendor.t($data.birthday),
    i: $data.birthday,
    j: $options.startDate,
    k: $options.endDate,
    l: common_vendor.o((...args) => $options.bindBirthdayChange && $options.bindBirthdayChange(...args)),
    m: common_vendor.p({
      title: "生日"
    }),
    n: common_vendor.t($data.heightRange[$data.heightIndex]),
    o: common_vendor.o((...args) => $options.bindHeightPickerChange && $options.bindHeightPickerChange(...args)),
    p: $data.heightRange,
    q: $data.heightIndex,
    r: common_vendor.p({
      title: "身高"
    }),
    s: common_vendor.t($data.weightRange[$data.currentWeightIndex]),
    t: common_vendor.o((...args) => $options.bindCurrentWeightPickerChange && $options.bindCurrentWeightPickerChange(...args)),
    v: $data.weightRange,
    w: $data.currentWeightIndex,
    x: common_vendor.p({
      title: "当前体重"
    }),
    y: common_vendor.t($data.weightRange[$data.targetWeightIndex]),
    z: common_vendor.o((...args) => $options.bindTargetWeightPickerChange && $options.bindTargetWeightPickerChange(...args)),
    A: $data.weightRange,
    B: $data.targetWeightIndex,
    C: common_vendor.p({
      title: "目标体重"
    }),
    D: common_vendor.o((...args) => $options.handleSave && $options.handleSave(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/fangheng/Documents/Uniapp/uni-health/pages/userinfo/userinfo.vue"]]);
wx.createPage(MiniProgramPage);
