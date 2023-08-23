<template>
  <view class="food-record">
    <view class="food-record-header">
      <view class="time-wrapper">
        <text class="time">08/23 周三</text>
      </view>
      <view class="content-wrapper">
        <view class="content-box1">
          <view class="content-item">
            <text class="title">饮食摄入</text>
            <text class="value">89</text>
            <text class="unit">千卡</text>
          </view>
          <view class="content-item">
            <view class="charts-box">
              <qiun-data-charts type="arcbar" :opts="opts" :chartData="chartData"></qiun-data-charts>
            </view>
          </view>
          <view class="content-item">
            <text class="title">运动消耗</text>
            <text class="value">100</text>
            <text class="unit">千卡</text>
          </view>
        </view>
        <view class="content-box2">
          <view class="content-item">
            <text class="title">脂肪</text>
            <progress class="progress" percent="10" active-color="#DBC4F0" background-color="#FAF3F0" border-radius="2" stroke-width="4"/>
            <text class="unit">1.1/48 克</text>
          </view>
          <view class="content-item">
            <text class="title">碳水</text>
            <progress class="progress" percent="60" active-color="#116A7B" background-color="#C2DEDC" border-radius="2" stroke-width="4"/>
            <text class="unit">0/240 克</text>
          </view>
          <view class="content-item">
            <text class="title">蛋白</text>
            <progress class="progress" percent="30" active-color="#A4BC92" background-color="#DDFFBB" border-radius="2" stroke-width="4"/>
            <text class="unit">19.8/87 克</text>
          </view>
        </view>
      </view>
    </view>

    <!-- list -->
    <view class="food-record-list">
      <food-record-list-item title="早餐" :total="400" :quantity="100" @add="handleAdd">
        <template #icon>
          <image class="icon" src="@/static/common-icons/food_icon_1.png" mode=""></image>
        </template>
      </food-record-list-item>
      <food-record-list-item title="午餐" :total="500" :quantity="200">
        <template #icon>
          <image class="icon" src="@/static/common-icons/food_icon_2.png" mode=""></image>
        </template>
      </food-record-list-item>
      <food-record-list-item title="晚餐" :total="600" :quantity="300">
        <template #icon>
          <image class="icon" src="@/static/common-icons/food_icon_3.png" mode=""></image>
        </template>
      </food-record-list-item>
      <food-record-list-item title="加餐" :total="1000" :quantity="400">
        <template #icon>
          <image class="icon" src="@/static/common-icons/food_icon_4.png" mode=""></image>
        </template>
      </food-record-list-item>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        chartData: {},
        opts: {
                color: ["#1890FF","#91CB74","#FAC858","#EE6666","#73C0DE","#3CA272","#FC8452","#9A60B4","#ea7ccc"],
                padding: undefined,
                title: {
                  name: "80%",
                  fontSize: 12,
                  color: "#333333"
                },
                subtitle: {
                  name: "剩余",
                  fontSize: 12,
                  color: "#999999"
                },
                extra: {
                  arcbar: {
                    type: "circle",
                    width: 6,
                    backgroundColor: "#E9E9E9",
                    startAngle: 1.5,
                    endAngle: 0.25,
                    gap: 2
                  }
                }
              }
      };
    },
    onReady() {
      this.getServerData();
    },
    methods: {
      getServerData() {
        setTimeout(() => {
          let res = {
                      series: [
                        {
                          name: "正确率",
                          color: "#2fc25b",
                          data: 0.8
                        }
                      ]
                    };
          this.chartData = JSON.parse(JSON.stringify(res));
          console.log('chartData', this.chartData);
        }, 500);
      },
      
      handleAdd() {
        uni.navigateTo({
          url: '/page_records/food_add/food_add'
        });
      }
    },
  }
</script>

<style lang="scss">
.food-record {
  &-header {
    background-color: #fff;
    border-radius: 16rpx;
    height: 460rpx;
    margin: 30rpx;
    display: flex;
    flex-direction: column;
    .time-wrapper {
      height: 100rpx;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #eee;
      
      .time {
        margin-left: 30rpx;
        font-size: 16px;
        color: #666;
      }
    }
    .content-wrapper {
      padding: 30rpx;
      flex: 1;
      display: flex;
      flex-direction: column;
      .content-box1 {
        height: 180rpx;
        display: flex;
        flex-direction: row;
        .content-item {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 33%;
          
          .charts-box {
            height: 100%;
          }
          
          .title {
            color: #999;
            font-size: 12px;
          }
          
          .value {
            color: #333;
            font-size: 14px;
            font-weight: 500;
          }
          
          .unit {
            color: #999;
            font-size: 12px;
          }
        }
      }
      .content-box2 {
        flex: 1;
        display: flex;
        flex-direction: row;
        .content-item {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .title {
            font-size: 12px;
            color: #999;
          }
          .progress {
            width: 80%;
          }
          .unit {
            font-size: 12px;
            color: #999;
          }
        }
      }
    }
  }
  
  &-list {
    display: flex;
    flex-direction: column;
  }
}

.icon {
  margin-left: 20rpx;
  width: 36rpx;
  height: 36rpx;
}
</style>
