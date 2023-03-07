import { createApp } from 'vue'
import App from './App.vue'
import { createClient } from 'villus'
import router from './router/routes'
import './index.css'


const client= createClient({
    url:'http://localhost:8000'
})

createApp(App).use(router).use(client).mount('#app')
