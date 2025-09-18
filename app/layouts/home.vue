<template>
  <div>
    <header>
      <AppHeader />
    </header>
    <main>
      <slot />
    </main>
    <UFooter>
      <template #left>
        <p class="text-sm text-gray-500 dark:text-gray-400">
          Copyright © {{ new Date().getFullYear() }}
        </p>
      </template>
    </UFooter>
  </div>
</template>
