<template>
    <section class="w-full min-h-screen flex flex-col items-center justify-center bg-[#f5eee6] py-16">
        <div
            class="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full border border-[#e9cfc1] flex flex-col items-center">
            <h1 class="text-2xl md:text-3xl font-bold text-[#7c5e3c] mb-6">Register</h1>
            <form class="w-full flex flex-col gap-4" @submit.prevent="handleRegister">
                <input v-model="username" type="text" placeholder="Username"
                    class="border border-[#e9cfc1] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#a98467]" />
                <input v-model="email" type="email" placeholder="Email"
                    class="border border-[#e9cfc1] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#a98467]" />
                <input v-model="password" type="password" placeholder="Password"
                    class="border border-[#e9cfc1] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#a98467]" />
                <button type="submit"
                    class="bg-[#a98467] hover:bg-[#7c5e3c] text-white font-semibold px-6 py-2 rounded shadow transition-colors duration-200">Register</button>
            </form>
            <p v-if="success" class="text-green-600 mt-2">Registrasi berhasil! Silakan login.</p>
            <p v-if="error" class="text-red-500 mt-2">{{ error }}</p>
            <p class="mt-4 text-[#7c5e3c] text-sm">Sudah punya akun? <router-link to="/login"
                    class="underline hover:text-[#a98467]">Login</router-link></p>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const username = ref('')
const email = ref('')
const password = ref('')
const error = ref('')
const success = ref(false)
const router = useRouter()

const handleRegister = async () => {
  error.value = ''
  success.value = false
  // Validasi field kosong
  if (!username.value || !email.value || !password.value) {
    error.value = 'Semua field wajib diisi.'
    return
  }
  try {
    // Cek username/email unik
    const res = await axios.get('http://localhost:3000/users', {
      params: { username: username.value }
    })
    if (res.data.length > 0) {
      error.value = 'Username sudah digunakan.'
      return
    }
    const res2 = await axios.get('http://localhost:3000/users', {
      params: { email: email.value }
    })
    if (res2.data.length > 0) {
      error.value = 'Email sudah digunakan.'
      return
    }
    // Register user baru
    await axios.post('http://localhost:3000/users', {
      username: username.value,
      email: email.value,
      password: password.value,
      role: 'user'
    })
    success.value = true
    // Reset form
    username.value = ''
    email.value = ''
    password.value = ''
    // Redirect ke login setelah 1.5 detik
    setTimeout(() => router.push('/login'), 1500)
  } catch (e) {
    error.value = 'Registrasi gagal. Coba lagi.'
  }
}
</script>
