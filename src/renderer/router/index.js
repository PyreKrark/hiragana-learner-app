import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/train',
      name: 'train',
      component: require('@/components/LandingPage').default
    },
    {
      path: '/learn',
      name: 'learn',
      component: require('@/components/LearnPage').default
    },
    {
      path: '*',
      redirect: '/train'
    }
  ]
})
