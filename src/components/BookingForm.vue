<template>
    <div class="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
        <div class="bg-white rounded-xl p-6 w-full max-w-md shadow-xl border border-[#e9cfc1]">
            <h3 class="text-xl font-bold mb-4 text-[#7c5e3c]">Form Booking Buku</h3>
            <form @submit.prevent="submitBooking" class="flex flex-col gap-3">
                <input v-model="form.nama" type="text" placeholder="Nama Peminjam" class="border rounded px-3 py-2"
                    required />
                <input v-model="form.nim" type="text" placeholder="NIM/NIS" class="border rounded px-3 py-2" required />
                <input v-model="form.tanggalPinjam" type="date" class="border rounded px-3 py-2" required />
                <input v-model="form.tanggalKembali" type="date" class="border rounded px-3 py-2" required />
                <div class="flex gap-2 mt-2">
                    <button type="submit"
                        class="bg-[#a98467] hover:bg-[#7c5e3c] text-white px-4 py-2 rounded shadow">Booking</button>
                    <button type="button" @click="$emit('close')"
                        class="bg-gray-300 hover:bg-gray-400 text-[#7c5e3c] px-4 py-2 rounded">Batal</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const props = defineProps({
    book: Object
})
const emit = defineEmits(['close', 'success'])

const form = ref({
    nama: '',
    nim: '',
    tanggalPinjam: '',
    tanggalKembali: ''
})

const submitBooking = async () => {
    try {
        await axios.post('http://localhost:3000/bookings', {
            ...form.value,
            bookId: props.book.id,
            bookTitle: props.book.title,
            status: 'pending'
        })
        emit('success')
        emit('close')
    } catch (e) {
        alert('Gagal booking buku!')
    }
}
</script>
