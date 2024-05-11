import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routerlists: RouteRecordRaw[]  =[
  
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routerlists,
})

export default router
