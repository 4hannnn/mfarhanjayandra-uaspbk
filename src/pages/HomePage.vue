<template>
    <section class="w-full min-h-[60vh] flex flex-col justify-center items-center text-center bg-cover bg-center mt-8"
        style="background-image: url('/section/section1.jpg');">
        <h1 class="text-4xl md:text-5xl font-extrabold text-white mb-4" style="text-shadow: 0 2px 8px rgba(0,0,0,0.18)">
            Selamat Datang di Perpustakaan</h1>
        <p class="text-lg md:text-xl text-white font-medium" style="text-shadow: 0 2px 8px rgba(0,0,0,0.12)">Aplikasi
            peminjaman buku digital yang mudah dan modern</p>
    </section>



    <!-- Section Statistik -->
    <section class="w-full py-12 bg-[#f5eee6] flex flex-col items-center">
        <h2 class="text-2xl md:text-3xl font-bold text-[#7c5e3c] mb-8">Statistik Perpustakaan</h2>
        <div class="flex flex-wrap justify-center gap-8">
            <div class="bg-white rounded-xl shadow-md px-8 py-6 flex flex-col items-center min-w-[160px]">
                <span class="text-3xl font-extrabold text-[#a98467]">1200+</span>
                <span class="text-[#7c5e3c] mt-2 font-medium">Buku</span>
            </div>
            <div class="bg-white rounded-xl shadow-md px-8 py-6 flex flex-col items-center min-w-[160px]">
                <span class="text-3xl font-extrabold text-[#a98467]">350+</span>
                <span class="text-[#7c5e3c] mt-2 font-medium">Anggota</span>
            </div>
            <div class="bg-white rounded-xl shadow-md px-8 py-6 flex flex-col items-center min-w-[160px]">
                <span class="text-3xl font-extrabold text-[#a98467]">2100+</span>
                <span class="text-[#7c5e3c] mt-2 font-medium">Peminjaman</span>
            </div>
        </div>
    </section>

    <!-- Section Fitur Unggulan -->
    <section class="w-full py-12 bg-white flex flex-col items-center">
        <h2 class="text-2xl md:text-3xl font-bold text-[#7c5e3c] mb-8">Fitur Unggulan</h2>
        <div class="flex flex-wrap justify-center gap-8">
            <div
                class="flex flex-col items-center max-w-xs p-6 rounded-xl border border-[#e9cfc1] shadow-sm hover:shadow-md transition-shadow bg-[#f5eee6]">
                <svg xmlns='http://www.w3.org/2000/svg' class='h-10 w-10 mb-3 text-[#a98467]' fill='none'
                    viewBox='0 0 24 24' stroke='currentColor'>
                    <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2'
                        d='M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01' />
                </svg>
                <h3 class="font-bold text-lg text-[#7c5e3c] mb-2">Pencarian Buku Mudah</h3>
                <p class="text-[#7c5e3c] text-center">Cari dan temukan buku favorit Anda dengan cepat melalui fitur
                    pencarian canggih.</p>
            </div>
            <div
                class="flex flex-col items-center max-w-xs p-6 rounded-xl border border-[#e9cfc1] shadow-sm hover:shadow-md transition-shadow bg-[#f5eee6]">
                <svg xmlns='http://www.w3.org/2000/svg' class='h-10 w-10 mb-3 text-[#a98467]' fill='none'
                    viewBox='0 0 24 24' stroke='currentColor'>
                    <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2'
                        d='M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 10c-4.418 0-8-1.79-8-4V7a2 2 0 012-2h12a2 2 0 012 2v7c0 2.21-3.582 4-8 4z' />
                </svg>
                <h3 class="font-bold text-lg text-[#7c5e3c] mb-2">Peminjaman Online</h3>
                <p class="text-[#7c5e3c] text-center">Pinjam buku secara online tanpa harus datang ke perpustakaan.</p>
            </div>
            <div
                class="flex flex-col items-center max-w-xs p-6 rounded-xl border border-[#e9cfc1] shadow-sm hover:shadow-md transition-shadow bg-[#f5eee6]">
                <svg xmlns='http://www.w3.org/2000/svg' class='h-10 w-10 mb-3 text-[#a98467]' fill='none'
                    viewBox='0 0 24 24' stroke='currentColor'>
                    <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2'
                        d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' />
                </svg>
                <h3 class="font-bold text-lg text-[#7c5e3c] mb-2">Riwayat Peminjaman</h3>
                <p class="text-[#7c5e3c] text-center">Lihat riwayat peminjaman buku Anda secara lengkap dan
                    terorganisir.</p>
            </div>
            <div
                class="flex flex-col items-center max-w-xs p-6 rounded-xl border border-[#e9cfc1] shadow-sm hover:shadow-md transition-shadow bg-[#f5eee6]">
                <svg xmlns='http://www.w3.org/2000/svg' class='h-10 w-10 mb-3 text-[#a98467]' fill='none'
                    viewBox='0 0 24 24' stroke='currentColor'>
                    <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2'
                        d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9' />
                </svg>
                <h3 class="font-bold text-lg text-[#7c5e3c] mb-2">Notifikasi Pengembalian</h3>
                <p class="text-[#7c5e3c] text-center">Dapatkan pengingat otomatis untuk pengembalian buku tepat waktu.
                </p>
            </div>
        </div>
    </section>

    <!-- Section Langkah Penggunaan -->
    <section class="w-full py-12 bg-[#f5eee6] flex flex-col items-center">
        <h2 class="text-2xl md:text-3xl font-bold text-[#7c5e3c] mb-8">Langkah Penggunaan</h2>
        <div class="flex flex-wrap justify-center gap-8">
            <div class="flex flex-col items-center max-w-xs p-6 rounded-xl border border-[#e9cfc1] shadow-sm bg-white">
                <span
                    class="bg-[#a98467] text-white rounded-full h-12 w-12 flex items-center justify-center text-xl font-bold mb-3">1</span>
                <h3 class="font-bold text-lg text-[#7c5e3c] mb-2">Daftar Akun</h3>
                <p class="text-[#7c5e3c] text-center">Buat akun baru untuk mulai menggunakan layanan perpustakaan
                    digital.</p>
            </div>
            <div class="flex flex-col items-center max-w-xs p-6 rounded-xl border border-[#e9cfc1] shadow-sm bg-white">
                <span
                    class="bg-[#a98467] text-white rounded-full h-12 w-12 flex items-center justify-center text-xl font-bold mb-3">2</span>
                <h3 class="font-bold text-lg text-[#7c5e3c] mb-2">Login</h3>
                <p class="text-[#7c5e3c] text-center">Masuk ke aplikasi dengan akun yang sudah terdaftar.</p>
            </div>
            <div class="flex flex-col items-center max-w-xs p-6 rounded-xl border border-[#e9cfc1] shadow-sm bg-white">
                <span
                    class="bg-[#a98467] text-white rounded-full h-12 w-12 flex items-center justify-center text-xl font-bold mb-3">3</span>
                <h3 class="font-bold text-lg text-[#7c5e3c] mb-2">Cari & Pinjam Buku</h3>
                <p class="text-[#7c5e3c] text-center">Temukan buku yang diinginkan dan lakukan peminjaman secara online.
                </p>
            </div>
            <div class="flex flex-col items-center max-w-xs p-6 rounded-xl border border-[#e9cfc1] shadow-sm bg-white">
                <span
                    class="bg-[#a98467] text-white rounded-full h-12 w-12 flex items-center justify-center text-xl font-bold mb-3">4</span>
                <h3 class="font-bold text-lg text-[#7c5e3c] mb-2">Nikmati Layanan</h3>
                <p class="text-[#7c5e3c] text-center">Baca buku dan pantau riwayat peminjaman dengan mudah.</p>
            </div>
        </div>
    </section>

    <!-- Section Manfaat ePerpus -->
    <section class="w-full py-12 bg-white flex flex-col items-center">
        <h2 class="text-2xl md:text-3xl font-bold text-[#7c5e3c] mb-10 text-center">Manfaat ePerpus</h2>
        <div class="flex flex-col md:flex-row items-center justify-center gap-12 w-full max-w-6xl px-4">
            <!-- Gambar kiri -->
            <div class="flex-1 flex justify-center mb-8 md:mb-0">
                <img src="/section/section1.jpg" alt="Manfaat ePerpus"
                    class="rounded-full object-cover w-72 h-72 shadow-md border-4 border-[#e9cfc1]" />
            </div>
            <!-- List manfaat kanan -->
            <ul class="flex-1 flex flex-col gap-6 text-[#7c5e3c] text-lg">
                <li class="flex items-start gap-3">
                    <svg class="w-7 h-7 text-[#a98467] mt-1" fill="none" stroke="currentColor" stroke-width="2"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm6 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Meningkatkan kualitas pembacaan anggota secara individu
                </li>
                <li class="flex items-start gap-3">
                    <svg class="w-7 h-7 text-[#a98467] mt-1" fill="none" stroke="currentColor" stroke-width="2"
                        viewBox="0 0 24 24">
                        <rect x="4" y="4" width="16" height="16" rx="2" />
                        <path d="M8 2v4M16 2v4M4 10h16" />
                    </svg>
                    Sebagai sarana informasi dan hiburan bagi orang umum
                </li>
                <li class="flex items-start gap-3">
                    <svg class="w-7 h-7 text-[#a98467] mt-1" fill="none" stroke="currentColor" stroke-width="2"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6l4 2" />
                    </svg>
                    Menjadi panduan dan rujukan resmi bagi orang umum
                </li>
                <li class="flex items-start gap-3">
                    <svg class="w-7 h-7 text-[#a98467] mt-1" fill="none" stroke="currentColor" stroke-width="2"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3 7v4a1 1 0 001 1h3v2a1 1 0 001 1h4a1 1 0 001-1v-2h3a1 1 0 001-1V7" />
                    </svg>
                    Menjadi data insight bagi orang umum
                </li>
                <li class="flex items-start gap-3">
                    <svg class="w-7 h-7 text-[#a98467] mt-1" fill="none" stroke="currentColor" stroke-width="2"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 20h9" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m0 0l-3-3m3 3l3-3" />
                    </svg>
                    Menjadi medium pembelajaran jarak jauh
                </li>
                <li class="flex items-start gap-3">
                    <svg class="w-7 h-7 text-[#a98467] mt-1" fill="none" stroke="currentColor" stroke-width="2"
                        viewBox="0 0 24 24">
                        <rect x="3" y="7" width="18" height="13" rx="2" />
                        <path d="M16 3v4M8 3v4" />
                    </svg>
                    Meningkatkan akreditasi bagi sekolah dan universitas
                </li>
                <li class="flex items-start gap-3">
                    <svg class="w-7 h-7 text-[#a98467] mt-1" fill="none" stroke="currentColor" stroke-width="2"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 12h18M3 6h18M3 18h18" />
                    </svg>
                    Mendukung terciptanya smart city
                </li>
            </ul>
        </div>
    </section>

    <!-- Section Testimoni Pengguna -->
    <section class="w-full py-12 bg-[#f5eee6] flex flex-col items-center">
        <h2 class="text-2xl md:text-3xl font-bold text-[#7c5e3c] mb-10 text-center">Testimoni Pengguna</h2>
        <div class="flex flex-wrap justify-center gap-8 w-full max-w-6xl px-4">
            <div class="bg-white rounded-xl shadow-md p-8 max-w-md flex flex-col items-center">
                <svg class="w-10 h-10 text-[#a98467] mb-3" fill="none" stroke="currentColor" stroke-width="2"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M17 20h5v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2h5" />
                    <circle cx="12" cy="7" r="4" />
                </svg>
                <p class="text-[#7c5e3c] text-center italic mb-3">"Aplikasi ini sangat membantu saya dalam mencari dan
                    meminjam buku tanpa harus datang ke perpustakaan."</p>
                <span class="font-bold text-[#a98467]">- Siti, Mahasiswa</span>
            </div>
            <div class="bg-white rounded-xl shadow-md p-8 max-w-md flex flex-col items-center">
                <svg class="w-10 h-10 text-[#a98467] mb-3" fill="none" stroke="currentColor" stroke-width="2"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M17 20h5v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2h5" />
                    <circle cx="12" cy="7" r="4" />
                </svg>
                <p class="text-[#7c5e3c] text-center italic mb-3">"Fitur notifikasi pengembalian sangat membantu agar
                    saya tidak telat mengembalikan buku."</p>
                <span class="font-bold text-[#a98467]">- Budi, Guru</span>
            </div>
            <div class="bg-white rounded-xl shadow-md p-8 max-w-md flex flex-col items-center">
                <svg class="w-10 h-10 text-[#a98467] mb-3" fill="none" stroke="currentColor" stroke-width="2"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M17 20h5v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2h5" />
                    <circle cx="12" cy="7" r="4" />
                </svg>
                <p class="text-[#7c5e3c] text-center italic mb-3">"Tampilan aplikasi sangat mudah digunakan dan
                    informatif."</p>
                <span class="font-bold text-[#a98467]">- Andi, Dosen</span>
            </div>
        </div>
    </section>

    <!-- Section FAQ -->
    <section class="w-full py-12 bg-white flex flex-col items-center">
        <h2 class="text-2xl md:text-3xl font-bold text-[#7c5e3c] mb-10 text-center">FAQ</h2>
        <div class="w-full max-w-3xl flex flex-col gap-6 px-4">
            <div class="bg-[#f5eee6] rounded-lg p-5 shadow-sm">
                <h3 class="font-bold text-[#a98467] mb-2">Bagaimana cara mendaftar akun?</h3>
                <p class="text-[#7c5e3c]">Klik menu Daftar, isi data diri Anda, lalu simpan. Akun Anda siap digunakan.
                </p>
            </div>
            <div class="bg-[#f5eee6] rounded-lg p-5 shadow-sm">
                <h3 class="font-bold text-[#a98467] mb-2">Bagaimana cara meminjam buku?</h3>
                <p class="text-[#7c5e3c]">Login ke aplikasi, cari buku yang diinginkan, lalu klik tombol Pinjam.</p>
            </div>
            <div class="bg-[#f5eee6] rounded-lg p-5 shadow-sm">
                <h3 class="font-bold text-[#a98467] mb-2">Apakah ada denda jika telat mengembalikan buku?</h3>
                <p class="text-[#7c5e3c]">Kebijakan denda mengikuti aturan perpustakaan masing-masing.</p>
            </div>
        </div>
    </section>

    <!-- Section Kontak & Lokasi -->
    <section class="w-full py-12 bg-[#f5eee6] flex flex-col items-center">
        <h2 class="text-2xl md:text-3xl font-bold text-[#7c5e3c] mb-10 text-center">Kontak & Lokasi</h2>
        <div class="flex flex-col md:flex-row gap-10 w-full max-w-4xl px-4 items-center justify-center">
            <div class="flex-1 flex flex-col gap-4">
                <div class="flex items-center gap-3">
                    <svg class="w-7 h-7 text-[#a98467]" fill="none" stroke="currentColor" stroke-width="2"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M16 2a2 2 0 012 2v16a2 2 0 01-2 2H8a2 2 0 01-2-2V4a2 2 0 012-2h8zm0 0v4m0 0H8m8 0v4" />
                    </svg>
                    <span class="text-[#7c5e3c]">Email: admin@eperpus.com</span>
                </div>
                <div class="flex items-center gap-3">
                    <svg class="w-7 h-7 text-[#a98467]" fill="none" stroke="currentColor" stroke-width="2"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3 10a9 9 0 0118 0c0 7-9 13-9 13S3 17 3 10z" />
                        <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span class="text-[#7c5e3c]">Jl. Perpustakaan No. 123, Kota Buku</span>
                </div>
            </div>
            <div class="flex-1 flex justify-center">
                <iframe class="rounded-lg border-2 border-[#e9cfc1] shadow-md w-full h-64"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=106.816666%2C-6.200000%2C106.816666%2C-6.200000&amp;layer=mapnik"
                    style="min-width:250px;" allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
    </section>
</template>

<script setup>
// Komponen sederhana Homepage
</script>
