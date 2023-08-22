import Request from '../js_sdk/luch-request/luch-request/index.js';
import store from '../store/store.js'

const request = new Request({
  // baseURL: 'http://47.100.86.234',
  // baseURL: 'http://127.0.0.1:3001/health',
  baseURL: 'http://47.100.86.234/health',
  timeout: 60000
});

const showToastMessage = msg => {
  uni.showToast({
    title: msg,
    icon: 'error',
    duration: 1500,
    mask: true
  });
}

const errorHandler = error => {
  console.log('errorHandler: ', error);
  // TODO: 错误处理
};

[request].forEach(item => {
  // 请求拦截
  item.interceptors.request.use(config => {
    // 设置token
    const token = store.state.m_user.token;
    console.log('token: ', token);
    if (token) {
      config.header['Authorization'] = 'Bearer ' + token;
    }
    return config;
  }, errorHandler);
  
  // 响应拦截
  item.interceptors.response.use(response => {
    const { data } = response;
    if (data.status === 'complete') {
      return data;
    } else {
      console.log('sss', data);
      // TODO: 处理token失效跳转到登录
      showToastMessage(data.errorMesssage);
      return Promise.reject(data);
    }
  }, errorHandler);
})

export default request;