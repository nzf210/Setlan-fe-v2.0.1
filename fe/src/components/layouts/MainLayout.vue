<template>
  <div class="flex min-h-screen" data-theme="fantasy">
    <MainSideBar>
      <RouterView />
    </MainSideBar>
  </div>
</template>

<script setup lang="ts">
import MainSideBar from '@/components/Sidebar/MainSidebar.vue'
</script>
