<script setup lang="ts">
const links = [{
  label: 'GitHub',
  to: 'https://github.com/nuxt/ui',
  icon: 'lucide:github'
}, {
  label: 'Twitter',
  to: 'https://twitter.com/nuxt_js',
  icon: 'lucide:twitter'
}]
</script>

<template>
  <UFooter>
    <template #left>
      <p class="text-sm text-gray-500 dark:text-gray-400">
        Copyright © {{ new Date().getFullYear() }}
      </p>
    </template>

    <template #right>
      <UButton v-for="link in links" :key="link.label" :to="link.to" target="_blank" color="gray" variant="ghost" :icon="link.icon" />
    </template>
  </UFooter>
</template>
