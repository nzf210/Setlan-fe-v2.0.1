<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getActiveMenuItems } from '@/views/Sidebar/MenuItem';
import Header from '@/views/Sidebar/HeaderMenu.vue';
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  ChevronDownIcon,
  ChevronRightIcon
} from '@heroicons/vue/24/solid';

const router = useRouter()

interface InventoryItem {
  name: string;
  category: string;
  quantity: number;
  condition: string;
}

const route = useRoute()
const menuItems = computed(() => getActiveMenuItems(route.path))
// Reactive state
const isCollapsed = ref<boolean>(false);
const activePath = ref<string>(router.currentRoute.value.path);
const expandedMenus = ref<string[]>([]);
const expandedSubMenus = ref<{ [key: string]: boolean }>({});
const hoveredMenu = ref<string>('');
const hoverTimeout = ref<number | null>(null);
const hoverMenuPosition = ref({ top: 0, left: 0 });
const hoverMenuRef = ref<HTMLElement | null>(null);

const items = ref<InventoryItem[]>([
  { name: 'Laptop', category: 'Elektronik', quantity: 10, condition: 'Baik' },
  { name: 'Meja', category: 'Furnitur', quantity: 20, condition: 'Sedang' },
  { name: 'Kursi', category: 'Furnitur', quantity: 15, condition: 'Baik' },
]);

// Methods
const toggleSidebar = (): void => {
  isCollapsed.value = !isCollapsed.value;
};

const navigateTo = (path: string): void => {
  activePath.value = path;
  router.push(path);
  updateExpandedState();

  if (isCollapsed.value) {
    hoveredMenu.value = '';
  }
};

// PERBAIKAN: Fungsi untuk mengupdate state expanded
const updateExpandedState = () => {
  expandedMenus.value = [];
  expandedSubMenus.value = {};

  // Temukan menu aktif dan expand parent-nya

};

const toggleMenu = (menuName: string, event: MouseEvent, path?: string): void => {
  if (isCollapsed.value) {
    const menu = menuItems.value.find(item => item.name === menuName);
    if (menu && menu.submenu) {
      const target = event.currentTarget as HTMLElement;
      const rect = target.getBoundingClientRect();
      hoverMenuPosition.value = {
        top: rect.top,
        left: rect.right + 10
      };
      hoveredMenu.value = menuName;
    } else if (path) {
      navigateTo(path);
    }
    return;
  }

  if (expandedMenus.value.includes(menuName)) {
    expandedMenus.value = expandedMenus.value.filter((m) => m !== menuName);
  } else {
    expandedMenus.value.push(menuName);
  }

  if (path) {
    navigateTo(path);
  }
};

const toggleSubMenu = (subMenuKey: string, path?: string): void => {
  expandedSubMenus.value[subMenuKey] = !expandedSubMenus.value[subMenuKey];

  if (path) {
    navigateTo(path);
  }
};

const handleMenuHover = (event: MouseEvent, menuName: string): void => {
  if (isCollapsed.value) {
    const target = event.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();

    hoverMenuPosition.value = {
      top: rect.top,
      left: rect.right + 10
    };

    hoveredMenu.value = menuName;

    if (hoverTimeout.value) {
      clearTimeout(hoverTimeout.value);
      hoverTimeout.value = null;
    }
  }
};

const handleMenuLeave = (): void => {
  if (isCollapsed.value) {
    hoverTimeout.value = setTimeout(() => {
      hoveredMenu.value = '';
    }, 300) as unknown as number;
  }
};

const cancelMenuLeave = (): void => {
  if (hoverTimeout.value) {
    clearTimeout(hoverTimeout.value);
    hoverTimeout.value = null;
  }
};

const handleClickOutside = (event: MouseEvent): void => {
  if (
    hoverMenuRef.value &&
    !hoverMenuRef.value.contains(event.target as Node) &&
    isCollapsed.value
  ) {
    hoveredMenu.value = '';
  }
};

const hoveredMenuDetails = computed(() => {
  return menuItems.value.find(item => item.name === hoveredMenu.value);
});



onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside);
  updateExpandedState();
});

onUnmounted(() => {
  document.removeEventListener('mousedown', handleClickOutside);
});

