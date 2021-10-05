module.exports = {
  devServer: {
    port: 8080,
    proxy: {
      '/users': {
        target: 'http://localhost:3000',
        secure: false,
      },
      '/wines': {
        target: 'http://localhost:3000',
        secure: false,
      },
    },
  },
};



import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

const app = Vue.createApp(App)

App.use(VueRouter)

app.mount('#app')
