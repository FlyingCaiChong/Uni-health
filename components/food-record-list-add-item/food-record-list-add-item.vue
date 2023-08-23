<template>
  <uni-list-item :title="title" :note="note">
    <template #footer>
      <view class="slot-view">
        <uni-icons class="slot-image" type="plus-filled" size="20" color="#00DFA2" @click="handleAdd"></uni-icons>
      </view>
    </template>
  </uni-list-item>
</template>

<script>
  export default {
    name:"food-record-list-add-item",
    props: {
      title: {
        type: String,
        default: ''
      },
      note: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        
      };
    },
    methods: {
      handleAdd() {
        this.$emit('add');
      }
    },
  }
</script>

<style lang="scss">

.slot-view {
  display: flex;
  align-items: center;
}
</style>