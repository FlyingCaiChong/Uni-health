<template>
  <view>
    <view class="charts-box">
      <qiun-data-charts :opts="opts" type="line" :chartData="chartData"></qiun-data-charts>
    </view>
  </view>
</template>

<script>
  import { mapState } from 'vuex';
  
  export default {
    data() {
      return {
        chartData: {},
        opts: {
          xAxis: {
            labelCount: 6, // 数据点文字单屏幕限制显示的数量 @see: https://blog.csdn.net/Serena_tz/article/details/129199110
            rotateLabel: true, // 旋转数据点文字
            fontColor: '#999'
          },
          extra: {
            line: {
              type: 'curve'
            }
          }
        }
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
          currentPage: 1,
          pageSize: 100,
          order: "ASC" // 升序 默认日期降序DESC
        });
        if (res && res.resultData.list) {
          this.chartData = {
            categories: res.resultData.list.map(i => this.formatDate(i.weight_date)),
            series: [
              {
                name: '体重',
                data: res.resultData.list.map(i => i.weight)
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
