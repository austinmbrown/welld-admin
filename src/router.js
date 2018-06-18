import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/features/login/Login'
import AdminDashboard from '@/features/adminDashboard/AdminDashboard'
import Companies from '@/features/companies/Companies'
import CompaniesShow from '@/features/companies/CompaniesShow'
import CompaniesNew from '@/features/companies/CompaniesNew'
import CompaniesIndex from '@/features/companies/CompaniesIndex'
import store from './store.js'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/admin_dashboard',
      name: 'admin_dashboard',
      component: AdminDashboard
    },
    {
      path: '/companies',
      name: 'companies',
      component: Companies,
      children: [
        {
          path: '',
          name: 'index',
          component: CompaniesIndex
        },
        {
          path: 'new',
          name: 'new',
          component: CompaniesNew
        },
        {
          path: ':id',
          name: 'show',
          component: CompaniesShow
        }
      ]
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
