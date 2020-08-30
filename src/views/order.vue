<template>
  <div class="order">
    order
    <NavHeader></NavHeader>
    <NavFooter></NavFooter>
    <router-view></router-view>
  </div>
</template>

<script>
import NavHeader from '../components/NavHeader'
import NavFooter from '../components/NavFooter'
export default {
  name: 'order',
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
