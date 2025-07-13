<template>
  <div class="drawer lg:drawer-open">
    <!-- Mobile Toggle Button -->
    <input id="sidebar-toggle" type="checkbox" class="drawer-toggle" />

    <div class="drawer-content flex flex-col min-h-screen">
      <!-- Header -->
      <HeaderMenu />

      <!-- Page content -->
      <main class="p-4 flex-grow bg-base-100">
        <router-view />
      </main>

      <!-- Footer -->
      <Footer />
    </div>

    <!-- Sidebar -->
    <div class="drawer-side">
      <label for="sidebar-toggle" class="drawer-overlay"></label>
      <aside class="w-64 bg-base-200 text-base-content min-h-screen">
        <ul class="menu p-4">
          <MenuItem v-for="item in items" :key="item.id" :item="item" />
        </ul>
      </aside>
    </div>
  </div>
</template>

<script setup lang="ts">
import HeaderMenu from './HeaderMenu.vue'
import Footer from './MainFooter.vue'
import { menuItems } from './MenuItem'
import MenuItem from './MenuItem.vue'

const items = menuItems
</script>
