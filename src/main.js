import { createApp } from 'vue'
import App from './App.vue'
import './css/style.css'
import VueScrollTo from 'vue-scrollto'

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

const app = createApp(App)
app.use(VueScrollTo,{
    container: "body",
    duration: 500,
    easing: "ease",
    offset: 0,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
})
app.mount('#app')
