import AuthLayout from '@/components/layouts/AuthLayout.vue'
import MainLayout from '@/components/layouts/MainLayout.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
    },
    {
      path: '/auth',
      component: AuthLayout,
      children: [
        {
          path: 'login',
          name: 'login',
          component: () => import('@/views/auth/LoginView.vue'),
        },
      ],
    },
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          component: () => import('@/views/Dashboard/MainDashboard.vue'),
        },
        {
          path: '/manajmen/items',
          name: 'daftar-barang',
          component: () => import('@/views/aset/asetLancar/MainAsetLancar.vue'),
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*',
      component: AuthLayout,
      children: [
        {
          path: '',
          name: 'not-found',
          component: () => import('@/views/404/NotFoundView.vue'),
        },
      ],
    },
  ],
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('token') // Contoh cek autentikasi
  const publicPages = ['/auth/login']
  const authRequired = !publicPages.includes(to.path)

  if (authRequired && isAuthenticated) {
    return next('/auth/login')
  }

  next()
})

export default router
