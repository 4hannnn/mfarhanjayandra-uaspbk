<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Data Anggota</h1>
    <table class="w-full border border-gray-300">
      <thead class="bg-green-600 text-white">
        <tr>
          <th class="p-2 border">ID</th>
          <th class="p-2 border">Nama</th>
          <th class="p-2 border">Email</th>
          <th class="p-2 border">Tanggal Daftar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="member in members" :key="member.id" class="hover:bg-green-100">
          <td class="p-2 border">{{ member.id }}</td>
          <td class="p-2 border">{{ member.name }}</td>
          <td class="p-2 border">{{ member.email }}</td>
          <td class="p-2 border">{{ member.joined }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const members = [
  { id: 1, name: 'Rani Putri', email: 'rani@mail.com', joined: '2024-01-15' },
  { id: 2, name: 'Andi Pratama', email: 'andi@mail.com', joined: '2023-11-20' },
  { id: 3, name: 'Siti Nurhaliza', email: 'siti@mail.com', joined: '2024-03-10' },
]
</script>
