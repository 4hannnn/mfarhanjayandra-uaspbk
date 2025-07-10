<template>
    <div class="w-full max-w-5xl mx-auto mt-8">
        <div class="flex justify-between items-center mb-4">
            <h2 class="text-2xl font-bold text-[#7c5e3c]">Kelola Booking Buku</h2>
        </div>
        <div v-if="error" class="text-red-500 mb-2">{{ error }}</div>
        <div v-if="loading" class="text-[#a98467] mb-2">Memuat data booking...</div>
        <table v-else class="w-full bg-white rounded-xl shadow border border-[#e9cfc1]">
            <thead>
                <tr class="bg-[#f5eee6] text-[#7c5e3c]">
                    <th class="py-2 px-3">Judul Buku</th>
                    <th class="py-2 px-3">Nama</th>
                    <th class="py-2 px-3">NIM/NIS</th>
                    <th class="py-2 px-3">Tanggal Pinjam</th>
                    <th class="py-2 px-3">Tanggal Kembali</th>
                    <th class="py-2 px-3">Status</th>
                    <th class="py-2 px-3">Aksi</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="booking in bookings" :key="booking.id" class="border-t border-[#e9cfc1]">
                    <td class="py-2 px-3">{{ booking.bookTitle }}</td>
                    <td class="py-2 px-3">{{ booking.nama }}</td>
                    <td class="py-2 px-3">{{ booking.nim }}</td>
                    <td class="py-2 px-3">{{ booking.tanggalPinjam }}</td>
                    <td class="py-2 px-3">{{ booking.tanggalKembali }}</td>
                    <td class="py-2 px-3">
                        <span
                            :class="booking.status === 'pending' ? 'text-yellow-500' : booking.status === 'approved' ? 'text-green-600' : 'text-red-500'">
                            {{ booking.status }}
                        </span>
                    </td>
                    <td class="py-2 px-3 flex gap-2">
                        <button @click="editBooking(booking)"
                            class="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded">Edit</button>
                        <button @click="deleteBooking(booking.id)"
                            class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">Hapus</button>
                    </td>
                </tr>
            </tbody>
        </table>

        <!-- Modal Edit Booking -->
        <div v-if="showEdit" class="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
            <div class="bg-white rounded-xl p-6 w-full max-w-md shadow-xl border border-[#e9cfc1]">
                <h3 class="text-xl font-bold mb-4 text-[#7c5e3c]">Edit Booking</h3>
                <form @submit.prevent="updateBooking" class="flex flex-col gap-3">
                    <input v-model="form.nama" type="text" placeholder="Nama Peminjam" class="border rounded px-3 py-2"
                        required />
                    <input v-model="form.nim" type="text" placeholder="NIM/NIS" class="border rounded px-3 py-2"
                        required />
                    <input v-model="form.tanggalPinjam" type="date" class="border rounded px-3 py-2" required />
                    <input v-model="form.tanggalKembali" type="date" class="border rounded px-3 py-2" required />
                    <select v-model="form.status" class="border rounded px-3 py-2">
                        <option value="pending">pending</option>
                        <option value="approved">approved</option>
                        <option value="rejected">rejected</option>
                    </select>
                    <div class="flex gap-2 mt-2">
                        <button type="submit"
                            class="bg-[#a98467] hover:bg-[#7c5e3c] text-white px-4 py-2 rounded shadow">Simpan</button>
                        <button type="button" @click="closeModal"
                            class="bg-gray-300 hover:bg-gray-400 text-[#7c5e3c] px-4 py-2 rounded">Batal</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const bookings = ref([])
const loading = ref(true)
const error = ref('')
const showEdit = ref(false)
const form = ref({
    nama: '',
    nim: '',
    tanggalPinjam: '',
    tanggalKembali: '',
    status: 'pending'
})
const editId = ref(null)

const fetchBookings = async () => {
    loading.value = true
    try {
        const res = await axios.get('http://localhost:3000/bookings')
        bookings.value = res.data
    } catch (e) {
        error.value = 'Gagal memuat data booking.'
    } finally {
        loading.value = false
    }
}

onMounted(fetchBookings)

const closeModal = () => {
    showEdit.value = false
    form.value = { nama: '', nim: '', tanggalPinjam: '', tanggalKembali: '', status: 'pending' }
    editId.value = null
}

const editBooking = (booking) => {
    showEdit.value = true
    form.value = { ...booking }
    editId.value = booking.id
}

const updateBooking = async () => {
    try {
        await axios.put(`http://localhost:3000/bookings/${editId.value}`, { ...form.value })
        closeModal()
        fetchBookings()
    } catch (e) {
        error.value = 'Gagal mengupdate booking.'
    }
}

const deleteBooking = async (id) => {
    if (!confirm('Yakin ingin menghapus booking ini?')) return
    try {
        await axios.delete(`http://localhost:3000/bookings/${id}`)
        fetchBookings()
    } catch (e) {
        error.value = 'Gagal menghapus booking.'
    }
}
</script>
