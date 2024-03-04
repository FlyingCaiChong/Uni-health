<template>
  <view>
    <uni-list v-if="waistList.length">
      <uni-list-item v-for="item in waistList" :key="item.id" :title="item.date" :right-text="item.waist" :show-arrow="true" :clickable="true" @click="onClickItem(item)"></uni-list-item>
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
        waistList: [],
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
      this.getWaistList();
    },
    onHide() {
      if (this.$refs.fab.isShow) {
        this.$refs.fab.close();
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
            url: '/page_records/waist_add/waist_add'
          });
        } else if (e.item.text === '统计') {
          uni.navigateTo({
            url: '/page_records/waist_statistics/waist_statistics'
          });
        }
      },
      onClickItem(item) {
        console.log('on click item', item);
        uni.navigateTo({
          url: `/page_records/waist_add/waist_add?item=${encodeURIComponent(JSON.stringify(item))}`
        });
      },
      async getWaistList() {
        // 获取体重数据列表
        const res = await uni.$http.post('waist/getWaists', {
          userID: this.userInfo.userID
        });
        if (res && res.resultData) {
          this.waistList = res.resultData.map(i => ({
            id: i.id,
            userID: i.userID,
            date: i.waist_date,
            waist: `${ i.waist }`
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