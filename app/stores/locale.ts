
import { defineStore } from 'pinia'

export const useLocaleStore = defineStore('locale', {
  state: () => ({
    locale: 'en',
  }),
  actions: {
    setLocale(newLocale: string) {
      this.locale = newLocale
    },
  },
})
