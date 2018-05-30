import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import AdminDashboard from '@/components/AdminDashboard'
import Companies from '@/components/Companies'
import store from '../store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/', component: Login
    },
    {
      path: '/admin_dashboard', component: AdminDashboard
    },
    {
      path: '/companies', component: Companies
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log("path: ", to.path)
  console.log("isLoggedIn: ", store.getters.isLoggedIn)
  if (to.path == '/') {
    if (store.getters.isLoggedIn == true) {
      next('admin_dashboard')
    } else {
      next()
    }
  } else if (store.getters.isLoggedIn == true) {
    next()
  } else {
    next('/')
  }
})

export default router
