const app = Vue.createApp({
  data: () => ({
    basicPrice: 100
  }),
  computed: {
    taxIncludedPrice: {
      get: function() {
        return this.basicPrice* 1.1
      },
      set: function(value) {
        this.basicPrice = value / 1.1
      }
    }
  }
})
app.mount('#app')