<template>
  <Navbar v-if="!$route.meta.hideNavbar" />
  <router-view />
  <Footer v-if="!$route.meta.hideNavbar" />
</template>

<script setup>
</script>
<script setup>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import { useRoute } from 'vue-router';
const $route = useRoute();
</script>