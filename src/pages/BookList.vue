<template>
    <section class="w-full min-h-[60vh] py-10 bg-[#f5eee6] flex flex-col items-center">
        <h1 class="text-3xl md:text-4xl font-bold text-[#7c5e3c] mb-2">Daftar Buku</h1>
        <p class="mb-8 text-[#7c5e3c]">Berikut adalah daftar buku yang bisa dipinjam.</p>
        <div v-if="loading" class="text-[#a98467] text-lg">Memuat data buku...</div>
        <div v-else-if="error" class="text-red-500">{{ error }}</div>
        <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-6xl px-4">
            <div v-for="book in books" :key="book.id"
                class="bg-white rounded-xl shadow-lg p-5 flex flex-col border border-[#e9cfc1] hover:shadow-2xl transition-shadow duration-200 min-w-[200px] max-w-[240px] mx-auto">
                <div class="relative w-32 h-44 mb-3 flex items-center justify-center mx-auto">
                    <img :src="book.cover" :alt="book.title"
                        class="w-full h-full object-cover rounded-lg border border-[#e9cfc1] shadow-sm" />
                    <span v-if="!book.available"
                        class="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full shadow">Dipinjam</span>
                </div>
                <div class="flex flex-col flex-1 justify-between w-full">
                    <h2 class="font-bold text-lg text-[#7c5e3c] mb-1 text-center line-clamp-2">{{ book.title }}</h2>
                    <p class="text-[#a98467] text-sm mb-1 text-center">{{ book.author }}</p>
                    <div class="flex items-center justify-center gap-2 mb-2">
                        <span class="text-xs bg-[#e9cfc1] text-[#7c5e3c] px-2 py-0.5 rounded">{{ book.category }}</span>
                        <span class="text-xs text-[#a98467]">({{ book.year }})</span>
                    </div>
                    <div class="flex flex-col items-center gap-2 mt-2">
                        <span v-if="book.available" class="text-green-600 text-sm font-semibold mb-1">Tersedia</span>
                        <span v-else class="text-red-500 text-sm font-semibold mb-1">Dipinjam</span>
                        <button v-if="book.available" @click="openBooking(book)"
                            class="bg-[#a98467] hover:bg-[#7c5e3c] text-white text-xs font-semibold px-4 py-1 rounded transition-colors duration-200 shadow disabled:opacity-60 disabled:cursor-not-allowed">
                            Booking Buku
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <BookingForm v-if="showBooking" :book="selectedBook" @close="showBooking = false"
            @success="showNotif = true; fetchBooks()" />
        <div v-if="showNotif" class="fixed inset-0 flex items-center justify-center z-50">
            <div class="bg-white border border-[#e9cfc1] shadow-xl rounded-xl px-8 py-6 flex flex-col items-center">
                <svg class="w-16 h-16 text-green-500 mb-2" fill="none" stroke="currentColor" stroke-width="2"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p class="text-lg font-bold text-[#7c5e3c] mb-2">Buku berhasil di-booking!</p>
                <button @click="showNotif = false"
                    class="mt-2 bg-[#a98467] hover:bg-[#7c5e3c] text-white px-4 py-2 rounded">Tutup</button>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import BookingForm from '../components/BookingForm.vue'

const books = ref([])
const loading = ref(true)
const error = ref('')
const showBooking = ref(false)
const selectedBook = ref(null)
const showNotif = ref(false)

const fetchBooks = async () => {
    loading.value = true
    try {
        const res = await axios.get('http://localhost:3000/books')
        books.value = res.data
    } catch (err) {
        error.value = 'Gagal memuat data buku.'
    } finally {
        loading.value = false
    }
}

onMounted(fetchBooks)

const openBooking = (book) => {
    selectedBook.value = book
    showBooking.value = true
}
</script>
