import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import App from '../../app/app.vue'

describe('FAQ Page', async () => {
  it('renders the FAQ page correctly', async () => {
    const wrapper = await mountSuspended(App, { route: '/faq' })

    const h1 = wrapper.find('h1')
    expect(h1.text()).toContain('Frequently Asked Questions')

    const accordion = wrapper.findComponent({ name: 'UAccordion' })
    expect(accordion.exists()).toBe(true)
  })
})
