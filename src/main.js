import '@/assets/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'

const app = createApp(App)

app.use(createPinia().use(persist))
app.use(createPinia())
app.use(router)
app.mount('#app')
