<template>
    <section class="w-full min-h-[60vh] py-16 bg-[#f5eee6] flex flex-col items-center justify-center">
        <div
            class="bg-white rounded-3xl shadow-2xl p-10 max-w-3xl w-full flex flex-col items-center border border-[#e9cfc1]">
            <h1 class="text-4xl font-extrabold text-[#7c5e3c] mb-3 tracking-wide text-center">Tentang Kami</h1>
            <p class="text-[#7c5e3c] text-center mb-8 text-lg leading-relaxed max-w-2xl">Aplikasi <span
                    class="font-bold text-[#a98467]">ePerpus</span> adalah platform perpustakaan digital yang
                dikembangkan untuk memudahkan pencarian, peminjaman, dan pengelolaan buku secara online.<br>Proyek ini
                dibuat sebagai bagian dari tugas <span class='font-semibold'>UAS Pemrograman Berbasis Komponen
                    (PBK)</span>.</p>
            <div class="flex flex-col md:flex-row gap-10 w-full justify-center items-stretch">
                <div
                    class="flex-1 flex flex-col items-center bg-[#f5eee6] rounded-2xl p-6 shadow-md border border-[#e9cfc1] mb-6 md:mb-0">
                    <svg class="w-14 h-14 text-[#a98467] mb-3" fill="none" stroke="currentColor" stroke-width="2"
                        viewBox="0 0 24 24">
                        <rect x="3" y="7" width="18" height="13" rx="2" />
                        <path d="M16 3v4M8 3v4" />
                    </svg>
                    <h2 class="font-bold text-xl text-[#7c5e3c] mb-2 tracking-wide">Visi</h2>
                    <p class="text-[#7c5e3c] text-center text-base leading-relaxed">Menjadi solusi perpustakaan digital
                        yang mudah diakses, informatif, dan ramah pengguna untuk semua kalangan.</p>
                </div>
                <div
                    class="flex-1 flex flex-col items-center bg-[#f5eee6] rounded-2xl p-6 shadow-md border border-[#e9cfc1]">
                    <svg class="w-14 h-14 text-[#a98467] mb-3" fill="none" stroke="currentColor" stroke-width="2"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h2 class="font-bold text-xl text-[#7c5e3c] mb-2 tracking-wide">Misi</h2>
                    <ul class="text-[#7c5e3c] text-base list-disc pl-5 text-left space-y-1">
                        <li>Meningkatkan literasi dan minat baca masyarakat.</li>
                        <li>Menyediakan akses buku yang mudah dan cepat.</li>
                        <li>Mendukung digitalisasi layanan perpustakaan.</li>
                        <li>Memberikan pengalaman peminjaman buku yang efisien dan transparan.</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
// Komponen About Us
</script>
