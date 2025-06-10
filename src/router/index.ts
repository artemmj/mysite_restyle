import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    { path: '/', component: () => import('@/views/HomeView.vue') },
    { path: '/about', component: () => import('@/views/AboutView.vue') },
    { 
        path: '/article/:id', 
        component: () => import('@/views/ArticleView.vue'),
        props: true
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
