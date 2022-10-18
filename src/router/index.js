import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {path: '/', component: () => import('@/pages/home/index.vue')},
    {path: '/aimer', component: () => import('@/pages/aimer.vue')},
    {path: '/potato', component: () => import('@/pages/potato.vue')},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
