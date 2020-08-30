<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import storage from './storage'
export default {
  name: 'app',
  created() {
    storage.clear('goodid', 'goods')
  }
}
</script>

<style></style>
