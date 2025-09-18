<script setup lang="ts">
const items = [{
  label: 'What is Nuxt UI?',
  content: 'Nuxt UI is a UI library for Nuxt.js that provides a set of accessible and themeable components.'
}, {
  label: 'How do I install it?',
  content: 'You can install Nuxt UI using your favorite package manager. For example, with npm, you would run `npm install @nuxt/ui`.'
}, {
  label: 'Where can I find the documentation?',
  content: 'The documentation for Nuxt UI is available at https://ui.nuxt.com.'
}]
</script>

<template>
  <UPage>
    <UPageHeader
      title="Frequently Asked Questions"
      description="Here are some of the most common questions we get."
    />
    <UPageBody>
      <UAccordion :items="items" />
    </UPageBody>
  </UPage>
</template>
