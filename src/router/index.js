import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  linkActiveClass: "text-blue font-bold",
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: 'Home'
    },
    {
      path: '/:page',
      component: () => import(
        /* webpackChunkName: "layouts" */
        '@/layouts/Layout.vue'
      )
    },
  ]
})

export default router
