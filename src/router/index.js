import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'
import Product from '../views/product'
import Detail from '../views/detail'
import Index from '../views/index'
import Cart from '../views/cart'
import Order from '../views/order'
import OrderList from '../views/orderList'
import OrderConfilm from '../views/orderConfilm'
import OrderPay from '../views/orderPay'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect: 'index',
    children: [
      {
        path: '/index',
        name: 'index',
        component: Index
      },
      {
        path: '/product/:id',
        name: 'product',
        component: Product
      },
      {
        path: '/detail/:id',
        name: 'detail',
        component: Detail
      }
    ]
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/order',
    name: 'order',
    component: Order,
    children: [
      {
        path: '/order/list',
        name: 'order-List',
        component: OrderList
      },
      {
        path: '/order/confilm',
        name: 'order-Confilm',
        component: OrderConfilm
      },
      {
        path: '/order/pay',
        name: 'order-Pay',
        component: OrderPay
      }
    ]
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */)
  // }
]

const router = new VueRouter({
  routes
})

export default router
