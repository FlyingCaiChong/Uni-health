<template>
  <view>
    <uni-calendar :lunar="true" :showMonth="true" :selected="selected" @change="onChange"></uni-calendar>
    <view class="">
      打卡天数: {{ clockedNum }}
    </view>
    <!-- 提示窗 -->
    <uni-popup ref="alertDialog" type="dialog">
      <uni-popup-dialog type="info" cancelText="取消" confirmText="确定" title="打卡" content="确定打卡吗？" @confirm="onDialogConfirm" @close="onDialogClose"></uni-popup-dialog>
    </uni-popup>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        selected: [],
        currentSelect: ''
      };
    },
    computed: {
      clockedNum() {
        return this.selected.length; 
      }
    },
    methods: {
      onChange(e) {
        console.log('on change', e);
        const { fulldate } = e;
        const found = this.selected.find(i => i.date === fulldate);
        if (found) {
          console.log('已打卡!');
          return;
        }
        
        this.currentSelect = fulldate;
        // 1. 弹窗提示是否打卡
        this.$refs.alertDialog.open();
      },
      onDialogConfirm() {
        // 1. 调用接口
        // 2. 打卡成功
        // 3. 打卡失败
        this.selected.push({
          date: this.currentSelect,
          info: '已打卡'
        });
        console.log('数据', this.selected);
      },
      onDialogClose() {
        console.log('关闭对话框')
      }
    },
  }
</script>

<style lang="scss">

</style>
