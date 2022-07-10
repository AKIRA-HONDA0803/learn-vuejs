const helloComponent = {
  template: '<p>Hello!</p>'
}

const app = Vue.createApp({
  data: () => ({

  }),
  components: {
    'hello-component': helloComponent
  }
})

// app.component('hello-component', {
//   template: '<p>Hello!</p>'
// })

app.mount('#app')