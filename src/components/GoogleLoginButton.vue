<script setup>
function handleGoogleLogin() {
  window.location.href = 'http://localhost:1234/auth/google/login'
}
</script>

<template>
  <button @click="handleGoogleLogin">Continue With Google</button>
</template>
