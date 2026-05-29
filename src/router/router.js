import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import MovieListView from '@/views/MovieListView.vue'
import AssignmentView from '@/views/AssignmentView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [{
        path: "/",
        name: "hem",
        component: HomeView
    },
    {
        path: "/filmlista",
        name: "filmlista",
        component: MovieListView
    },
    {
        path: "/om-vue",
        name: "om vue",
        component: AssignmentView
    }]
})

export default router