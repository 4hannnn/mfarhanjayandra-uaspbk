<template>
    <nav
        class="bg-gradient-to-r from-[#e9cfc1] to-[#c8b6a6] shadow-md px-6 py-3 flex items-center justify-between sticky top-0 z-50">
        <div class="flex items-center gap-2">
            <span class="font-extrabold text-2xl tracking-wide text-[#7c5e3c] drop-shadow">Perpustakaan</span>
        </div>
        <div class="flex items-center gap-6">
            <ul class="flex gap-4 text-base font-medium">
                <li>
                    <router-link to="/"
                        class="transition-colors duration-200 px-3 py-1 rounded hover:bg-[#f5eee6] hover:text-[#7c5e3c]"
                        active-class="bg-[#f5eee6] text-[#7c5e3c] font-bold shadow" exact>Home</router-link>
                </li>
                <li>
                    <router-link to="/books"
                        class="transition-colors duration-200 px-3 py-1 rounded hover:bg-[#f5eee6] hover:text-[#7c5e3c]"
                        active-class="bg-[#f5eee6] text-[#7c5e3c] font-bold shadow">Daftar Buku</router-link>
                </li>
                <li>
                    <router-link to="/about"
                        class="transition-colors duration-200 px-3 py-1 rounded hover:bg-[#f5eee6] hover:text-[#7c5e3c]"
                        active-class="bg-[#f5eee6] text-[#7c5e3c] font-bold shadow">About Us</router-link>
                </li>
                <li>
                    <router-link to="/contact"
                        class="transition-colors duration-200 px-3 py-1 rounded hover:bg-[#f5eee6] hover:text-[#7c5e3c]"
                        active-class="bg-[#f5eee6] text-[#7c5e3c] font-bold shadow">Contact Us</router-link>
                </li>
            </ul>
            <!-- User Icon Dropdown -->
            <UserDropdown />
        </div>
    </nav>
</template>

<script setup>
import UserDropdown from './UserDropdown.vue'
</script>
