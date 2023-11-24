import Vue from 'vue'
import App from './App.vue'
//import VueSocketIO from 'vue-socket.io'
//import SocketIO from "socket.io-client"


import './assets/main.css'

/*const socketOptions = {
    autoConnect: false,   
    path: "/a"  
}

Vue.use(
    new VueSocketIO({
      debug: true ,
      connection: SocketIO("127.0.0.1:8083", socketOptions)
    })
)*/

new Vue({
    el: '#app',
    render : h => h(App)
})