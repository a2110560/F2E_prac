import { createRouter, createWebHistory } from "vue-router";

const routes = [
    { path: '/', component: ()=>import("../App.vue") },
    { path: '/pdf', component: ()=>import("../components/pdf.vue") },
    { path: '/signature', component: ()=>import("../components/signature.vue") },
    { path: '/preview', component: ()=>import("../components/preview.vue") },
]
const router = createRouter({
    history: createWebHistory(),
    scrollBehavior: () => ({ top: 0 }),
    routes: routes
});
export default router;