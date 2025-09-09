import { setActivePinia } from 'pinia'
import { createTestingPinia } from '@pinia/testing'
import { useLocaleStore } from '../../app/stores/locale'
import { describe, it, expect, beforeEach, vi } from 'vitest'

describe('Locale Store', () => {
  beforeEach(() => {
    setActivePinia(createTestingPinia({
      createSpy: vi.fn,
      stubActions: false,
    }))
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

  it('should reflect locale changes in the getter', () => {
    const store = useLocaleStore()
    expect(store.getLocale).toBe('en')
    store.setLocale('de')
    expect(store.getLocale).toBe('de')
  })
})