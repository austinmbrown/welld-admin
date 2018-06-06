import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/features/login/Login'
import AdminDashboard from '@/features/adminDashboard/AdminDashboard'
import Companies from '@/features/companies/Companies'
import CompaniesNew from '@/features/companies/CompaniesNew'
import CompaniesIndex from '@/features/companies/CompaniesIndex'
import store from './store.js'

Vue.use(Router)

const router = new Router({
  routes: [
    {path: '/',                component: Login },
    {path: '/admin_dashboard', component: AdminDashboard },
    {path: '/companies',       component: Companies,
      children: [
        {path: '',              component: CompaniesIndex},
        {path: 'new',           component: CompaniesNew}
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
