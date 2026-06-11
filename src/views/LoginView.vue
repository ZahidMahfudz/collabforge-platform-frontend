<template>
  <div>
    <h1>Login</h1>

    <form @submit.prevent="SubmitLogin">
      <input v-model="email" placeholder="email" />

      <br />

      <input v-model="password" type="password" placeholder="password" />

      <br />

      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { login } from '../service/auth.service'
import { useAuthStore } from '../stores/auth.store'

const router = useRouter()
const authStore = useAuthStore()

const email = ref('')
const password = ref('')

async function SubmitLogin() {
  try {
    const result = await login({
      email: email.value,
      password: password.value,
    })

    authStore.setAccessToken(result.data.access_token)

    authStore.setUser(authStore.mapUserData(result.data))

    router.push('/dashboard')
  } catch (error) {
    console.error('Login failed:', error)
  }
}
</script>
