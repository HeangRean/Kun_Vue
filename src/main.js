import './assets/main.css'
import './assets/fonts.css'
import './assets/css/style.css'
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";


import { createApp } from 'vue'
import App from './App.vue'
import '/src/index.css'
import router from './router'
import store from './store'; // Import the Vuex store

const app = createApp(App)

app.use(router)
app.use(store); // Use the store

app.mount('#app')

