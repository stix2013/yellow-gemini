
// tests/components/AppFooter.nuxt.spec.ts
import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import AppHeader from '../../app/components/AppHeader.vue'

describe('App Header Test', async () => {
  it('can mount some component', async () => {
    const component = await mountSuspended(AppHeader)
    expect(component.text()).toMatchInlineSnapshot(
      `"YellowHomeFAQAbout"`
    )

    const links = component.findAll('a')
    expect(links.length).toBeGreaterThan(0)
    expect(links[0].attributes('href')).toBe('/')
    
    const moduleLink = links.find(link => link.text().includes('Modules'))
    expect(moduleLink).toBeUndefined()
  })
})