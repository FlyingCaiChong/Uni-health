<template>
  <view>
    <uni-calendar :lunar="true" :showMonth="true" :selected="selected" :start-date="startDate" :end-date="endDate" @change="onChange"></uni-calendar>
    <view class="clocked-num-wrapper">
      <uni-icons type="flag-filled" size="20" color="#40F8FF"></uni-icons>
      打卡天数: <view class="clocked-num">{{ clockedNum }}天</view>
    </view>
    <!-- 提示窗 -->
    <uni-popup ref="alertDialog" type="dialog">
      <uni-popup-dialog type="info" cancelText="取消" confirmText="确定" title="打卡" content="确定打卡吗？" @confirm="onDialogConfirm" @close="onDialogClose"></uni-popup-dialog>
    </uni-popup>
  </view>
</template>

<script>
  import { mapState } from 'vuex';
  import { getDate } from '@/utils/util.js'
  
  export default {
    data() {
      return {
        startDate: '',
        endDate: '',
        selected: [],
        currentSelect: ''
      };
    },
    computed: {
      ...mapState('m_user', ['userInfo']),
      clockedNum() {
        return this.selected.length; 
      }
    },
    onReady() {
      this.startDate = getDate(new Date(), -30).fullDate;
      this.endDate = getDate(new Date()).fullDate;
    },
    onShow() {
      this.getClocks();
    },
    methods: {
      onChange(e) {
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
      async onDialogConfirm() {
        // 1. 调用接口
        await this.addClocks();
      },
      onDialogClose() {
        console.log('关闭对话框')
      },
      async addClocks() {
        try{
          console.log('userID', this.userInfo);
          const res = await uni.$http.post('sports/addClocks', {
            date: this.currentSelect,
            userID: this.userInfo.userID
          });
          if (res.resultData) {
            uni.$toast.success(res.resultData);
          }
        }catch(e){
          //TODO handle the exception
        } finally {
          this.getClocks();
        }
      },
      async getClocks() {
        try{
          const res = await uni.$http.post('sports/getClocks', {
            userID: this.userInfo.userID
          });
          if (res.resultData) {
            this.selected = res.resultData.map(i => ({
              date: i.clock_date,
              info: '已打卡'
            }));
          }
        }catch(e){
          //TODO handle the exception
        }
      }
    },
  }
</script>

<style lang="scss">
.clocked-num-wrapper {
  margin: 20rpx;
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #666;
  .clocked-num {
    margin-left: 10rpx;
    font-size: 20px;
    color: #333;
    font-weight: 700;
  }
}
</style>
