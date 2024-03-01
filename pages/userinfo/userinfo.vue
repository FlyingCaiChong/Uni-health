<template>
  <view class="user-info-wrapper">
    <view class="user-info-list">
      <user-list-item title="用户ID">
        <template #right>{{ localUserInfo.userID }}</template>
      </user-list-item>
      <user-list-item title="性别">
        <template #right>
          <picker mode="selector" @change="bindGenderPickerChange" :range="genderRange" :value="genderIndex" >
            <view>{{ genderRange[genderIndex] }}</view>
          </picker>
        </template>
      </user-list-item>
      <user-list-item title="生日">
        <template #right>
          <picker mode="date" :value="birthday" :start="startDate" :end="endDate" @change="bindBirthdayChange" >
            <view>{{ birthday }}</view>
          </picker>
        </template>
      </user-list-item>
      <user-list-item title="身高">
        <template #right>
          <picker mode="selector" @change="bindHeightPickerChange" :range="heightRange" :value="heightIndex">
            <view>{{ heightRange[heightIndex] }}厘米</view>
          </picker>
        </template>
      </user-list-item>
      <user-list-item title="当前体重">
        <template #right>
          <picker mode="selector" @change="bindCurrentWeightPickerChange" :range="weightRange" :value="currentWeightIndex">
            <view>{{ weightRange[currentWeightIndex] }}公斤</view>
          </picker>
        </template>
      </user-list-item>
      <user-list-item title="目标体重">
        <template #right>
          <picker mode="selector" @change="bindTargetWeightPickerChange" :range="weightRange" :value="targetWeightIndex">
            <view>{{ weightRange[targetWeightIndex] }}公斤</view>
          </picker>
        </template>
      </user-list-item>
    </view>
    <button class="save-btn" type="primary" @click="handleSave">保存</button>
  </view>
</template>

<script>
  import { mapState, mapMutations } from 'vuex';
  import { generateUUID } from '@/utils/util.js'
  export default {
    data() {
      return {
        localUserInfo: {
          userID: null,
          gender: 0,
          birthday: '2000-01-01',
          height: 130,
          currentWeight: 30,
          targetWeight: 30
        },
        genderRange: ['男', '女'],
        genderIndex: 0,
        birthday: '2000-01-01',
        heightIndex: 0,
        heightRange: Array.from({length: 131}, (_, i) => i + 100),
        currentWeightIndex: 0,
        targetWeightIndex: 0,
        weightRange: Array.from({length: 1701}, (_, i) => (i + 300) / 10)
      };
    },
    computed: {
      ...mapState('m_user', ['openid']),
      startDate() {
        return this.getDate('start');
      },
      endDate() {
        return this.getDate('end');
      }
    },
    onLoad() {
      uni.$http.get('info/userinfo', {
        params: {
          openid: this.openid
        }
      }).then(res => {
        if (res.resultData) {
          this.localUserInfo = res.resultData;
          this.localUserInfo.currentWeight = res.resultData.current_weight;
          this.localUserInfo.targetWeight = res.resultData.target_weight;
          this.genderIndex = this.localUserInfo.gender === 0 ? 0 : 1;
          this.birthday = this.localUserInfo.birthday ?? '2000-01-01';
          const heightIndex = this.heightRange.findIndex(i => i === this.localUserInfo.height);
          this.heightIndex = heightIndex !== -1 ? heightIndex : 0;
          const currentWeightIndex = this.weightRange.findIndex(i => i === this.localUserInfo.currentWeight);
          this.currentWeightIndex = currentWeightIndex !== -1 ? currentWeightIndex : 0;
          const targetWeightIndex = this.weightRange.findIndex(i => i === this.localUserInfo.targetWeight);
          this.targetWeightIndex = targetWeightIndex !== -1 ? targetWeightIndex : 0;
          this.updateUserInfo(res.resultData);
        } else {
          this.localUserInfo.userID = 'HU' + generateUUID(6);
        }
      }).catch(err => {
        console.log('get user info err: ', err);
      });
    },
    methods: {
      ...mapMutations('m_user', ['updateUserInfo']),
      bindGenderPickerChange(e) {
        console.log('bindGenderPickerChange: ', e);
        this.genderIndex = e.detail.value;
        this.localUserInfo.gender = this.genderIndex;
      },
      bindBirthdayChange(e) {
        this.birthday = e.detail.value;
        this.localUserInfo.birthday = this.birthday;
      },
      bindHeightPickerChange(e) {
        this.heightIndex = e.detail.value;
        this.localUserInfo.height = this.heightRange[this.heightIndex];
      },
      bindCurrentWeightPickerChange(e) {
        this.currentWeightIndex = e.detail.value;
        this.localUserInfo.currentWeight = this.weightRange[this.currentWeightIndex];
      },
      bindTargetWeightPickerChange(e) {
        this.targetWeightIndex = e.detail.value;
        this.localUserInfo.targetWeight = this.weightRange[this.targetWeightIndex];
      },
      handleSave() {
        console.log('sss', this.localUserInfo);
        const requestBody = {
          openid: this.openid,
          userID: this.localUserInfo.userID,
          gender: this.localUserInfo.gender,
          birthday: this.localUserInfo.birthday,
          height: this.localUserInfo.height,
          currentWeight: this.localUserInfo.currentWeight,
          targetWeight: this.localUserInfo.targetWeight,
        }
        uni.$http.post('info/updateUserInfo', requestBody).then(res => {
          if (res.success) {
             uni.$toast.success('修改成功');
             uni.navigateBack();
          }
        }).catch(err => {
          console.log('update user info err', err);
           uni.$toast.failure('修改失败');
        })
      },
      getDate(type) {
        const date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        
        if (type === 'start') {
          year = year - 100;
        } else {
          year = year;
        }
        month = month > 9 ? month : '0' + month;
        day = day > 9 ? day : '0' + day;
        return `${year}-${month}-${day}`;
      }
    },
  }
</script>

<style lang="scss">

.user-info-wrapper {
  display: flex;
  flex-direction: column;
  
  .user-info-list {
    display: flex;
    flex-direction: column;
  }
  
  .save-btn {
    margin-top: 30rpx;
    width: 660rpx;
  }
}
</style>
