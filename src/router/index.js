import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Credit from '../components/Credit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/credit',
      name: 'Credit',
      component: Credit
    },
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    }
  ]
})
