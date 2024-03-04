<template>
  <view>
    <view class="charts-box">
      <qiun-data-charts type="line" :chartData="chartData"></qiun-data-charts>
    </view>
  </view>
</template>

<script>
  import { mapState } from 'vuex';
  
  export default {
    data() {
      return {
        chartData: {}
      };
    },
    computed: {
      ...mapState('m_user', ['userInfo']),
    },
    onReady() {
      this.getWaistDatas();
    },
    methods: {
      async getWaistDatas() {
        // 获取腰围数据列表
        const res = await uni.$http.post('waist/getWaists', {
          userID: this.userInfo.userID,
          order: "ASC" // 升序 默认日期降序DESC
        });
        if (res && res.resultData) {
          this.chartData = {
            categories: res.resultData.map(i => this.formatDate(i.waist_date)),
            series: [
              {
                name: '腰围',
                data: res.resultData.map(i => i.waist)
              }
            ]
          };
        }
      },
      formatDate(dateStr) {
        const date = new Date(dateStr);
        const transformedDateStr = (date.getMonth() + 1).toString().padStart(2, '0') + "-" + date.getDate().toString().padStart(2, '0');
        return transformedDateStr;
      }
    },
  }
</script>

<style lang="scss">
.charts-box {
  width: 100%;
  height: 600rpx;
}
</style>
