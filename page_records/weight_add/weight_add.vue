<template>
  <view class="form-wrapper">
    <uni-forms ref="form" :rules="rules" :modelValue="formData">
      <uni-forms-item label="日期" name="date">
        <uni-datetime-picker type="date" v-model="formData.date"></uni-datetime-picker>
      </uni-forms-item>
      <uni-forms-item label="体重" name="weight">
        <uni-easyinput type="digit" v-model="formData.weight" placeholder="请输入体重"></uni-easyinput>
      </uni-forms-item>
      <button class="form-btn" type="primary" @click="submit">提交</button>
    </uni-forms>
  </view>
</template>

<script>
  import { mapState } from 'vuex';
  
  export default {
    data() {
      return {
        formData: {
          date: '',
          weight: ''
        },
        rules: {
          date: {
            rules: [{required: true, errorMessage: '请选择日期'}],
          },
          weight: {
            rules: [{required: true, errorMessage: '请输入体重'}]
          }
        }
      };
    },
    computed: {
      ...mapState('m_user', ['userInfo']),
    },
    methods: {
      submit() {
        this.$refs.form.validate().then(res => {
          console.log('表单数据信息: ', res, this.formData);
          this.addWeight();
        }).catch(err => {
          console.log('表单错误信息: ', err);
        })
      },
      async addWeight() {
        try{
          const res = await uni.$http.post('weight/addWeight', {
            userID: this.userInfo.userID,
            date: this.formData.date,
            weight: this.formData.weight
          });
          uni.navigateBack();
        }catch(e){
          //TODO handle the exception
        }
      }
    },
  }
</script>

<style lang="scss">
  .form-wrapper {
    margin: 0 20rpx;
    .form-btn {
      margin: 30rpx 30rpx;
    }
  }
</style>
