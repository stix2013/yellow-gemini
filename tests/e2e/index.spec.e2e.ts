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
    const button = wrapper.findComponent({ name: 'UButton', props: { label: 'Get Started' } })
    expect(button.exists()).toBe(true)

    // Check for the features section
    const featuresSection = wrapper.find('#features')
    expect(featuresSection.exists()).toBe(true)

    // Check for the pricing section
    const pricingSection = wrapper.find('#pricing')
    expect(pricingSection.exists()).toBe(true)

    // Check for the testimonials section
    const testimonialsSection = wrapper.find('#testimonials')
    expect(testimonialsSection.exists()).toBe(true)

    // Check for the faq section
    const faqSection = wrapper.find('#faq')
    expect(faqSection.exists()).toBe(true)
  })
})
