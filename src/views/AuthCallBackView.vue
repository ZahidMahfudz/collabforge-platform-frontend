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

    const result = response.data.data

    authStore.setAccessToken(result.access_token)

    authStore.setUser(authStore.mapUserData(result))

    authStore.setProfileCompleted(result.profile_completed)

    if (result.profile_completed) {
      router.replace('/dashboard')
    } else {
      router.replace('/complete-profile')
    }

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
