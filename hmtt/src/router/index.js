import Vue from 'vue'
import VueRouter from 'vue-router'
import { getToken } from '@/utils/token.js'
//导入组件(使用路由懒加载后这里就不需要了)
// import Login from '@/views/login.vue'
// import Layout from '@/views/Layout.vue'
// import Home from '@/views/home-user/Home.vue'
// import User from '@/views/home-user/user.vue'
// import Search from '@/views/search/index.vue'
// import searchResult from '@/views/search/searchResult.vue'
// import ArticleDetail from '@/views/ArticleDetail/index.vue'
// import editUser from '@/views/User/editUser.vue'
// import Chat from '@/views/chat/index.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/layout/home',
  },
  {
    path: '/login',
    component: () =>
      import(/* webpackChunkName: 'Login' */ '@/views/login.vue'),
  },
  {
    path: '/layout',
    component: () =>
      import(/* webpackChunkName: 'Layout' */ '@/views/Layout.vue'),
    redirect: '/layout/home',
    children: [
      {
        path: 'home',
        component: () =>
          import(/* webpackChunkName: 'Layout' */ '@/views/home-user/Home.vue'),
        meta: {
          scrollT: 0,
        },
      },
      {
        path: 'user',
        component: () =>
          import(/* webpackChunkName: 'Layout' */ '@/views/home-user/user.vue'),
      },
    ],
  },
  {
    path: '/search',
    component: () =>
      import(/* webpackChunkName: 'Search' */ '@/views/search/index.vue'),
  },
  {
    path: '/search_result/:kw',
    component: () =>
      import(
        /* webpackChunkName: 'Search' */ '@/views/search/searchResult.vue'
      ),
  },
  {
    path: '/detail',
    component: () =>
      import(
        /* webpackChunkName: 'Article' */ '@/views/ArticleDetail/index.vue'
      ),
  },
  {
    path: '/edit',
    component: () =>
      import(/* webpackChunkName: 'Edit' */ '@/views/User/editUser.vue'),
  },
  {
    path: '/chat',
    component: () =>
      import(/* webpackChunkName: 'Chat' */ '@/views/chat/index.vue'),
  },
]

const router = new VueRouter({
  routes,
})

//路由的全局前置守卫
router.beforeEach((to, from, next) => {
  if (to.path === '/login' && getToken()?.length > 0) {
    next('/layout/home')
  } else {
    next()
  }
})
// router.beforeEach((to, from, next) => {
//   if (to.path === 'login') {
//     next()
//   } else {
//     if (localStorage.token === '') {
//       next('/login')
//     } else {
//       next()
//     }
//   }
// })

export default router
