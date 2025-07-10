<template>
  <div>
    <Navbar />
    <div class="p-4">
      <h1 class="text-xl font-bold mb-2">Dashboard Admin</h1>
      <router-view />
    </div>
  </div>
</template>

<script setup>
import Navbar from '/src/components/Navbar.vue'
</script>