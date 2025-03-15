import { createRouter, createWebHistory } from 'vue-router'
import Index from '../components/Index.vue'
import TimeRiver from '../views/TimeRiver.vue'
import Blog from '../views/Blog.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Index
    },
    {
      path: '/time-river',
      name: 'timeRiver',
      component: TimeRiver
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    }
  ]
})

export default router 