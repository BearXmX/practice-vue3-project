import { defineStore } from 'pinia'

const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),

  actions: {
    /** @description 递增count */
    increment() {
      this.count++
    },
  },

  getters: {
    doubleCount: state => state.count * 2,
  },
})

export default useCounterStore
