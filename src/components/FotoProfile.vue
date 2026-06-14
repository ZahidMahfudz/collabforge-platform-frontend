<script setup>
import { ref, onMounted } from 'vue'
import api from '../api/axios'

const fotoUrl = ref('')

const fetchFoto = async () => {
  try {
    const response = await api.get('/profile/avatar')

    fotoUrl.value = response.data.data

    console.log('URL Foto:', fotoUrl.value)
  } catch (error) {
    console.error('Error fetching foto:', error)
  }
}

onMounted(() => {
  fetchFoto()
})
</script>

<template>
  <img v-if="fotoUrl" :src="fotoUrl" alt="Foto Profil" width="200" />
</template>
