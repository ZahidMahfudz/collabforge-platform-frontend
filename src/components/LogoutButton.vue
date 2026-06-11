<script setup>
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth.store'
import { logout } from '../service/auth.service'

const router = useRouter()
const authStore = useAuthStore()

async function handleLogout() {
  try {
    await logout()

    authStore.logout()

    router.push('/login')
  } catch (error) {
    console.error('Logout failed:', error)
  }
}
</script>

<template>
  <button @click="handleLogout">Logout</button>
</template>
