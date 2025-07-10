<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Data Peminjaman</h1>
    <table class="w-full border border-gray-300">
      <thead class="bg-green-600 text-white">
        <tr>
          <th class="p-2 border">ID</th>
          <th class="p-2 border">Anggota</th>
          <th class="p-2 border">Buku</th>
          <th class="p-2 border">Tgl Pinjam</th>
          <th class="p-2 border">Tgl Kembali</th>
          <th class="p-2 border">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="loan in loans" :key="loan.id" class="hover:bg-green-100">
          <td class="p-2 border">{{ loan.id }}</td>
          <td class="p-2 border">{{ loan.member }}</td>
          <td class="p-2 border">{{ loan.book }}</td>
          <td class="p-2 border">{{ loan.borrowed }}</td>
          <td class="p-2 border">{{ loan.returned }}</td>
          <td class="p-2 border">{{ loan.status }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const loans = [
  { id: 1, member: 'Rani Putri', book: 'Laskar Pelangi', borrowed: '2025-05-01', returned: '2025-05-08', status: 'Dikembalikan' },
  { id: 2, member: 'Andi Pratama', book: 'Bumi Manusia', borrowed: '2025-05-10', returned: '-', status: 'Dipinjam' },
]
</script>
