
import { defineStore } from 'pinia'

export const useLocaleStore = defineStore('locale', {
  state: () => ({
    locale: 'en',
  }),
  getters: {
    getLocale: state => state.locale,
  },
  actions: {
    setLocale(newLocale: string) {
      this.locale = newLocale
    },
  },
})
