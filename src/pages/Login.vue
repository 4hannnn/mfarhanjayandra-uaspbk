<template>
    <section class="w-full min-h-screen flex flex-col items-center justify-center bg-[#f5eee6] py-16">
        <div
            class="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full border border-[#e9cfc1] flex flex-col items-center">
            <h1 class="text-2xl md:text-3xl font-bold text-[#7c5e3c] mb-6">Login</h1>
            <form class="w-full flex flex-col gap-4" @submit.prevent="handleLogin">
                <input v-model="username" type="text" placeholder="Username"
                    class="border border-[#e9cfc1] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#a98467]" />
                <input v-model="password" type="password" placeholder="Password"
                    class="border border-[#e9cfc1] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#a98467]" />
                <button type="submit"
                    class="bg-[#a98467] hover:bg-[#7c5e3c] text-white font-semibold px-6 py-2 rounded shadow transition-colors duration-200"
                    :disabled="userStore.loading">
                    <span v-if="userStore.loading">Loading...</span>
                    <span v-else>Login</span>
                </button>
                <p v-if="userStore.error" class="text-red-500 text-sm text-center">{{ userStore.error }}</p>
            </form>
            <p class="mt-4 text-[#7c5e3c] text-sm">Belum punya akun? <router-link to="/register"
                    class="underline hover:text-[#a98467]">Register</router-link></p>
        </div>
    </section>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../store/user'

const username = ref('')
const password = ref('')
const userStore = useUserStore()
const router = useRouter()

const handleLogin = async () => {
    await userStore.login(username.value, password.value)
    if (userStore.isLoggedIn) {
        router.push('/')
    }
}
</script>
