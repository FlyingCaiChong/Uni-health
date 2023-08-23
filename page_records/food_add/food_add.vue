<template>
  <view>
    <uni-search-bar @confirm="search" :focus="true" v-model="searchValue" @cancel="cancel" @clear="clear"></uni-search-bar>
    <uni-list>
      <food-record-list-add-item v-for="(item, idx) in list" :key="idx" :title="item.name" :note="getNote(item)" @add="handleAdd"></food-record-list-add-item>
      <uni-load-more :status="loadMoreStatus" @click-load-more="handleLoadMore"></uni-load-more>
    </uni-list>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        searchValue: '',
        currentPage: 1,
        pageSize: 10,
        total: 0,
        list: [],
        loadMoreStatus: 'more'
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
      handleAdd() {
        // TODO:
      }
    },
  }
</script>

<style lang="scss">

</style>
