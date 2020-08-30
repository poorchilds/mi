<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import storage from './storage'
export default {
  name: 'app',
  data() {
    return {
      res: {}
    }
  },
  created() {
    // storage.clear('goodid', 'goods')
    // 方式1
    // 使用本地的json文件  本地使用mock
    // this.axios.get('/mock/user/login.json').then(res => {
    //   this.res = res
    // })
    // 方式二
    // 本地引入mock, 他不会产生请求，在请求发送之前，被拦截了，
    this.axios.get('/user/login').then(res => {
      this.res = res
    })
  }
}
</script>

<style></style>
