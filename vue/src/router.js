import Vue from 'vue'
import Router from 'vue-router'
import Library from '@/components/sample_1/Library'

Vue.use(Router)

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Library
    }
  ]
})
