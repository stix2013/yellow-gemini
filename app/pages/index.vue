
<script setup lang="ts">
import { useLocaleStore } from '~/stores/locale'

const localeStore = useLocaleStore()

useHead({
  title: 'HOME',
})
</script>

<template>
  <div>
    <h1>HOME</h1>
    <p>Current locale: {{ localeStore.locale }}</p>
  </div>
</template>
