import AuthLayout from '@/components/layouts/AuthLayout.vue'
import MainLayout from '@/components/layouts/MainLayout.vue'
import { menuItems, type MenuItem } from '@/components/Sidebar/MenuItem';
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const modules = import.meta.glob('@/views/**/*.vue');

const getComponentPath = (path: string): string => {
  return path
    .split('/')
    .filter(p => p)
    .map(segment =>
      segment.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('')
    )
    .join('/');
};

export function generateRoutes(items: MenuItem[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = [];

  for (const item of items) {
    if (item.route) {
      const componentName = getComponentPath(item.route);
      // LANGKAH 2: Buat path file lengkap yang akan dicari di dalam 'modules'
      const componentPath = `/src/views/${componentName}View.vue`;

      // Cek apakah komponen ada di dalam peta 'modules'
      if (modules[componentPath]) {
        routes.push({
          path: item.route.substring(1), // Path relatif untuk children
          name: componentName.replace(/\//g, '-'),
          // LANGKAH 3: Gunakan komponen dari peta yang sudah dibuat Vite
          component: modules[componentPath],
        });
      } else {
        // Tambahkan peringatan jika file komponen tidak ditemukan, ini sangat membantu saat debugging
        console.warn(`Component not found for route '${item.route}'. Looked for: ${componentPath}`);
      }
    }

    // Rekursif untuk children (tidak ada perubahan di sini)
    if (item.children && item.children.length > 0) {
      routes.push(...generateRoutes(item.children));
    }
  }

  return routes;
}

const dynamicRoutes = generateRoutes(menuItems);

console.log(dynamicRoutes);

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
        ...dynamicRoutes,
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
router.beforeEach((to, _, next) => {
  const isAuthenticated = localStorage.getItem('token') // Cek autentikasi
  const publicPages = ['/auth/login'] // Halaman publik
  const authRequired = !publicPages.includes(to.path) // Cek apakah halaman memerlukan autentikasi

  if (authRequired && !isAuthenticated) {
    return next('/auth/login') // Redirect ke login jika tidak terautentikasi
  }

  next() // Lanjutkan ke rute berikutnya
})

export default router
