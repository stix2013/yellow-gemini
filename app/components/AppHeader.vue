<script setup lang="ts">
  // Defines the structure for a navigation link.
  interface LinkMenu {
    label: string;
    to: string;
    icon?: string;
  }

  // Navigation links for the header.
  const links = ref<LinkMenu[]>([
        {
      label: 'Home',
      to: '/',
      icon: 'lucide:home'
    },
    {
      label: 'FAQ',
      to: '/faq',
      icon: 'lucide:help-circle'
    },
    {
      label: 'About',
      to: '/about',
      icon: 'lucide:info'
    }
  ]);
</script>
<template>
    <!-- Application Header -->
    <UHeader :links="links">
      <!-- Header: Left side -->
      <template #left>
        <div class="flex items-center">
          <img src="/icon.svg" class="h-8 w-8 mr-2" alt="Logo" />
          <span>Yellow</span>
        </div>
      </template>

      <!-- Header: Right side (Navigation) -->
      <template #right>
        <UButton v-for="link in links" color="primary" variant="ghost" :icon="link.icon" :to="link.to" :label="link.label"/>
      </template>
    </UHeader>
</template>
