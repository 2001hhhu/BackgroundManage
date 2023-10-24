import { createRouter, createWebHistory } from 'vue-router'
// import { useUserStore } from '../stores/modules/user'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/login', component: () => import('@/views/login/LoginPage.vue') },
    {
      path: '/',
      component: () => import('@/views/layout/LayoutContainer.vue'),
      redirect: '/article/manage',
      children: [
        {
          path: '/article/manage',
          component: () => import('@/views/article/ArticleChannel.vue')
        },
        {
          path: '/article/channel',
          component: () => import('@/views/article/ArticleManage.vue')
        },
        {
          path: '/article/channel',
          component: () => import('@/views/article/ArticleManage.vue')
        },
        {
          path: '/user/avatar',
          component: () => import('@/views/user/UserAvatar.vue')
        },
        {
          path: '/user/password',
          component: () => import('@/views/user/UserPassword.vue')
        }
      ]
    }
  ]
})

//登录访问拦截 默认直接放行
//根据返回值决定放行还是拦截
//返回值：
//  undefined 或 路劲对象 拦截到对应的地址
//  false 拦回from的地址
//  '/具体地址'
// router.beforeEach((to) => {
//   // const useStore = useUserStore()
//   // if (!useStore.token && to.path !== '/login') return 'login'
// })

export default router
