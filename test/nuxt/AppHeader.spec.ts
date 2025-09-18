import { describe, it, expect } from 'vitest'
import { mountSuspended, setupTest } from '@nuxt/test-utils/runtime'
import AppHeader from '../../app/components/AppHeader.vue'

// describe('AppHeader', async () => {
//   await setupTest()

//   it('renders the logo and title', async () => {
//     const wrapper = await mountSuspended(AppHeader)
//     const logo = wrapper.find('img[alt="Logo"]')
//     expect(logo.exists()).toBe(true)
//     expect(logo.attributes('src')).toBe('/icon.svg')
//     expect(wrapper.text()).toContain('Nuxt UI')
//   })

//   it('renders the GitHub button link', async () => {
//     const wrapper = await mountSuspended(AppHeader)
//     const githubLink = wrapper.find('a[target="_blank"]')
//     expect(githubLink.exists()).toBe(true)
//     expect(githubLink.attributes('href')).toBe('https://github.com/nuxt/ui')
//     // Check for the icon inside the link
//     expect(githubLink.find('span.i-simple-icons-github').exists()).toBe(true)
//   })

//   it('passes links to UHeader component', async () => {
//     const links = [
//       { label: 'Home', to: '/' },
//       { label: 'Getting Started', to: '/getting-started' }
//     ]
//     const wrapper = await mountSuspended(AppHeader, {
//       props: {
//         links
//       }
//     })

//     // Find the UHeader component and check its props
//     const uHeader = wrapper.findComponent({ name: 'UHeader' })
//     expect(uHeader.exists()).toBe(true)
//     expect(uHeader.props('links')).toEqual(links)
//   })
// })