import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import App from '../../app/app.vue'

describe('About Page', async () => {
  it('renders the About page correctly', async () => {
    const wrapper = await mountSuspended(App, { route: '/about' })

    const h1 = wrapper.find('h1')
    expect(h1.text()).toContain('About Us')

    const p = wrapper.find('p')
    expect(p.text()).toContain('This is the about page. We are a company that builds amazing things.')
  })
})
