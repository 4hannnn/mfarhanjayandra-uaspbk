<template>
    <div class="relative group ml-4">
        <button
            class="flex items-center justify-center w-10 h-10 rounded-full bg-[#a98467] hover:bg-[#7c5e3c] transition-colors focus:outline-none">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <circle cx="12" cy="8" r="4" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 20a6 6 0 0112 0" />
            </svg>
        </button>
        <div
            class="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-[#e9cfc1] py-2 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto transition-all z-50">
            <template v-if="userStore.isLoggedIn">
                <div class="px-5 py-2 text-[#7c5e3c] font-semibold cursor-default flex items-center gap-2">
                    <svg class="w-5 h-5 text-[#a98467]" fill="none" stroke="currentColor" stroke-width="2"
                        viewBox="0 0 24 24">
                        <circle cx="12" cy="8" r="4" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 20a6 6 0 0112 0" />
                    </svg>
                    {{ userStore.user?.username }}
                </div>
                <router-link v-if="userStore.user?.role === 'admin'" to="/admin/dashboard"
                    class="block px-5 py-2 text-[#7c5e3c] hover:bg-[#f5eee6] hover:text-[#a98467] transition-colors">Dashboard
                    Admin</router-link>
                <button @click="logout"
                    class="block w-full text-left px-5 py-2 text-[#7c5e3c] hover:bg-[#f5eee6] hover:text-[#a98467] transition-colors">Logout</button>
            </template>
            <template v-else>
                <router-link to="/login"
                    class="block px-5 py-2 text-[#7c5e3c] hover:bg-[#f5eee6] hover:text-[#a98467] transition-colors">Login</router-link>
                <router-link to="/register"
                    class="block px-5 py-2 text-[#7c5e3c] hover:bg-[#f5eee6] hover:text-[#a98467] transition-colors">Register</router-link>
            </template>
        </div>
    </div>
</template>

<script setup>
import { useUserStore } from '../store/user'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const router = useRouter()

const logout = () => {
    userStore.logout()
    router.push('/')
}
</script>
