<template>
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-4">Laporan Peminjaman</h1>
    <ul class="space-y-2">
      <li class="bg-gray-100 p-4 rounded shadow">
        Total Buku: <strong>{{ report.totalBooks }}</strong>
      </li>
      <li class="bg-gray-100 p-4 rounded shadow">
        Total Anggota: <strong>{{ report.totalMembers }}</strong>
      </li>
      <li class="bg-gray-100 p-4 rounded shadow">
        Total Peminjaman Aktif: <strong>{{ report.activeLoans }}</strong>
      </li>
      <li class="bg-gray-100 p-4 rounded shadow">
        Total Peminjaman Selesai: <strong>{{ report.returnedLoans }}</strong>
      </li>
    </ul>
  </div>
</template>

<script setup>
const report = {
  totalBooks: 3,
  totalMembers: 3,
  activeLoans: 1,
  returnedLoans: 1,
}
</script>
