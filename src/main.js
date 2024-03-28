import '@/assets/scss/styles.scss'
import * as bootstrap from 'bootstrap'

import { createApp } from 'vue'
import App from '@/App.vue'
import Router from '@/router'

const app = createApp(App)

app.use(Router)

Router.isReady().then(() => {
    app.mount('#app')
})
