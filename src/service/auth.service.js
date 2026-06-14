import api from '../api/axios'

export async function login(payload) {
  const response = await api.post('auth/login', payload)

  return response.data
}

export async function register(payload) {
  const response = await api.post('auth/register', payload)

  return response.data
}

export async function logout() {
  const response = await api.post('auth/logout')

  return response.data
}

export async function refreshToken() {
  const response = await api.post('auth/refresh')

  return response.data
}

export async function getFotoProfile() {
  const response = await api.get('/profile/avatar')

  return response.data
}
