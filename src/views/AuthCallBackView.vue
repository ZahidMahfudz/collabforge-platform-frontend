<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import api from '@/api/axios'
import { useAuthStore } from '@/stores/auth.store'

const router = useRouter()
const authStore = useAuthStore()

onMounted(async () => {
  try {
    const response = await api.post('/auth/refresh')

    authStore.setAccessToken(response.data.data.access_token)

    authStore.setUser(authStore.mapUserData(response.data.data))

    router.replace('/dashboard')
  } catch (error) {
    console.error('Google login failed:', error)

    authStore.logout()

    router.replace('/login')
  }
})
</script>

<template>
  <div>
    <h1>Signing you in...</h1>
  </div>
</template>
