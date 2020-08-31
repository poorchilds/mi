<template>
  <div class="nav-header">
    <div class="top-header">
      <div class="contener">
        <div class="le-nav">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">手机商城</a>
          <a href="javascript:;">XIAOMUI</a>
          <a href="javascript:;">云服务</a>
        </div>
        <div class="ri-nav">
          <a href="javascript:;">登录</a>
          <a href="javascript:;">用户名</a>
          <a href="javascript:;" class="cart">
            <span class="icon-cart"></span>购物车(0)</a
          >
        </div>
      </div>
    </div>
    <div class="log-haeder">
      <div class="contener">
        <div class="le-logo">
          <a href="/#/index"></a>
        </div>
        <div class="cen-menu">
          <div class="menu-item">
            <div class="item-title">小米手机</div>
            <div class="content">1111</div>
          </div>
          <div class="menu-item">
            <div class="item-title">RedMi红米</div>
            <div class="content">1111</div>
          </div>
          <div class="menu-item">
            <div class="item-title">小米电视</div>
            <div class="content">1111</div>
          </div>
        </div>
        <div class="ri-search">
          <input type="text" class="search-box" />
          <a href="javascript"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navheader',
  props: {},
  data() {
    return {}
  },
  methods: {},
  components: {},
  created() {}
}
</script>

<style scoped lang="less">
@import url('../style/scss/contener.less');
.nav-header {
  .top-header {
    height: 39px;
    width: 100%;
    background-color: #333;
    font-size: 14px;
    .contener {
      display: flex;
      justify-content: space-between;
      align-items: center;
      a {
        color: #b0b0b0;
        display: inline-block;
        line-height: 39px;
        margin-right: 17px;
      }
      .cart {
        margin: 0;
        width: 110px;
        color: #fff;
        display: inline-block;
        background-color: orange;
        text-align: center;
        span {
          display: inline-block;
          margin-right: 4px;
          width: 16px;
          height: 12px;
          background: url('/imgs/icon-cart-checked.png') no-repeat center;
          background-size: contain;
        }
      }
    }
  }
  .log-haeder {
    .contener {
      height: 112px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .le-logo {
        width: 55px;
        height: 55px;
        overflow: hidden;
        a {
          display: inline-block;
          width: 110px;
          height: 55px;
          // transition: all 0.3s;
          &::before {
            content: '';
            width: 55px;
            height: 55px;
            display: inline-block;
            transition: all 0.3s;
            background: #ff6600 url('/imgs/mi-logo.png') no-repeat center;
            background-size: 55px;
          }
          &::after {
            content: '';
            width: 55px;
            height: 55px;
            display: inline-block;
            background: #ff6600 url('/imgs/mi-home.png') no-repeat center;
            background-size: 55px;
          }
          &:hover:before {
            margin-left: -55px;
          }
        }
      }
      .cen-menu {
        margin-left: 200px;
        width: 643px;
        display: flex;
        .menu-item {
          cursor: pointer;
          margin-right: 20px;
        }
      }
      .ri-search {
        width: 319px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #e0e0e0;
        .search-box {
          border: 1px solid #ccc;
          box-sizing: border-box;
          width: 264px;
          height: 50px;
          border: none;
          font-size: 16px;
          padding-left: 6px;
          line-height: 50px;
        }
        a {
          display: inline-block;
          width: 18px;
          height: 18px;
          margin-left: 20px;
          background: url('/imgs/icon-search.png') no-repeat center;
          background-size: contain;
        }
      }
    }
  }
}
</style>
