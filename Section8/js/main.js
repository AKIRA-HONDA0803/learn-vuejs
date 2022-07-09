const app = Vue.createApp({
  data: () => ({
   items: null,
   keyword: '',
   message: ''
  }),
  watch: {
    keyword: function(newKeyword, oldKeyword) {
      console.log(newKeyword)
      this.message = 'Waiting for you to stop typing...'
      this.debouncedGetAnswer()
    }
  },
  mounted: function() {
    // this.keyword = 'Javascript'
    // this.getAnswer()
    // 指定時間内に同じイベントが発生すると処理を実行しない
    // 発生しなければ処理を実行する　→APIの処理を間引くことができる
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 1000)
  },
  methods: {
    getAnswer: function() {
      if(this.keyword === '') {
        console.log('karamoji')
        this.items = null
        return
      }

      this.message = 'Loading...'
      const vm = this
      const params = { page:1, per_page:20, query: this.keyword }
      axios.get('https://qiita.com/api/v2/items', { params })
        .then(function(response) {
          // console.log(response)
          vm.items = response.data
        })
        .catch(function(error) {
          vm.message = 'Error!' + error
        })
        .finally(function() {
          vm.message = ''
        })
    }
  }
})
app.mount('#app')