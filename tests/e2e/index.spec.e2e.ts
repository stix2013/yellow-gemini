import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import App from '../../app/app.vue'

describe('App', async () => {
  it('renders the homepage', async () => {
    const wrapper = await mountSuspended(App, { route: '/' })
    const text = wrapper.find('main h1').text()
    expect(text).toContain('HOME')
  })
})