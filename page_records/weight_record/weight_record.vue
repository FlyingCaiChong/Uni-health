<template>
  <view>
    <uni-list v-if="weightList.length">
      <uni-list-item v-for="item in weightList" :key="item.id" :title="item.date" :right-text="item.weight" :show-arrow="true" :clickable="true" @click="onClickItem(item)"></uni-list-item>
    </uni-list>
    <view v-else class="empty-wrapper">
      <image src="/static/common-icons/empty.png" class="empty-img" mode=""></image>
    </view>
    <uni-fab :pattern="pattern"	horizontal="left" vertical="bottom" @fabClick="onFabClick"></uni-fab>
  </view>
</template>

<script>
  import { mapState } from 'vuex';
  
  export default {
    data() {
      return {
        weightList: [],
        pattern: {
          color: '#7A7E83',
          backgroundColor: '#fff',
          selectedColor: '#F0B86E',
          buttonColor: '#F0B86E',
          iconColor: '#fff'
        },
      };
    },
    computed: {
      ...mapState('m_user', ['userInfo']),
    },
    onShow() {
      this.getWeightList();
    },
    methods: {
      onFabClick() {
        console.log('on fab click');
        uni.navigateTo({
          url: '/page_records/weight_add/weight_add'
        });
      },
      onClickItem(item) {
        console.log('on click item', item);
        uni.navigateTo({
          url: `/page_records/weight_add/weight_add?item=${encodeURIComponent(JSON.stringify(item))}`
        });
      },
      async getWeightList() {
        // 获取体重数据列表
        const res = await uni.$http.post('weight/getWeights', {
          userID: this.userInfo.userID
        });
        if (res && res.resultData) {
          this.weightList = res.resultData.map(i => ({
            id: i.id,
            userID: i.userID,
            date: i.weight_date,
            weight: `${ i.weight }`
          }));
        }
      }
    },
  }
</script>

<style lang="scss">
  .empty-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    .empty-img {
      margin: 0 auto;
      margin-top: 200rpx;
      width: 256rpx;
      height: 256rpx;
    }
  }
</style>
