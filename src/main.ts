import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import './index.css'
import { createClient } from 'villus'

const client= createClient({
    url:'http://localhost:8000'
})

createApp(App).use(router).use(client).mount('#app')
