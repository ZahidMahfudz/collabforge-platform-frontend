<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div>
    <h1>Collab Forge Paltform</h1>

    <P>Ini adalah landing page dari platform</P>

    <RouterLink to="/login">Login</RouterLink>
    <br />
    <RouterLink to="/register">Register</RouterLink>
  </div>
</template>
