<template>
    <section class="min-h-screen bg-[#f5eee6] py-16">
        <div
            class="bg-white rounded-2xl shadow-2xl p-8 max-w-2xl w-full border border-[#e9cfc1] flex flex-col items-center mb-8 mx-auto">
            <h1 class="text-3xl font-bold text-[#7c5e3c] mb-4">Admin Dashboard</h1>
            <p class="text-[#7c5e3c] text-lg mb-2">Selamat datang, <span class="font-semibold">{{
                userStore.user?.username }}</span>!</p>
            <p class="text-[#a98467]">Ini adalah halaman dashboard admin. Silakan kelola data buku, anggota, dan laporan
                di sini.</p>
        </div>
        <BookCrud />
        <BookingCrud />
    </section>
</template>

<script setup>
import { useUserStore } from '../../store/user'
import BookCrud from '../../components/admin/BookCrud.vue'
import BookingCrud from '../../components/admin/BookingCrud.vue'
const userStore = useUserStore()
</script>
