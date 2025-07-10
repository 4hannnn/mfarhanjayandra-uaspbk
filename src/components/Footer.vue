<template>
    <footer class="w-full bg-[#a98467] text-white py-8 px-4 mt-12">
        <div class="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div class="flex items-center gap-3 mb-4 md:mb-0">
                <svg class="w-10 h-10 text-[#f5eee6]" fill="none" stroke="currentColor" stroke-width="2"
                    viewBox="0 0 24 24">
                    <rect x="3" y="7" width="18" height="13" rx="2" />
                    <path d="M16 3v4M8 3v4" />
                </svg>
                <span class="font-extrabold text-2xl tracking-wide">ePerpus</span>
            </div>
            <ul class="flex gap-6 text-base font-medium">
                <li><a href="/" class="hover:underline hover:text-[#f5eee6] transition-colors">Home</a></li>
                <li><a href="/books" class="hover:underline hover:text-[#f5eee6] transition-colors">Daftar Buku</a></li>
                <li><a href="/about" class="hover:underline hover:text-[#f5eee6] transition-colors">About Us</a></li>
                <li><a href="/contact" class="hover:underline hover:text-[#f5eee6] transition-colors">Contact</a></li>
            </ul>
            <div class="flex gap-4">
                <a href="#" class="hover:text-[#f5eee6]" aria-label="Instagram"><svg class="w-6 h-6" fill="none"
                        stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <rect x="2" y="2" width="20" height="20" rx="5" />
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                        <circle cx="17.5" cy="6.5" r="1" />
                    </svg></a>
                <a href="#" class="hover:text-[#f5eee6]" aria-label="Twitter"><svg class="w-6 h-6" fill="none"
                        stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path
                            d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4 1.64a9.09 9.09 0 01-2.88 1.1A4.52 4.52 0 0016.11 0c-2.5 0-4.52 2.02-4.52 4.52 0 .35.04.7.11 1.03C7.69 5.4 4.07 3.7 1.64 1.15c-.38.65-.6 1.4-.6 2.2 0 1.52.77 2.86 1.94 3.65A4.48 4.48 0 01.96 6v.06c0 2.13 1.52 3.9 3.54 4.3-.37.1-.76.16-1.16.16-.28 0-.55-.03-.81-.08.55 1.7 2.16 2.94 4.07 2.97A9.05 9.05 0 010 21.54a12.8 12.8 0 006.92 2.03c8.3 0 12.84-6.88 12.84-12.84 0-.2 0-.39-.01-.58A9.22 9.22 0 0023 3z" />
                    </svg></a>
                <a href="#" class="hover:text-[#f5eee6]" aria-label="Facebook"><svg class="w-6 h-6" fill="none"
                        stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                        <path d="M18 2h-3a4 4 0 00-4 4v3H7v4h4v8h4v-8h3l1-4h-4V6a1 1 0 011-1h3z" />
                    </svg></a>
            </div>
        </div>
        <div class="mt-8 text-center text-[#f5eee6] text-sm">
            &copy; {{ new Date().getFullYear() }} ePerpus. All rights reserved.
        </div>
    </footer>
</template>

<script setup>
// Komponen Footer
</script>
