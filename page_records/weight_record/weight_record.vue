<template>
  <view>
    <uni-list v-if="weightList.length">
      <uni-list-item v-for="item in weightList" :key="item.id" :title="item.date" :right-text="item.weight" :show-arrow="true" :clickable="true" @click="onClickItem(item)"></uni-list-item>
      <uni-load-more :status="loadMoreStatus" @click-load-more="handleLoadMore"></uni-load-more>
    </uni-list>
    <view v-else class="empty-wrapper">
      <image src="/static/common-icons/empty.png" class="empty-img" mode=""></image>
    </view>
    <uni-fab ref="fab" :pattern="pattern" :content="content"	horizontal="left" vertical="bottom" @fabClick="onFabClick" @trigger="onTrigger"></uni-fab>
  </view>
</template>

<script>
  import { mapState } from 'vuex';
  
  export default {
    data() {
      return {
        currentPage: 1,
        pageSize: 20,
        total: 0,
        loadMoreStatus: 'more',
        weightList: [],
        pattern: {
          color: '#7A7E83',
          backgroundColor: '#fff',
          selectedColor: '#F0B86E',
          buttonColor: '#F0B86E',
          iconColor: '#fff'
        },
        content: [
          {
            iconPath: '/static/common-icons/add.png',
            selectedIconPath: '/static/common-icons/add_active.png',
            text: '添加',
            active: true
          },
          {
            iconPath: '/static/common-icons/chart.png',
            selectedIconPath: '/static/common-icons/chart_active.png',
            text: '统计',
            active: true
          }
        ]
      };
    },
    computed: {
      ...mapState('m_user', ['userInfo']),
    },
    onShow() {
      this.getWeightList();
    },
    onHide() {
      if (this.$refs.fab.isShow) {
        this.$refs.fab.close();
      }
    },
    onPullDownRefresh() {
      this.currentPage = 1;
      this.getWeightList().finally(() => {
        uni.stopPullDownRefresh();
      })
    },
    onReachBottom() {
      if (this.loadMoreStatus === 'more') {
        this.loadMoreStatus = 'loading';
        this.currentPage++;
        this.getWeightList();
      }
    },
    methods: {
      onFabClick() {
        console.log('on fab click');
      },
      onTrigger(e) {
        console.log(e);
        // this.content[e.index].active = !e.item.active;
        if (e.item.text === '添加') {
          uni.navigateTo({
            url: '/page_records/weight_add/weight_add'
          });
        } else if (e.item.text === '统计') {
          uni.navigateTo({
            url: '/page_records/weight_statistics/weight_statistics'
          });
        }
      },
      onClickItem(item) {
        console.log('on click item', item);
        uni.navigateTo({
          url: `/page_records/weight_add/weight_add?item=${encodeURIComponent(JSON.stringify(item))}`
        });
      },
      async getWeightList() {
        try{
          // 获取体重数据列表
          const res = await uni.$http.post('weight/getWeights', {
            userID: this.userInfo.userID,
            currentPage: this.currentPage,
            pageSize: this.pageSize
          });
          if (res.success) {
            this.total = res.resultData.total;
            if (this.currentPage === 1) {
              this.weightList = res.resultData.list.map(i => ({
                id: i.id,
                userID: i.userID,
                date: i.weight_date,
                weight: `${ i.weight }`
              }));
            } else {
              this.weightList = [...this.weightList, ...(res.resultData.list.map(i => ({
                id: i.id,
                userID: i.userID,
                date: i.weight_date,
                weight: `${ i.weight }`
              })))];
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
          this.getWeightList()
        }
      },
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
