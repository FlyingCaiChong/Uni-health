"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      formData: {
        date: "",
        weight: ""
      },
      rules: {
        date: {
          rules: [{ required: true, errorMessage: "请选择日期" }]
        },
        weight: {
          rules: [{ required: true, errorMessage: "请输入体重" }]
        }
      }
    };
  },
  computed: {
    ...common_vendor.mapState("m_user", ["userInfo"])
  },
  methods: {
    submit() {
      this.$refs.form.validate().then((res) => {
        console.log("表单数据信息: ", res, this.formData);
        this.addWeight();
      }).catch((err) => {
        console.log("表单错误信息: ", err);
      });
    },
    async addWeight() {
      try {
        const res = await common_vendor.index.$http.post("weight/addWeight", {
          userID: this.userInfo.userID,
          date: this.formData.date,
          weight: this.formData.weight
        });
        common_vendor.index.navigateBack();
      } catch (e) {
      }
    }
  }
};
if (!Array) {
  const _easycom_uni_datetime_picker2 = common_vendor.resolveComponent("uni-datetime-picker");
  const _easycom_uni_forms_item2 = common_vendor.resolveComponent("uni-forms-item");
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_forms2 = common_vendor.resolveComponent("uni-forms");
  (_easycom_uni_datetime_picker2 + _easycom_uni_forms_item2 + _easycom_uni_easyinput2 + _easycom_uni_forms2)();
}
const _easycom_uni_datetime_picker = () => "../../uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker.js";
const _easycom_uni_forms_item = () => "../../uni_modules/uni-forms/components/uni-forms-item/uni-forms-item.js";
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_forms = () => "../../uni_modules/uni-forms/components/uni-forms/uni-forms.js";
if (!Math) {
  (_easycom_uni_datetime_picker + _easycom_uni_forms_item + _easycom_uni_easyinput + _easycom_uni_forms)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $data.formData.date = $event),
    b: common_vendor.p({
      type: "date",
      modelValue: $data.formData.date
    }),
    c: common_vendor.p({
      label: "日期",
      name: "date"
    }),
    d: common_vendor.o(($event) => $data.formData.weight = $event),
    e: common_vendor.p({
      type: "digit",
      placeholder: "请输入体重",
      modelValue: $data.formData.weight
    }),
    f: common_vendor.p({
      label: "体重",
      name: "weight"
    }),
    g: common_vendor.o((...args) => $options.submit && $options.submit(...args)),
    h: common_vendor.sr("form", "d78d2444-0"),
    i: common_vendor.p({
      rules: $data.rules,
      modelValue: $data.formData
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/fangheng/Documents/Uniapp/uni-health/page_records/weight_add/weight_add.vue"]]);
wx.createPage(MiniProgramPage);
