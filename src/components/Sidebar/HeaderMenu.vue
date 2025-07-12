<script setup lang="ts">
import { ref } from 'vue'

const title = ref('Inventory System')
</script>

<template>
  <header class="bg-base-200 shadow">
    <div class="navbar container mx-auto">
      <div class="flex-1">
        <a class="btn btn-ghost text-xl">{{ title }}</a>
      </div>
      <div class="flex-none gap-2">
        <div class="dropdown dropdown-end">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle" @click="() => { }">
            <i class="fas fa-bell"></i>
            <span class="badge badge-sm badge-warning indicator-item">3</span>
          </div>
          <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>3 items will expire soon</a></li>
            <li><a>2 new items added</a></li>
          </ul>
        </div>
        <div class="dropdown dropdown-end">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
              <img src="https://api.dicebear.com/7.x/avataaars/svg" />
            </div>
          </div>
          <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Profile</a></li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>
