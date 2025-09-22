<script setup lang="ts">
import type { Module } from '~/types/module'

const q = ref('')
const { data: modules, pending } = await useAsyncData<Module[]>('modules', () => $fetch('/api/modules'))

const filteredModules = computed(() => {
  if (!q.value) {
    return modules.value
  }
  return modules.value?.filter(module => {
    return module.name.toLowerCase().includes(q.value.toLowerCase()) || module.description.toLowerCase().includes(q.value.toLowerCase())
  })
})
</script>

<template>
  <UContainer>
    <UPageHeader
      title="Nuxt Modules"
      description="Discover and search for Nuxt modules."
    />
    <UInput
      v-model="q"
      placeholder="Search for modules..."
      class="my-4"
    />
    <div
      v-if="pending"
      class="text-center"
    >
      Loading...
    </div>
    <div
      v-else
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      <div
        v-for="module in filteredModules"
        :key="module.name"
        class="p-4 border rounded-lg"
      >
        <h2 class="text-lg font-bold">
          {{ module.name }}
        </h2>
        <p class="text-gray-500">
          {{ module.description }}
        </p>
        <div class="mt-4">
          <a
            :href="module.website"
            target="_blank"
            class="text-primary"
          >Website</a>
          <a
            :href="module.github"
            target="_blank"
            class="ml-4 text-primary"
          >GitHub</a>
        </div>
      </div>
    </div>
  </UContainer>
</template>
