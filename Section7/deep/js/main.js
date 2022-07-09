const app = Vue.createApp({
  data: () => ({
    colors: [
      { name: 'Red'},
      { name: 'Green'},
      { name: 'Blue'},
    ]
  }),
  watch: {
    colors: {
      handler: function(newValue, oldValue) {
        console.log('Update!')
      },
      // 監視しているプロパティーのネストの深さに関係なく変更を検知(ネストされたオブジェクトも監視する)
      deep: true
    }
  },
  methods: {
    onClick: function(event) {
      this.colors[1].name = 'White'
    }
  }
})
app.mount('#app')