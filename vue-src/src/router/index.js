import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        redirect: '/muti-video',
        children: [
            {
                path: '/muti-video',
                name: 'Muti-Video',
                component: () => import('../views/moudle/MultiScreenPlay.vue'),
            },
        ],
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue'),
    },
]

const router = new VueRouter({
    routes,
})

export default router
