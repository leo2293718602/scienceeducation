import { createRouter, createWebHistory } from 'vue-router'

import Main from '../pages/Main.vue'
import AboutCentre from '../pages/AboutCentre.vue'
import CenterDynamics from '../pages/CenterDynamics.vue'
import CenterDynamicsDetail from '../pages/CenterDynamicsDetail.vue'

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
        },
        {
            name: 'CenterDynamicsPage',
            path: '/CenterDynamics',
            component: CenterDynamics,
            meta: { breadcrumb: '中心动态' }
        },
        {
           
            name:'CenterDynamicsDetailPage',
            path:'/CenterDynamics/:id',
            component:CenterDynamicsDetail,
            meta: { breadcrumb: '中心动态' }
        },
    ]
})

export default router
