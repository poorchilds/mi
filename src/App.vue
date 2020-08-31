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

<style>
/* @import   ; */
body,
div,
p,
h1,
h2,
h3,
h4,
h5,
h6,
ul,
li,
dl,
dt,
a,
input,
button,
textarea,
select {
  margin: 0;
  padding: 0;
  outline: none;
}
html,
body {
  font-family: Helvetica Neue, Helvetica, Arial, Microsoft Yahei,
    Hiragino Sans GB, Heiti SC, WenQuanYi Micro Hei, sans-serif;
  color: #333333;
  background-color: #ffffff;
  min-width: 1226px;
  font-size: 12px;
}
a {
  text-decoration: none;
}
ul,
li {
  list-style: none;
}
input {
  font: normal;
}
input:focus,
a:focus {
  outline: none;
}
</style>
