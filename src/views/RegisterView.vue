<script setup></script>

<template>
  <div>
    <h1>Register</h1>

    <form @submit.prevent="SubmitRegister">
      <input v-model="firstName" placeholder="first name" />

      <br />

      <input v-model="email" placeholder="email" />

      <br />

      <input v-model="password" type="password" placeholder="password" />

      <br />

      <button type="submit">Register</button>
    </form>
  </div>
</template>
