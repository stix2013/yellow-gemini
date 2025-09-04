
import { setActivePinia, createPinia } from 'pinia'
import { useLocaleStore } from '../../app/stores/locale'
import { describe, it, expect, beforeEach } from 'vitest'

describe('Locale Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should have a default locale of "en"', () => {
    const store = useLocaleStore()
    expect(store.locale).toBe('en')
  })

  it('should set the locale', () => {
    const store = useLocaleStore()
    store.setLocale('fr')
    expect(store.locale).toBe('fr')
  })

  it('should get the locale', () => {
    const store = useLocaleStore()
    expect(store.getLocale).toBe('en')
  })
})
