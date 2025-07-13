<script setup lang="ts">
import router from '@/router'
import { ref } from 'vue'

const title = ref('Inventory System')

const logout = () => {
  localStorage.removeItem('token')
  router.push('/auth/login')
}
</script>

<template>
  <header class="bg-base-200 shadow" style="height: 50px;"> <!-- Tinggi dikurangi -->
    <div class="navbar container mx-auto" style="min-height: 50px; padding: 0 1rem;">
      <!-- Padding dan min-height disesuaikan -->
      <div class="flex-1">
        <a class="btn btn-ghost text-xl" style="padding: 0.25rem 1rem;">{{ title }}</a>
        <!-- Padding tombol diperkecil -->
      </div>
      <div class="flex-none gap-2" style="gap: 0.5rem;"> <!-- Gap antara elemen dikurangi -->
        <div class="dropdown dropdown-end">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle"
            style="width: 32px; height: 32px; padding: 0;" @keydown.enter="() => { }" @click="() => { }">
            <!-- Ukuran tombol diperkecil -->
            <i class="fas fa-bell" style="font-size: 14px;"></i> <!-- Ukuran ikon diperkecil -->
            <span class="badge badge-sm badge-warning indicator-item" style="transform: scale(0.8);">3</span>
            <!-- Ukuran badge diperkecil -->
          </div>
          <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>3 items will expire soon</a></li>
            <li><a>2 new items added</a></li>
          </ul>
        </div>
        <div class="dropdown dropdown-end">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar"
            style="width: 32px; height: 32px; padding: 0;"> <!-- Ukuran tombol avatar diperkecil -->
            <div class="w-8 rounded-full" style="width: 28px; height: 28px;"> <!-- Ukuran avatar diperkecil -->
              <img src="https://api.dicebear.com/7.x/avataaars/svg" />
            </div>
          </div>
          <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Profile</a></li>
            <li><a>Settings</a></li>
            <li><button @click="logout">Logout</button></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>
