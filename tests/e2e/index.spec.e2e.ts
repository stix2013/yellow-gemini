import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import App from '../../app/app.vue'

describe('App', async () => {
  it('renders the new landing page', async () => {
    const wrapper = await mountSuspended(App, { route: '/' })

    // Check for the hero title
    const h1 = wrapper.find('h1')
    expect(h1.text()).toContain('Build Your Next Idea Faster')

    // Check for the presence of a call-to-action button
    const button = wrapper.find('a[role="button"]')
    expect(button.text()).toContain('Get Started')
  })
})