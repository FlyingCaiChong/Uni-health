<template>
  <page-meta :page-style="'overflow:'+(show?'hidden':'visible')"></page-meta>
  <view>
    <uni-search-bar @confirm="search" :focus="true" v-model="searchValue" @cancel="cancel" @clear="clear"></uni-search-bar>
    <uni-list>
      <food-record-list-add-item v-for="(item, idx) in list" :key="idx" :title="item.name" :note="getNote(item)" @add="handleAdd(item)"></food-record-list-add-item>
      <uni-load-more :status="loadMoreStatus" @click-load-more="handleLoadMore"></uni-load-more>
    </uni-list>
    <uni-popup ref="popup" type="bottom" background-color="#fff" @change="change">
      <view class="popup-content">
        <view class="header">
          <uni-icons class="close-icon" type="closeempty" size="20" color="#666" @click="handlePopupClose"></uni-icons>
          <text class="title">{{ activeItem.name }}</text>
        </view>
        <view class="data-show">
          <view class="data-show-item">
            <text class="title">164千卡</text>
            <text class="value">1杯</text>
          </view>
          <view class="data-show-item">
            <text class="title">碳水</text>
            <text class="value">20克</text>
          </view>
          <view class="data-show-item">
            <text class="title">蛋白质</text>
            <text class="value">6克</text>
          </view>
          <view class="data-show-item">
            <text class="title">脂肪</text>
            <text class="value">7克</text>
          </view>
        </view>
        <view class="data-input">
          <view class="input-wrapper">
            <uni-easyinput v-model="inputValue" placeholder="请输入" :input-border="false" type="number" :focus="true" :style="{ font: '20px' }"></uni-easyinput>
          </view>
        </view>
        <view class="data-switch">
          <text class="data-switch-1" :class="{ 'active' : dataSwitchIndex === 0}" @click="handleDataSwitch(0)">杯</text>
          <text class="data-switch-2" :class="{ 'active' : dataSwitchIndex === 1}" @click="handleDataSwitch(1)">克</text>
        </view>
        <button class="confirm-btn" type="primary" @click="handleConfirm">确定</button>
      </view>
    </uni-popup>
  </view>
</template>
/**
 * 100克所含 碳水 蛋白质 脂肪 系数
 * 一杯200克, 2 * 系数
 * 多少克 / 100 * 系数
 * 点击确定的时候保存用户数据
 * 用户数据包括: 用户openid 食物id 食物数据
 */
<script>
  export default {
    data() {
      return {
        searchValue: '',
        currentPage: 1,
        pageSize: 10,
        total: 0,
        list: [],
        loadMoreStatus: 'more',
        show: false,
        inputValue: undefined,
        dataSwitchIndex: 0,
        activeItem: {}
      };
    },
    onLoad() {
      this.getEnergyList();
    },
    onPullDownRefresh() {
      this.currentPage = 1;
      this.getEnergyList().finally(() => {
        uni.stopPullDownRefresh();
      })
    },
    onReachBottom() {
      if (this.loadMoreStatus === 'more') {
        this.loadMoreStatus = 'loading';
        this.currentPage++;
        this.getEnergyList();
      }
    },
    methods: {
      async getEnergyList() {
        try{
          const res = await uni.$http.post('/foods/getEnergyList', {
            currentPage: this.currentPage,
            pageSize: this.pageSize
          });
          if (res.success) {
            this.total = res.resultData.total;
            if (this.currentPage === 1) {
              this.list = res.resultData.list;
            } else {
              this.list = [...this.list, ...res.resultData.list];
            }
          }
        }catch(e){
          //TODO handle the exception
        } finally {
          if (this.total > this.currentPage * this.pageSize) {
            this.loadMoreStatus = 'more';
          } else {
            this.loadMoreStatus = 'noMore';
          }
        }
      },
      handleLoadMore(e) {
        console.log('handle load more: ', e);
        const status = e.detail.status;
        if (status === 'more') {
          this.loadMoreStatus = 'loading';
          this.currentPage++;
          this.getEnergyList()
        }
      },
      getNote(item) {
        return `${item.energy}${item.unit}/${item.per_value}${item.per_unit}`;
      },
      search() {
       // TODO: 
      },
      cancel() {
        // TODO:
      },
      clear() {
        // TODO:
      },
      handleAdd(item) {
        this.open(item);
      },
      open(item) {
        this.activeItem = item;
        this.$refs.popup.open('bottom');
      },
      change(e) {
        this.show = e.show;
      },
      handlePopupClose() {
        this.$refs.popup.close();
      },
      handleDataSwitch(index) {
        this.dataSwitchIndex = index;
      },
      handleConfirm() {
        
      }
    },
  }
</script>

<style lang="scss">


.popup-content {
  height: 700rpx;
  display: flex;
  flex-direction: column;
  .header {
    position: relative;
    height: 100rpx;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #eee;
    .title {
      font-size: 14px;
      font-weight: 600;
      color: #333;
    }
    .close-icon {
      position: absolute;
      left: 20rpx;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  
  .data-show {
    height: 120rpx;
    display: flex;
    flex-direction: row;
    border-bottom: 1px solid #eee;
    &-item {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .title {
        font-size: 12px;
        color: #666;
      }
      .value {
        font-size: 12px;
        color: #666;
      }
    }
  }
  
  .data-input {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    .input-wrapper {
      width: 200rpx;
      margin-top: 30rpx;
      border-bottom: 1px solid #eee;
    }
  }
  
  .data-switch {
    margin-top: 10rpx;
    display: flex;
    flex-direction: row;
    &-1 {
      margin-left: 300rpx;
      font-size: 14px;
      color: #999;
    }
    &-2 {
      margin-left: 40rpx;
      font-size: 14px;
      color: #999;
    }
    .active {
      color: #333;
    }
  }
  
  .confirm-btn {
    margin-top: 60rpx;
    margin-left: 40rpx;
    margin-right: 40rpx;
    height: 88rpx;
  }
}


</style>
