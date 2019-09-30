import Vue from 'vue'
import Router from 'vue-router'
import Library from '@/components/sample/Library'
import LibrarySlot from '@/components/slot_sample/Library.slot'
import LibraryEmit from '@/components/communicate_sample/Library.emit'

Vue.use(Router)

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Library
    },
    {
      path: '/slot',
      name: 'SlotSample',
      component: LibrarySlot
    },
    {
      path: '/comunication',
      name: 'CommunicateSample',
      component: LibraryEmit
    }
  ]
})
