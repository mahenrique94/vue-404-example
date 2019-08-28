import Vue from 'vue'
import Routes from './components/Routes.vue'
import { router } from './_config/router'

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(Routes)
}).$mount('#app')
