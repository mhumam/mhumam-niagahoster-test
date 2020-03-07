import Vue from 'vue'
import Router from 'vue-router'
// import Customers from './views/Customers.vue'
import MainPage from './views/MainPage.vue'
import CustomerDetails from './views/CustomerDetails.vue'

Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
      redirect: '/customers'
    },
    {
      path: '/customers',
      name: 'customers',
      component: MainPage
    },
    {
      path: '/customerdetails/:id',
      name: 'customerdetails',
      component: CustomerDetails
    }
  ]
})
export default router
