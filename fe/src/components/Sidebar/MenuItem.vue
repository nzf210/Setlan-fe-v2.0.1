<template>
  <ol>
    <details :open="isOpen">
      <summary
        class="custom-summary flex justify-between items-center cursor-pointer px-1 mx-0.5  py-1 rounded-md text-xs"
        @click.prevent="handleClick" :class="{
          'bg-primary text-primary-content font-bold': isActiveRoute,
          'hover:bg-primary-focus': isActiveRoute,
          'text-base-content hover:bg-base-200': !isActiveRoute
        }">
        <div class="flex items-center w-full">
          <!-- Hero Icon -->
          <component :is="item.icon" v-if="item.icon" class="h-4 w-4 mr-2 flex-shrink-0" :class="{
            'text-primary-content': isActiveRoute,
            'text-base-content': !isActiveRoute
          }" />
          <router-link v-if="item.route" :to="item.route" class="w-full block py-0"
            :class="{ 'pointer-events-none': hasChildren }">
            {{ item.title }}
          </router-link>
          <span v-else class="w-full block py-0">{{ item.title }}</span>
        </div>
        <span v-if="hasChildren" class="ml-auto transform transition-transform duration-200"
          :class="isOpen ? 'rotate-0' : '-rotate-90'">
          ▼
        </span>
      </summary>

      <ul v-if="hasChildren" class="pl-2 my-0.5">
        <MenuItem v-for="child in item.children" :key="child.id" :item="child" />
      </ul>
    </details>
  </ol>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import type { MenuItem as MenuItemType } from './MenuItem'

const props = defineProps<{ item: MenuItemType }>()

const isOpen = ref(false)
const hasChildren = computed(() => props.item.children && props.item.children.length > 0)

const route = useRoute()
const isActiveRoute = computed(() => {
  if (props.item.route && route.path === props.item.route) return true
  // Pastikan props.item.children ada sebelum memanggil .some
  return props.item.children?.some(checkRouteMatchDeep) ?? false
})

function checkRouteMatchDeep(child: MenuItemType): boolean {
  if (child.route && route.path === child.route) return true
  // Pastikan child.children ada sebelum memanggil .some
  return child.children?.some(checkRouteMatchDeep) ?? false
}

function handleClick() {
  if (hasChildren.value) {
    isOpen.value = !isOpen.value
  }
}

onMounted(() => {
  if (isActiveRoute.value) {
    isOpen.value = true
  }
})

watch(() => route.path, () => {
  if (isActiveRoute.value) {
    isOpen.value = true
  } else {
    // Opsional: menutup menu lain yang tidak aktif saat rute berubah
    // isOpen.value = false
  }
})
</script>

<style scoped>
/* Nonaktifkan indikator default browser */
summary.custom-summary {
  list-style: none;
  /* Menghilangkan marker default */
}

summary.custom-summary::-webkit-details-marker {
  display: none;
  /* Untuk browser Webkit (Chrome, Safari) */
}

summary.custom-summary::after {
  display: none;
  /* Pastikan pseudo-element tidak ditampilkan */
}

/* Perbaikan hover untuk link aktif */
.bg-primary.hover\:bg-primary-focus:hover {
  background-color: oklch(55% 0.21 273.11);
  /* Ganti dengan warna primary-focus Anda */
}

/* Perbaikan hover untuk link non-aktif */
.text-base-content.hover\:bg-regular:hover {
  background-color: oklch(55% 0.21 273.11);
  /* Ganti dengan warna base-200 Anda */
}
</style>
