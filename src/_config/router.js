import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home'
import A from '../pages/A'
import NotFound from '../pages/NotFound'

const routes = [
    { component: Home, name: 'home', path: '/' },
    { component: A, name: 'a', path: '/a' },
    { component: NotFound, name: 'not-found', path: '*' },
]

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes
})

export { router }
