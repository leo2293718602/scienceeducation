import { createRouter, createWebHistory } from 'vue-router'

import Main from '../pages/Main.vue'
import AboutCentre from '../pages/AboutCentre.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            redirect: 'Main',
        },
        {
            name: 'MainPage',
            path: '/Main',
            component: Main,
            meta: { breadcrumb: '首页' }
        },
        {
            name: 'AboutCentrePage',
            path: '/AboutCentre',
            component: AboutCentre,
            meta: { breadcrumb: '中心简介' }
        }
    ]
})

export default router
