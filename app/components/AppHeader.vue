<script setup lang="ts">
  interface LinkMenu {
    label: string;
    to: string;
    icon?: string;
  }

  const links = ref<LinkMenu[]>([
        {
      label: 'Home',
      to: '/',
      icon: 'lucide:home'
    },
    {
      label: 'Features',
      to: '#features',
      // icon: 'lucide:home'
    },
    {
      label: 'Pricing',
      to: '#pricing'
    },
    {
      label: 'Testimonials',
      to: '#testimonials'
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
    <UHeader :links="links">
      <template #left>
        <div class="flex items-center">
          <img src="/icon.svg" class="h-8 w-8 mr-2" alt="Logo" />
          <span>Yellow</span>
        </div>
      </template>

      <template #right>
        <UButton v-for="link in links" color="primary" variant="ghost" :icon="link.icon" :to="link.to" :label="link.label"/>
      </template>
    </UHeader>
</template>
