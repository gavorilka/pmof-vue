import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import {metricsMiddleware} from "@/router/middleware/metrics.middleware";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/program',
      name: 'program',
      component: () => import('@/views/ProgramView.vue')
    },
    {
      path: '/pro_goals',
      name: 'pro_goals',
      component: () => import('@/views/modules/GoalsView.vue')
    },
    {
      path: '/pro_content',
      name: 'pro_content',
      component: () => import('@/views/modules/ContentView.vue')
    },
    {
      path: '/pro_lessons',
      name: 'pro_lessons',
      component: () => import('@/views/modules/LessonsView.vue')
    },
    {
      path: '/pro_truth',
      name: 'pro_truth',
      component: () => import('@/views/modules/TruthView.vue')
    },
    {
      path: '/pro_partners',
      name: 'pro_partners',
      component: () => import('@/views/modules/PartnersView.vue')
    },
    {
      path: '/answers',
      name: 'answers',
      component: () => import('@/views/AnswersView.vue')
    }
  ]
})

router.beforeEach(metricsMiddleware)
export default router
