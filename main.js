
import { createApp } from 'vue'
import App from './src/App.vue'
import router from './src/router/index'
import { createPinia } from 'pinia'
import './src/style.css'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
