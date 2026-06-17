import { createRouter, createWebHistory } from 'vue-router'
import LandingView from '../views/LandingView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import DashboardView from '../views/DashboardView.vue'
import AuthCallBackView from '@/views/AuthCallBackView.vue'
import { useAuthStore } from '../stores/auth.store'
import api from '../api/axios'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: LandingView,
      meta: {
        guestOnly: true,
      },
    },
    {
      path: '/login',
      component: LoginView,
      meta: {
        guestOnly: true,
      },
    },
    {
      path: '/register',
      component: RegisterView,
      meta: {
        guestOnly: true,
      },
    },
    {
      path: '/dashboard',
      component: DashboardView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/auth/callback',
      component: AuthCallBackView,
    },
  ],
})

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore()

  // halaman hanya untuk guest
  if (to.meta.guestOnly && authStore.accessToken) {
    return next('/dashboard')
  }

  if (!to.meta.requiresAuth) {
    return next()
  }

  if (authStore.accessToken) {
    if (!authStore.profileCompleted && to.path !== '/complete-profile') {
      return next('/complete-profile')
    }
  }

  try {
    const response = await api.post('/auth/refresh')

    authStore.setAccessToken(response.data.data.access_token)

    authStore.setUser(authStore.mapUserData(response.data.data))

    next()
  } catch (error) {
    authStore.logout()

    next('/login')
  }
})

export default router
