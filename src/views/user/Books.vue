<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Data Buku</h1>
    <table class="w-full border border-gray-300">
      <thead class="bg-green-600 text-white">
        <tr>
          <th class="p-2 border">ID</th>
          <th class="p-2 border">Judul</th>
          <th class="p-2 border">Penulis</th>
          <th class="p-2 border">Tahun</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in books" :key="book.id" class="hover:bg-green-100">
          <td class="p-2 border">{{ book.id }}</td>
          <td class="p-2 border">{{ book.title }}</td>
          <td class="p-2 border">{{ book.author }}</td>
          <td class="p-2 border">{{ book.year }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const books = [
  { id: 1, title: 'Laskar Pelangi', author: 'Andrea Hirata', year: 2005 },
  { id: 2, title: 'Bumi Manusia', author: 'Pramoedya A. Toer', year: 1980 },
  { id: 3, title: 'Negeri 5 Menara', author: 'Ahmad Fuadi', year: 2009 },
]
</script>
