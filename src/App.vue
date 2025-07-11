<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainSideBar from "@/views/Sidebar/MainSidebar.vue";

</script>

<template>
  <div data-theme="cmyk">
    <MainSideBar />
    <RouterView />
  </div>
</template>
