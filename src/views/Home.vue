<template>
  <div class="home">
    home
    <NavHeader></NavHeader>
    <NavFooter></NavFooter>
    <router-view></router-view>
  </div>
</template>

<script>
import NavHeader from '../components/NavHeader'
import NavFooter from '../components/NavFooter'
export default {
  name: 'home',
  props: {},
  data() {
    return {}
  },
  methods: {},
  components: {
    NavHeader,
    NavFooter
  },
  created() {}
}
</script>

<style scoped lang="less"></style>
