# UAS PBK - Digital Library (Perpustakaan Digital)

## Deskripsi
Aplikasi Perpustakaan Digital berbasis Vue 3, Pinia, TailwindCSS, dan json-server. Mendukung fitur autentikasi, manajemen buku (CRUD), booking buku, dashboard admin, serta pengujian unit dengan Vitest. Proyek ini merupakan implementasi tugas akhir/UAS PBK.

---

## Studi Kasus
Sistem Perpustakaan Digital yang memungkinkan user melakukan booking/peminjaman buku secara online, serta admin dapat mengelola data buku dan booking.

---

## Fitur Utama
- **Autentikasi:** Login & Register user (role: user & admin)
- **Manajemen Buku:** CRUD data buku oleh admin
- **Booking Buku:** User dapat booking buku, admin dapat CRUD data booking
- **Dashboard Admin:** Kelola buku & booking
- **Daftar Buku:** Tampil dinamis dari API
- **Halaman Informasi:** Home, About Us, Contact Us
- **Unit Testing:** Pengujian Pinia store dengan Vitest
- **Desain Modern:** TailwindCSS, responsif, dan konsisten

---

## Struktur Menu & Routing
- `/` : Home
- `/books` : Daftar Buku
- `/about` : About Us
- `/contact` : Contact Us
- `/login` : Login
- `/register` : Register
- `/admin/dashboard` : Dashboard Admin (hanya admin)

---

## Teknologi & Tools
- **Vue 3** (Composition API)
- **Vue Router** (mode history)
- **Pinia** (state management)
- **TailwindCSS** (UI modern & responsif)
- **json-server** (mock REST API)
- **Vitest** & **@vue/test-utils** (unit testing)
- **Axios** (HTTP client)

---

## Cara Menjalankan
1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Jalankan json-server**
   ```bash
   npx json-server --watch db.json --port 3000
   ```
3. **Jalankan aplikasi**
   ```bash
   npm run dev
   ```
4. **Jalankan unit test**
   ```bash
   npx vitest run
   ```

---

## Struktur Folder Penting
- `src/pages/` : Halaman utama (Home, BookList, AboutUs, ContactUs, Login, Register, admin/Dashboard)
- `src/components/` : Komponen UI (Navbar, Footer, UserDropdown, BookingForm, admin/BookCrud, admin/BookingCrud)
- `src/store/` : Pinia store (user.js)
- `src/store/__tests__/` : Unit test store
- `src/components/__tests__/` : Unit test komponen
- `db.json` : Data mock (buku, user, booking)

---

## Penjelasan Fitur CRUD & Booking
- **CRUD Buku:**
  - Admin dapat tambah, edit, hapus buku dari dashboard admin.
  - Data buku tersimpan di `db.json` (endpoint `/books`).
- **Booking Buku:**
  - User klik "Booking Buku" pada daftar buku, isi form booking.
  - Data booking masuk ke endpoint `/bookings`.
  - Admin dapat kelola data booking di dashboard admin.

---

## Pengujian Unit
- Contoh unit test pada `src/store/__tests__/user.test.js` untuk Pinia store user:
  - Test login berhasil/gagal
  - Test logout

---

## Akun Demo
- **Admin:**
  - Username: `admin`
  - Password: `admin123`
- **User:**
  - Username: `user`
  - Password: `user123`

---

## Catatan
- Pastikan json-server berjalan di port 3000.
- Untuk upload cover buku, gunakan URL gambar lokal atau online.
- Booking hanya bisa dilakukan jika buku tersedia.
- Fitur proteksi route admin sudah didukung via meta route dan Pinia.

---

## Author
- Nama: [Isi Nama Anda]
- NIM: [Isi NIM Anda]
- Mata Kuliah: Pemrograman Berbasis Komponen (PBK)
- Tugas Akhir / UAS PBK
