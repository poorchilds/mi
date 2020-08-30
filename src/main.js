import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入环境变量的baseURL
import env from './env'
// 根据环境变量获取不同的baseURL地址
axios.defaults.baseURL = env.baseURL
// axios.defaults.baseURL = '/api' // 使用反向代理的方式
axios.defaults.timeout = 8000
axios.interceptors.response.use(response => {
  const res = response.data
  if (res.status === 0) {
    return res.data
  } else if (res.status === 10) {
    window.location.href = '/#/login'
    router.push('/login')
  } else {
    alert(res.msg)
  }
})
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
