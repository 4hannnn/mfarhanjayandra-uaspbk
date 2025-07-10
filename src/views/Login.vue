<template>
  <div class="h-screen flex justify-center items-center bg-gray-100">
    <div class="bg-white p-6 rounded shadow-md w-80">
      <h2 class="text-2xl mb-4 font-bold">Login</h2>
      <input
        v-model="username"
        type="text"
        placeholder="Username"
        class="w-full p-2 mb-2 border rounded"
        autocomplete="off"
      />
      <input
        v-model="password"
        type="password"
        placeholder="Password"
        class="w-full p-2 mb-4 border rounded"
        autocomplete="off"
      />
      <button
        @click="handleLogin"
        class="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 transition"
      >
        Masuk
      </button>
      <p v-if="error" class="text-red-600 mt-2">{{ error }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const error = ref('')

const router = useRouter()

function handleLogin() {
  error.value = ''
  if (username.value === 'admin' && password.value === 'password123') {
    // login sukses, redirect ke halaman admin buku
    router.push('/admin/books')
  } else {
    error.value = 'Username atau password salah!'
  }
}
</script>
