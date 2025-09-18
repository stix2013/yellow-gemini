import { defineConfig } from 'vitest/config'
import { defineVitestProject } from '@nuxt/test-utils/config'

export default defineConfig({
  test: {
    projects: [
      {
        test: {
          include: ['test/unit/**/*.{test,spec}.ts'],
          environment: 'node',
        },
      },
      await defineVitestProject({
        test: {
          include: ['test/nuxt/**/*.{test,spec}.ts'],
          environment: 'nuxt',
          environmentOptions:{
            nuxt: {
              domEnvironment: 'happy-dom',
            },
          },
        },
      }),
    ],
  },
})
