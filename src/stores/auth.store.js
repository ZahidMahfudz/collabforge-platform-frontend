import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const accessToken = ref(null)
  const user = ref(null)
  const isAuthenticated = computed(() => !!accessToken.value)

  function setAccessToken(token) {
    accessToken.value = token
  }

  function setUser(userData) {
    user.value = userData
  }

  function logout() {
    accessToken.value = null
    user.value = null
  }

  function mapUserData(userData) {
    return {
      id: userData.id,
      firstName: userData.first_name,
      midName: userData.mid_name,
      lastName: userData.last_name,
      email: userData.email,
      username: userData.username,
    }
  }

  return { accessToken, user, isAuthenticated, setAccessToken, setUser, logout, mapUserData }
})
