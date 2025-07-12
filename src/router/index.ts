import AuthLayout from '@/components/layouts/AuthLayout.vue'
import MainLayout from '@/components/layouts/MainLayout.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/dashboard', // Redirect ke dashboard
    },
    {
      path: '/auth', // Path auth
      component: AuthLayout,
      children: [
        {
          path: 'login', // Path relatif
          name: 'login',
          component: () => import('@/views/auth/LoginView.vue'),
        },
      ],
    },
    {
      path: '/', // Path utama
      component: MainLayout,
      children: [
        {
          path: 'dashboard', // Path relatif
          name: 'dashboard',
          component: () => import('@/views/Dashboard/MainDashboard.vue'),
        },
        {
          path: 'manajmen/items', // Path relatif
          name: 'daftar-barang',
          component: () => import('@/views/aset/asetLancar/MainAsetLancar.vue'),
        },
      ],
    },
    {
      path: '/:pathMatch(.*)*', // Rute wildcard untuk not found
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

// Middleware untuk autentikasi
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('token') // Cek autentikasi
  const publicPages = ['/auth/login'] // Halaman publik
  const authRequired = !publicPages.includes(to.path) // Cek apakah halaman memerlukan autentikasi

  if (authRequired && !isAuthenticated) {
    return next('/auth/login') // Redirect ke login jika tidak terautentikasi
  }

  next() // Lanjutkan ke rute berikutnya
})

export default router
