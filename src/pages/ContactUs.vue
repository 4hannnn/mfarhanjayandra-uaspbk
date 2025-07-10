<template>
    <section class="w-full min-h-[60vh] py-16 bg-white flex flex-col items-center justify-center">
        <div
            class="bg-[#f5eee6] rounded-3xl shadow-2xl p-10 max-w-2xl w-full flex flex-col items-center border border-[#e9cfc1]">
            <h1 class="text-3xl md:text-4xl font-bold text-[#7c5e3c] mb-4">Hubungi Kami</h1>
            <p class="text-[#7c5e3c] text-center mb-6 text-lg">Jika Anda memiliki pertanyaan, kritik, atau saran,
                silakan hubungi kami melalui form di bawah ini atau kontak berikut:</p>
            <div class="flex flex-col gap-3 w-full mb-6">
                <div class="flex items-center gap-3">
                    <svg class="w-6 h-6 text-[#a98467]" fill="none" stroke="currentColor" stroke-width="2"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M16 2a2 2 0 012 2v16a2 2 0 01-2 2H8a2 2 0 01-2-2V4a2 2 0 012-2h8zm0 0v4m0 0H8m8 0v4" />
                    </svg>
                    <span class="text-[#7c5e3c]">Email: <a href="mailto:admin@eperpus.com"
                            class="underline hover:text-[#a98467]">admin@eperpus.com</a></span>
                </div>
                <div class="flex items-center gap-3">
                    <svg class="w-6 h-6 text-[#a98467]" fill="none" stroke="currentColor" stroke-width="2"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3 10a9 9 0 0118 0c0 7-9 13-9 13S3 17 3 10z" />
                        <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span class="text-[#7c5e3c]">Alamat: Jl. Perpustakaan No. 123, Kota Buku</span>
                </div>
            </div>
            <form class="w-full flex flex-col gap-4">
                <input type="text" placeholder="Nama"
                    class="border border-[#e9cfc1] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#a98467]" />
                <input type="email" placeholder="Email"
                    class="border border-[#e9cfc1] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#a98467]" />
                <textarea placeholder="Pesan" rows="4"
                    class="border border-[#e9cfc1] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#a98467]"></textarea>
                <button type="submit"
                    class="bg-[#a98467] hover:bg-[#7c5e3c] text-white font-semibold px-6 py-2 rounded shadow transition-colors duration-200">Kirim
                    Pesan</button>
            </form>
        </div>
    </section>
</template>

<script setup>
// Komponen Contact Us
</script>
