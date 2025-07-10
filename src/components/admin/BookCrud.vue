<template>
    <div class="w-full max-w-5xl mx-auto mt-8">
        <div class="flex justify-between items-center mb-4">
            <h2 class="text-2xl font-bold text-[#7c5e3c]">Kelola Buku</h2>
            <button @click="showAdd = true"
                class="bg-[#a98467] hover:bg-[#7c5e3c] text-white px-4 py-2 rounded shadow">Tambah Buku</button>
        </div>
        <div v-if="error" class="text-red-500 mb-2">{{ error }}</div>
        <div v-if="loading" class="text-[#a98467] mb-2">Memuat data buku...</div>
        <table v-else class="w-full bg-white rounded-xl shadow border border-[#e9cfc1]">
            <thead>
                <tr class="bg-[#f5eee6] text-[#7c5e3c]">
                    <th class="py-2 px-3">Judul</th>
                    <th class="py-2 px-3">Penulis</th>
                    <th class="py-2 px-3">Tahun</th>
                    <th class="py-2 px-3">Kategori</th>
                    <th class="py-2 px-3">Status</th>
                    <th class="py-2 px-3">Aksi</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="book in books" :key="book.id" class="border-t border-[#e9cfc1]">
                    <td class="py-2 px-3">{{ book.title }}</td>
                    <td class="py-2 px-3">{{ book.author }}</td>
                    <td class="py-2 px-3">{{ book.year }}</td>
                    <td class="py-2 px-3">{{ book.category }}</td>
                    <td class="py-2 px-3">
                        <span :class="book.available ? 'text-green-600' : 'text-red-500'">
                            {{ book.available ? 'Tersedia' : 'Dipinjam' }}
                        </span>
                    </td>
                    <td class="py-2 px-3 flex gap-2">
                        <button @click="editBook(book)"
                            class="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded">Edit</button>
                        <button @click="deleteBook(book.id)"
                            class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">Hapus</button>
                    </td>
                </tr>
            </tbody>
        </table>

        <!-- Modal Tambah/Edit Buku -->
        <div v-if="showAdd || showEdit"
            class="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
            <div class="bg-white rounded-xl p-6 w-full max-w-md shadow-xl border border-[#e9cfc1]">
                <h3 class="text-xl font-bold mb-4 text-[#7c5e3c]">{{ showAdd ? 'Tambah Buku' : 'Edit Buku' }}</h3>
                <form @submit.prevent="showAdd ? addBook() : updateBook()" class="flex flex-col gap-3">
                    <input v-model="form.title" type="text" placeholder="Judul Buku" class="border rounded px-3 py-2"
                        required />
                    <input v-model="form.author" type="text" placeholder="Penulis" class="border rounded px-3 py-2"
                        required />
                    <input v-model.number="form.year" type="number" placeholder="Tahun" class="border rounded px-3 py-2"
                        required />
                    <input v-model="form.category" type="text" placeholder="Kategori" class="border rounded px-3 py-2"
                        required />
                    <input v-model="form.cover" type="text" placeholder="URL Cover" class="border rounded px-3 py-2"
                        required />
                    <div class="flex items-center gap-2">
                        <input v-model="form.available" type="checkbox" id="available" />
                        <label for="available" class="text-[#7c5e3c]">Tersedia</label>
                    </div>
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

const books = ref([])
const loading = ref(true)
const error = ref('')
const showAdd = ref(false)
const showEdit = ref(false)
const form = ref({
    title: '',
    author: '',
    year: '',
    category: '',
    cover: '',
    available: true
})
const editId = ref(null)

const fetchBooks = async () => {
    loading.value = true
    try {
        const res = await axios.get('http://localhost:3000/books')
        books.value = res.data
    } catch (e) {
        error.value = 'Gagal memuat data buku.'
    } finally {
        loading.value = false
    }
}

onMounted(fetchBooks)

const closeModal = () => {
    showAdd.value = false
    showEdit.value = false
    form.value = { title: '', author: '', year: '', category: '', cover: '', available: true }
    editId.value = null
}

const addBook = async () => {
    try {
        await axios.post('http://localhost:3000/books', { ...form.value })
        closeModal()
        fetchBooks()
    } catch (e) {
        error.value = 'Gagal menambah buku.'
    }
}

const editBook = (book) => {
    showEdit.value = true
    form.value = { ...book }
    editId.value = book.id
}

const updateBook = async () => {
    try {
        await axios.put(`http://localhost:3000/books/${editId.value}`, { ...form.value })
        closeModal()
        fetchBooks()
    } catch (e) {
        error.value = 'Gagal mengupdate buku.'
    }
}

const deleteBook = async (id) => {
    if (!confirm('Yakin ingin menghapus buku ini?')) return
    try {
        await axios.delete(`http://localhost:3000/books/${id}`)
        fetchBooks()
    } catch (e) {
        error.value = 'Gagal menghapus buku.'
    }
}
</script>
