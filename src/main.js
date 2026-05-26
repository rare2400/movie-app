import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router/router.js'
import '@/assets/main.css'

// Create and mount the Vue application with the router
const app = createApp(App)
app.use(router)
app.mount('#app')
