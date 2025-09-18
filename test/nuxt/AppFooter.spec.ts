// tests/components/AppFooter.nuxt.spec.ts
import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import AppFooter from '../../app/components/AppFooter.vue'

describe('AppFooter', async () => {
  it('can mount some component', async () => {
    const component = await mountSuspended(AppFooter)
    expect(component.text()).toMatchInlineSnapshot(
      '"Copyright © 2025"'
    )
  })
})