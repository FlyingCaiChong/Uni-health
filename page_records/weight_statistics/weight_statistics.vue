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
      this.getWeightDatas();
    },
    methods: {
      async getWeightDatas() {
        // 获取体重数据列表
        const res = await uni.$http.post('weight/getWeights', {
          userID: this.userInfo.userID,
          order: "ASC" // 升序 默认日期降序DESC
        });
        if (res && res.resultData) {
          this.chartData = {
            categories: res.resultData.map(i => this.formatDate(i.weight_date)),
            series: [
              {
                name: '体重',
                data: res.resultData.map(i => i.weight)
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
