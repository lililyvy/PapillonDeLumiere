import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/experience',
      name: 'experience',
      component: () => import('@/views/ExperienceView.vue')
    },
    {
      path: '/education',
      name: 'education',
      component: () => import('@/views/EducationView.vue')
    },
    {
      path: '/skills',
      name: 'skills',
      component: () => import('@/views/SkillsView.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('@/views/ProjectsView.vue')
    },
    {
      path: '/hobbies',
      name: 'Hobbies',
      component: () => import('@/views/HobbiesView.vue')
  },
  
    {
      path: '/weather',
      name: 'weather',
      component: () => import('@/views/WeatherView.vue')
    }
  ]
})

export default router