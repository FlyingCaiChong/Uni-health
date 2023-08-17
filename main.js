
import request from './utils/request.js';
import store from './store/store.js';

uni.$http = request;

const defaultToastObj = {
  mask: true,
  duration: 2000
};

const toast = ['fail', 'success', 'error', 'exception'].reduce((prev, next) => {
  prev[next] = obj => {
    if (typeof obj === 'string') {
      uni.showToast({
        title: obj,
        icon: next,
        ...defaultToastObj
      });
    } else {
      uni.showToast({
        ...defaultToastObj,
        ...obj,
        icon: next
      });
    }
  };
  return prev;
}, {});

uni.$toast = toast;

// #ifndef VUE3
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  app.use(store)
  return {
    app
  }
}
// #endif