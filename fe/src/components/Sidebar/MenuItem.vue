<template>
  <li>
    <details :open="isOpen">
      <summary
        class="flex justify-between items-center cursor-pointer text-base-content hover:bg-base-300 px-2 py-1 rounded-md"
        @click.prevent="handleClick" :class="{ 'bg-primary text-primary-content font-semibold': isActiveRoute }">
        <router-link v-if="item.route" :to="item.route" class="w-full">
          {{ item.title }}
        </router-link>
        <span v-else class="w-full">{{ item.title }}</span>

        <span v-if="hasChildren" class="ml-auto">
          ▶
        </span>
      </summary>

      <ul v-if="hasChildren" class="pl-4">
        <MenuItem v-for="child in item.children" :key="child.id" :item="child" />
      </ul>
    </details>
  </li>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import type { MenuItem as MenuItemType } from './MenuItem'

const props = defineProps<{ item: MenuItemType }>()

const isOpen = ref(false)
const hasChildren = computed(() => props.item.children.length > 0)

const route = useRoute()
const isActiveRoute = computed(() => {
  if (props.item.route && route.path === props.item.route) return true
  return props.item.children.some(checkRouteMatchDeep)
})

function checkRouteMatchDeep(child: MenuItemType): boolean {
  if (child.route && route.path === child.route) return true
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
  }
})
</script>