// PERBAIKAN: Pantau perubahan rute
watch(() => router.currentRoute.value.path, (newPath) => {
  activePath.value = newPath;
  updateExpandedState();
});
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <!-- Header -->
    <Header />
    <!-- Header -->

    <div class="flex flex-1">
      <!-- Sidebar -->
      <aside :class="[
        'bg-base-200 transition-all duration-300 relative',
        isCollapsed ? 'w-20' : 'min-w-64 max-w-64'
      ]">
        <div class="p-4 flex justify-between items-center">
          <h2 v-if="!isCollapsed" class="text-lg font-bold">Menu</h2>
          <button @click="toggleSidebar" class="btn btn-ghost btn-sm">
            <component class="h-5 w-5 text-primary"
              :is="isCollapsed ? ChevronDoubleRightIcon : ChevronDoubleLeftIcon" />
          </button>
        </div>

        <ul class="menu menu-md px-4">
          <li v-for="item in menuItems" :key="item.name" class="mb-1 relative group"
            @mouseenter="handleMenuHover($event, item.name)" @mouseleave="handleMenuLeave">
            <a :class="[
              'flex items-center',
              isCollapsed ? 'w-12' : '',
              item.isActive ? 'bg-primary text-primary-content my-1' : '',
            ]" @click="toggleMenu(item.name, $event, item.path)">
              <!-- Ikon utama -->
              <component :is="item.icon" class="h-5 w-5 flex-shrink-0" />

              <!-- Teks hanya ditampilkan saat tidak collapse -->
              <span v-if="!isCollapsed" class="ml-2 flex-1" :class="{ 'font-bold': item.isActive }">
                {{ item.name }}
              </span>

              <!-- Ikon indikator submenu -->
              <component v-if="item.submenu && !isCollapsed" class="h-4 w-4 ml-2"
                :is="expandedMenus.includes(item.name) ? ChevronDownIcon : ChevronRightIcon" />
            </a>

            <!-- Submenu (non-collapsed mode) -->
            <ul v-if="item.submenu && expandedMenus.includes(item.name) && !isCollapsed" class="ml-4">
              <li v-for="subItem in item.submenu" :key="subItem.name">
                <a :class="[
                  'flex justify-between',
                  subItem.isActive ? 'bg-secondary text-secondary-content my-1' : '',
                ]" @click="subItem.subSubMenu ?
                  toggleSubMenu(`${item.name}-${subItem.name}`, subItem.path) :
                  navigateTo(subItem.path || '')">
                  <span :class="{ 'font-bold': subItem.isActive }">
                    {{ subItem.name }}
                  </span>
                  <span v-if="subItem.subSubMenu" class="flex items-center">
                    <component class="h-3 w-3"
                      :is="expandedSubMenus[`${item.name}-${subItem.name}`] ? ChevronDownIcon : ChevronRightIcon" />
                  </span>
                </a>

                <!-- Sub-sub menu -->
                <ul v-if="subItem.subSubMenu && expandedSubMenus[`${item.name}-${subItem.name}`]" class="ml-4">
                  <li v-for="subSubItem in subItem.subSubMenu" :key="subSubItem.name">
                    <a @click="navigateTo(subSubItem.path ?? '')" :class="[
                      activePath === subSubItem.path ? 'bg-base-300 text-base-content' : '',
                      { 'font-bold': activePath === subSubItem.path }
                    ]">
                      {{ subSubItem.name }}
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>

        <!-- User Profile -->
        <div class="absolute bottom-0 w-full p-4 border-t border-base-300">
          <div class="flex items-center gap-2">
            <div class="avatar">
              <div class="w-10 rounded-full">
                <img src="https://api.dicebear.com/7.x/avataaars/svg" alt="User Avatar" />
              </div>
            </div>
            <div v-if="!isCollapsed">
              <p class="font-bold">John Doe</p>
              <p class="text-sm text-base-content/70">Administrator</p>
            </div>
          </div>
        </div>
      </aside>

      <!-- Portal untuk hover menu -->
      <teleport to="body">
        <div v-if="isCollapsed && hoveredMenuDetails && hoveredMenu" ref="hoverMenuRef"
          class="fixed bg-base-200 shadow-xl rounded-box z-50 w-64 max-h-[80vh] overflow-y-auto border border-base-300"
          :style="{
            top: `${hoverMenuPosition.top}px`,
            left: `${hoverMenuPosition.left}px`
          }" @mouseenter="cancelMenuLeave" @mouseleave="handleMenuLeave">
          <div class="p-2 font-bold border-b border-base-300">
            {{ hoveredMenuDetails.name }}
          </div>

          <ul class="menu menu-md p-2">
            <li v-for="subItem in hoveredMenuDetails.submenu" :key="subItem.name">
              <a :class="[
                subItem.isActive ? 'bg-secondary text-secondary-content my-1' : '',
              ]" @click="subItem.subSubMenu ?
                toggleSubMenu(`${hoveredMenuDetails.name}-${subItem.name}`, subItem.path) :
                navigateTo(subItem.path || '')">
                <span :class="{ 'font-bold': subItem.isActive }">
                  {{ subItem.name }}
                </span>
                <span v-if="subItem.subSubMenu" class="flex items-center">
                  <component class="h-3 w-3"
                    :is="expandedSubMenus[`${hoveredMenuDetails.name}-${subItem.name}`] ? ChevronDownIcon : ChevronRightIcon" />
                </span>
              </a>

              <!-- Sub-sub menu di popover -->
              <ul v-if="subItem.subSubMenu && expandedSubMenus[`${hoveredMenuDetails.name}-${subItem.name}`]"
                class="ml-4">
                <li v-for="subSubItem in subItem.subSubMenu" :key="subSubItem.name">
                  <a @click="navigateTo(subSubItem.path ?? '')" :class="[
                    activePath === subSubItem.path ? 'bg-base-300 text-base-content my-1' : '',
                    { 'font-bold bg-secondary text-secondary-content': activePath === subSubItem.path }
                  ]">
                    {{ subSubItem.name }}
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </teleport>

      <!-- Main Content -->
      <main class="flex-1 p-6 bg-base-100">
        <!-- Dashboard -->
        <div v-if="activePath === '/dashboard'" class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div class="card bg-base-200 shadow">
            <div class="card-body">
              <h3 class="card-title">Total Barang</h3>
              <p class="text-2xl font-bold">1,234</p>
            </div>
          </div>
          <div class="card bg-base-200 shadow">
            <div class="card-body">
              <h3 class="card-title">Transaksi Barang Masuk</h3>
              <p class="text-2xl font-bold">56</p>
            </div>
          </div>
          <div class="card bg-base-200 shadow">
            <div class="card-body">
              <h3 class="card-title">Akan Kadaluarsa</h3>
              <p class="text-2xl font-bold">3</p>
            </div>
          </div>
        </div>

        <!-- Daftar Barang -->
        <div v-if="activePath === '/items'" class="card bg-base-200 shadow">
          <div class="card-body">
            <h2 class="card-title">Daftar Barang</h2>
            <div class="overflow-x-auto">
              <table class="table">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Nama Barang</th>
                    <th>Kategori</th>
                    <th>Jumlah</th>
                    <th>Kondisi</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in items" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.category }}</td>
                    <td>{{ item.quantity }}</td>
                    <td>{{ item.condition }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- Halaman lainnya -->
        <div v-if="activePath === '/categories/permendagri'" class="card bg-base-200 shadow">
          <div class="card-body">
            <h2 class="card-title">Kategori Permendagri</h2>
            <!-- Konten halaman -->
          </div>
        </div>

        <div v-if="activePath === '/conditions'" class="card bg-base-200 shadow">
          <div class="card-body">
            <h2 class="card-title">Kondisi Barang</h2>
            <!-- Konten halaman -->
          </div>
        </div>
      </main>
    </div>

    <!-- Footer -->
    <footer class="footer footer-center p-4 bg-base-300 text-base-content">
      <div>
        <p>Copyright © 2025 - All rights reserved by Inventory System</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* Atur ulang style untuk mode collapse */
.w-20 .menu a {
  justify-content: center;
  padding: 0.75rem 0;
}

/* Ikon utama harus tetap muncul */
.w-20 .menu .h-5 {
  display: block !important;
  margin: 0 auto;
}

/* Sembunyikan teks dan indikator submenu saat collapse */
.w-20 .menu .ml-2,
.w-20 .menu .ml-4 {
  display: none;
}

/* Perbaikan untuk avatar */
.w-20 .avatar {
  margin: 0 auto;
}

.w-20 .absolute.bottom-0 {
  padding: 0.5rem;
}

.w-20 .absolute.bottom-0>div>div:last-child {
  display: none;
}

/* Animasi untuk menu hover */
.fixed {
  transition: opacity 0.2s ease, transform 0.2s ease;
  transform-origin: left top;
}

/* Teks tebal untuk menu aktif */
.font-bold {
  font-weight: 700;
}
</style>
