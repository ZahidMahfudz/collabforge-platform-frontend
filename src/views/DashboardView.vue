<script setup>
import ButtonLogout from '../components/LogoutButton.vue'
import FotoProfile from '../components/FotoProfile.vue'
import { useAuthStore } from '../stores/auth.store'

const authStore = useAuthStore()
</script>

<template>
  <div>
    <h1>Dashboard</h1>

    <p>Berhasil Login</p>
    <p>id: {{ authStore.user?.id }}f</p>
    <p>Email: {{ authStore.user?.email }}</p>
    <p>Username: {{ authStore.user?.username }}</p>
    <p>
      Nama Lengkap: {{ authStore.user?.firstName }} {{ authStore.user?.midName }}
      {{ authStore.user?.lastName }}
    </p>
    <p>Access Token: {{ authStore.accessToken }}</p>

    <FotoProfile />

    <router-link to="/"> Kembali ke Landing Page </router-link>

    <ButtonLogout />
  </div>
</template>
