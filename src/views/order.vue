<template>
  <div class="home">
    <NavHeader></NavHeader>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import NavHeader from '../components/NavHeader'
import Footer from '../components/Footer'
export default {
  name: 'home',
  props: {},
  data() {
    return {}
  },
  methods: {},
  components: {
    NavHeader,
    Footer
  },
  created() {}
}
</script>

<style scoped lang="less"></style>
