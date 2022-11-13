import { createRouter, createWebHistory } from "vue-router";

const routes = [
    { path: '/', component: ()=>import("../App.vue") },
    { path: '/intro', component: ()=>import("../components/intro.vue") },
    { path: '/timeline', component: ()=>import("../components/timeline.vue") },
    { path: '/scrolltrigger', component: ()=>import("../components/scrolltrigger.vue") },
    { path: '/once', component: ()=>import("../components/scrolltriggeronce.vue") },
    { path: '/multi', component: ()=>import("../components/scrolltriggerMulti.vue") },
]
const router = createRouter({
    history: createWebHistory(),
    scrollBehavior: () => ({ top: 0 }),
    routes: routes
});
export default router;