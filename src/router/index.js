import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/Login')
  },
    {
      path: '/homePage',
      name: 'homepage',
      component: () => import('../views/HomePage'),
      children:[
        {
          path:'',
          component: () => import('../components/ChatList')
        },
        {
          path: 'ChatList',
          component: () => import('../components/ChatList')
        },
        {
          path: 'FriendList',
          component: () => import('../components/FriendList')
        }
      ]
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
