# Panduan Lengkap Kunci Jawaban Ujian Sertifikasi
## Proyek: Website Sekolah SMK LPPM RI BANDUNG (React + Bootstrap)

Dokumen ini disusun khusus sebagai bahan belajar mandiri menghadapi ujian sertifikasi keahlian pembuatan website. Seluruh jawaban telah **disesuaikan 100% dengan proyek React riil (`Tugas_sekolah-react`)**, bukan asumsi abstrak.

Format per nomor:
- **Jawaban Langsung (Inti Ucap):** Kalimat lugas yang dapat langsung diucapkan saat asesor bertanya.
- **Esensi & Penjelasan Teknis:** Penjelasan mendalam konsep dan cara kerjanya agar kamu paham luar-dalam.
- **Rujukan File Proyek:** File dan baris kode konkret di repositori tempat fitur tersebut berada.
- **Catatan Jembatan (Bila Perlu):** Klarifikasi jika pertanyaan asesor berakar dari asumsi kode vanilla JS (seperti menyebut `data.js` atau `textContent`).

---

## DAFTAR ISI
1. [Bagian A: Pembuka (9 Soal)](#bagian-a-pembuka)
2. [Bagian B: Unit 1 — Mengimplementasikan User Interface (8 Soal)](#bagian-b-unit-1--mengimplementasikan-user-interface)
3. [Bagian C: Unit 2 — Menerapkan Perintah Eksekusi (7 Soal)](#bagian-c-unit-2--menerapkan-perintah-eksekusi)
4. [Bagian D: Unit 3 — Menyusun Fungsi, File, dan Sumber Daya (7 Soal)](#bagian-d-unit-3--menyusun-fungsi-file-dan-sumber-daya)
5. [Bagian E: Unit 4 — Guidelines dan Best Practices (7 Soal)](#bagian-e-unit-4--guidelines-dan-best-practices)
6. [Bagian F: Unit 5 — Pemrograman Terstruktur (15 Soal)](#bagian-f-unit-5--pemrograman-terstruktur)
7. [Bagian G: Unit 6 — Menggunakan Library Pre-Existing (10 Soal)](#bagian-g-unit-6--menggunakan-library-pre-existing)
8. [Bagian H: Studi Kasus Troubleshooting (10 Soal)](#bagian-h-studi-kasus-troubleshooting)
9. [Bagian I: Perubahan Langsung / Live Demo (12 Soal)](#bagian-i-perubahan-langsung--live-demo)
10. [Bagian Tambahan: Pertanyaan Lisan HTML (10 Soal)](#bagian-tambahan-pertanyaan-lisan-html)

---

## Bagian A: Pembuka

### 1. Perkenalkan proyek yang kamu buat.
- **Jawaban Langsung:** "Proyek ini adalah website profil resmi SMK LPPM RI Bandung yang dibangun menggunakan arsitektur modern Single Page Application (SPA) berbasis React 19, Vite 8, dan Bootstrap 5.3.3. Website ini menyajikan informasi menyeluruh mulai dari profil sekolah, kompetensi keahlian, kegiatan ekstrakurikuler, galeri interaktif, warta berita, hingga layanan kontak dan pendaftaran PPDB."
- **Esensi & Penjelasan:** Tekankan bahwa website ini bukan sekadar template statis biasa, melainkan hasil refactoring modular di mana data dipisahkan secara tegas dari komponen antarmuka. SPA memastikan perpindahan antar halaman terjadi instan tanpa reload browser.
- **Rujukan File:** `README.md`, `src/App.jsx`, `src/main.jsx`.

---

### 2. Apa tujuan website ini?
- **Jawaban Langsung:** "Tujuannya ada empat: pertama, sebagai pusat informasi digital resmi sekolah bagi calon siswa, orang tua, dan masyarakat; kedua, sebagai sarana promosi dan publikasi Penerimaan Peserta Didik Baru (PPDB); ketiga, mendokumentasikan kegiatan, fasilitas, dan prestasi akademik maupun non-akademik; keempat, memfasilitasi komunikasi langsung antara masyarakat dan pihak sekolah."
- **Esensi & Penjelasan:** Tujuan sebuah web sekolah harus mencakup aspek informatif (profil), promosi (jurusan & PPDB), arsip dokumentasi (galeri & berita), serta interaksi (form kontak & tautan WhatsApp resmi).
- **Rujukan File:** `src/data/site.js`, `src/data/home.js`, `README.md`.

---

### 3. Bahasa dan alat apa yang kamu pakai, dan kenapa?
- **Jawaban Langsung:** "Saya menggunakan JavaScript dengan sintaks modern ES6+ dan JSX, didukung framework React 19 untuk komponen antarmuka modular. Build tool yang digunakan adalah Vite 8 karena kecepatan Hot Module Replacement (HMR)-nya tinggi. Untuk styling, saya memadukan Bootstrap 5.3.3 lokal untuk grid responsif dan utilitas, Swiper 11 untuk slider, serta AOS untuk animasi gulir. Alasan utamanya adalah modularitas komponen, kemudahan pemeliharaan kode, dan kecepatan rendering di sisi klien."
- **Esensi & Penjelasan:** React dipilih karena pendekatan berbasis komponen (reusable components) mempermudah perawatan kode skala besar. Vite dipilih karena menggunakan native ES modules pada masa development sehingga build sangat cepat dibandingkan Webpack lama.
- **Rujukan File:** `package.json`, `vite.config.js`.

---

### 4. Tunjukkan fitur yang diminta skenario.
- **Jawaban Langsung:** "Fitur utama yang sudah terimplementasi meliputi:
  1. Slider sorotan beranda otomatis dengan Swiper.
  2. Tabulasi interaktif 4 Jurusan (TKJ, RPL, DKV, AKL) yang tersinkronisasi dengan hash URL (`/jurusan#rpl`).
  3. Filter kategori real-time pada Ekstrakurikuler dan Galeri.
  4. Pagination terintegrasi pada Galeri (12 item per halaman) dan Berita (3 item per halaman).
  5. Modal popup perbesar foto galeri.
  6. Pencarian warta berita instan berdasarkan judul, kategori, dan deskripsi.
  7. Form kontak terkontrol dengan validasi client-side serta fallback peta bila offline."
- **Esensi & Penjelasan:** Tunjukkan langsung di browser sambil mendemonstrasikan klik tombol filter, pagination galeri, dan form kontak.
- **Rujukan File:** `src/pages/HomePage.jsx`, `src/pages/JurusanPage.jsx`, `src/pages/GaleriPage.jsx`, `src/pages/BeritaPage.jsx`, `src/pages/KontakPage.jsx`.

---

### 5. Apa beda website statis dan dinamis? Jelaskan web yang dibuat masuk ke dalam mana?
- **Jawaban Langsung:** "Website statis menyajikan dokumen HTML/CSS yang isinya tetap dan sama persis untuk setiap pengguna tanpa proses komputasi server runtime atau basis data. Website dinamis menghasilkan konten yang dapat berubah sesuai interaksi pengguna, sesi autentikasi, atau data dari database. 
Web ini secara arsitektur hosting adalah **website statis (Client-side SPA)** karena di-build menjadi kumpulan berkas HTML/JS/CSS statis di folder `dist/` tanpa server backend aktif. Namun, secara pengalaman antarmuka (UI behavior), website ini **berperilaku dinamis di sisi browser** karena menggunakan state React untuk pencarian, pemfilteran, pagination, routing instan, dan penanganan form."
- **Esensi & Penjelasan:** Jawaban ini menunjukkan kecerdasan arsitektural: membedakan antara "hosting/deployment level" (static assets) dengan "runtime state level" (dynamic client-side behavior via React DOM).
- **Rujukan File:** `dist/index.html` (hasil build), `src/pages/BeritaPage.jsx` (contoh state dinamis).

---

### 6. Bagian mana yang kamu tulis sendiri dan mana yang dari library?
- **Jawaban Langsung:** "Bagian yang saya tulis sendiri mencakup:
  1. Seluruh logika komponen React di folder `src/components/` dan `src/pages/`.
  2. Seluruh perancangan data model di `src/data/*.js`.
  3. Logika filter, pencarian teks berita, modal lightbox galeri, form validation, dan komponen pagination (`src/components/common/Pagination.jsx`).
  4. Kustomisasi CSS spesifik sekolah di `public/css/school.css`.
  Sedangkan library eksternal yang dimanfaatkan adalah:
  1. Bootstrap 5.3.3 untuk sistem 12 grid dan utilitas styling.
  2. Swiper 11 untuk slider beranda.
  3. AOS (Animate on Scroll) untuk memicu animasi saat viewport mencapai elemen.
  4. Template Kaira sebagai pondasi palet warna dan tipografi awal di `public/css/style.css`."
- **Esensi & Penjelasan:** Asesor ingin memastikan kamu tidak sekadar mencomot template utuh tanpa memahami logika pemrograman di dalamnya.
- **Rujukan File:** `src/components/common/Pagination.jsx`, `public/css/school.css`, `src/data/`.

---

### 7. Bagaimana kamu menguji websitemu?
- **Jawaban Langsung:** "Saya melakukan pengujian secara sistematis melalui:
  1. **Cross-Device & Responsive Testing:** Memakai Chrome DevTools Device Mode untuk menguji resolusi layar desktop (1920px), tablet (768px), dan mobile (375px).
  2. **Functional Testing:** Menguji semua tombol filter kategori, pencarian berita dengan kata kunci valid dan tidak ditemukan, paginasi berita/galeri, serta pembukaan modal galeri.
  3. **Form Validation Testing:** Memasukkan data kosong, email tidak valid, dan input terlalu pendek untuk memverifikasi feedback peringatan.
  4. **Build & Syntax Verification:** Menjalankan perintah `npm.cmd run build` di terminal untuk memastikan tidak ada syntax error, broken import, atau kegagalan kompilasi bundle Vite."
- **Esensi & Penjelasan:** Tunjukkan bahwa pengujian dilakukan pada level fungsional, antarmuka, dan kesiapan produksi (build tooling).
- **Rujukan File:** `package.json` (`"build": "vite build"`).

---

### 8. Bagian apa yang paling sulit dan bagaimana mengatasinya?
- **Jawaban Langsung:** "Tantangan tersulit adalah mengelola sinkronisasi antara filter kategori dan sistem pagination pada galeri dan berita. Jika pengguna berada di halaman 2 suatu kategori lalu mengganti ke kategori lain yang datanya hanya cukup untuk 1 halaman, terjadi potensi bug visual atau halaman kosong. 
Saya mengatasinya dengan menerapkan logika *reset page effect* menggunakan `useEffect` di React, sehingga setiap kali nilai pencarian atau filter kategori berubah, `currentPage` otomatis dikembalikan ke halaman 1 (`setCurrentPage(1)`)."
- **Esensi & Penjelasan:** Kamu juga bisa menyebutkan insiden `key` duplikat yang baru saja kita atasi: ketika ID galeri sempat kembar, React melakukan rekonsiliasi yang salah sehingga gambar lama menimpa gambar baru. Solusinya adalah memastikan setiap ID data unik dan memperkuat key dengan format `${item.id}-${index}`.
- **Rujukan File:** `src/pages/GaleriPage.jsx` (baris `useEffect`), `src/pages/BeritaPage.jsx`.

---

### 9. Kalau ada waktu tambahan, apa yang kamu tambahkan?
- **Jawaban Langsung:** "Jika ada waktu pengembangan lanjutan, saya akan menambahkan:
  1. Integrasi **Backend API & Database** (misalnya REST API Express.js atau Laravel) agar pihak admin sekolah bisa menambah berita dan agenda melalui dashboard Content Management System (CMS) tanpa perlu mengedit file kode.
  2. Fitur formulir pendaftaran PPDB online lengkap dengan unggah berkas PDF/kartu keluarga.
  3. Implementasi mode gelap (*dark mode*) menggunakan CSS Variables dan Bootstrap theme toggler.
  4. Fitur pencarian global di header (*global search*) yang bisa mencari jurusan, ekskul, dan berita sekaligus."
- **Esensi & Penjelasan:** Jawaban ini memperlihatkan visi pengembangan produk perangkat lunak profesional dari prototipe frontend menuju full-stack web application.

---

## Bagian B: Unit 1 — Mengimplementasikan User Interface

### 1. Mana rancangan atau mock-up awalmu? Apakah hasilnya sesuai?
- **Jawaban Langsung:** "Rancangan awal proyek didokumentasikan dalam prototipe wireframe HTML yang berlokasi di file `smk_lppm_ri_bandung_wireframe_prototype.html` di repositori pendamping. Hasil implementasi saat ini sangat sesuai dengan wireframe tersebut dalam hal struktur hierarki informasi, susunan navbar, grid jurusan, hingga penempatan footer, bahkan disempurnakan dengan palet visual formal dan animasi transisi yang lebih halus."
- **Esensi & Penjelasan:** Wireframe prototype berfungsi sebagai cetak biru tata letak (blueprint) sebelum dipecah menjadi komponen React.
- **Rujukan File:** `D:\Project\Tugas Sekolah\Tugas_Sekolah\smk_lppm_ri_bandung_wireframe_prototype.html`.

---

### 2. Jelaskan alur menu: dari Beranda pengunjung bisa ke mana saja?
- **Jawaban Langsung:** "Dari Beranda (`/`), pengunjung dapat menavigasi ke:
  1. **Profil (`/profil`):** Dengan submenu langsung ke Sejarah, Visi & Misi, Struktur Organisasi, dan Fasilitas melalui hash link.
  2. **Kompetensi Keahlian (`/jurusan`):** Langsung ke tab spesifik TKJ, RPL, DKV, atau AKL.
  3. **Ekstrakurikuler (`/ekstrakurikuler`):** Eksplorasi ekskul dengan filter bidang.
  4. **Galeri (`/galeri`):** Dokumentasi foto sekolah.
  5. **Berita (`/berita`):** Membaca warta sekolah atau langsung ke detail berita spesifik (`/berita/:slug`).
  6. **Kontak (`/kontak`):** Peta dan form pesan.
  7. **Tombol CTA Khusus:** Tombol 'PPDB 2026/2027' di navbar yang mengarahkan ke informasi pendaftaran di halaman berita."
- **Esensi & Penjelasan:** Alur ini diatur oleh React Router declarative routing di `App.jsx` dan navigasi dipusatkan di `src/data/navigation.js`.
- **Rujukan File:** `src/App.jsx`, `src/data/navigation.js`, `src/components/layout/Navbar.jsx`.

---

### 3. Komponen UI apa yang kamu pakai, dan kenapa?
- **Jawaban Langsung:** "Komponen UI yang digunakan mencakup:
  1. **Navbar with Offcanvas:** Untuk navigasi yang rapi di desktop dan menu slide-drawer di smartphone.
  2. **Carousel / Slider:** Menampilkan banner sorotan visual sekolah tanpa memakan ruang vertikal.
  3. **Card UI:** Menampilkan jurusan, ekstrakurikuler, dan berita dalam kontainer mandiri yang terstruktur.
  4. **Tabs Component:** Menyajikan informasi detail jurusan agar pengunjung dapat berganti bidang studi tanpa refresh.
  5. **Modal / Lightbox:** Menampilkan foto galeri ukuran penuh dalam jendela pop-up.
  6. **Form Controls & Badges:** Menyediakan kolom input dengan label validasi dan penanda kategori/agenda terdekat."
- **Esensi & Penjelasan:** Komponen-komponen ini dipilih untuk menjaga keselarasan UX (User Experience) modern sesuai pedoman antarmuka pengguna standar industri.
- **Rujukan File:** `src/components/layout/Navbar.jsx`, `src/components/common/NewsCard.jsx`, `src/pages/GaleriPage.jsx`.

---

### 4. Bagaimana kamu menentukan style (warna, ukuran, jarak)?
- **Jawaban Langsung:** "Penentuan gaya tampilan mengikuti standar **Design System konsisten**:
  1. **Palet Warna:** Warna dominan netral/putih bersih, teks gelap (`#111111`), dan aksen zaitun/olive yang berasal dari template Kaira untuk memberikan citra formal, tenang, dan prestisius bagi institusi sekolah.
  2. **Tipografi:** Menggunakan pasangan font lokal: *Marcellus* untuk judul/heading (kesan elegan akademis) dan *Jost* untuk teks bodi (keterbacaan/legibility tinggi).
  3. **Spasi & Jarak:** Menerapkan sistem modular skala Bootstrap (`py-5`, `mb-4`, `g-3`, `gap-3`) sehingga ritme spasi vertikal dan horizontal antar section tetap teratur dan harmonis."
- **Esensi & Penjelasan:** Style konsisten dicapai melalui file CSS terpusat dan pemanfaatan variabel CSS Bootstrap.
- **Rujukan File:** `public/css/fonts.css`, `public/css/style.css`, `public/css/school.css`.

---

### 5. Bagian mana yang interaktif?
- **Jawaban Langsung:** "Elemen interaktif pada aplikasi ini meliputi:
  1. Slider Hero beranda yang dapat digeser (swipe/drag) dan berpindah otomatis.
  2. Tabulasi jurusan di `/jurusan` yang berpindah konten saat tab ditekan.
  3. Filter kategori galeri dan ekstrakurikuler yang menyaring kartu secara langsung.
  4. Komponen pagination untuk navigasi halaman galeri dan berita.
  5. Modal perbesar foto saat kartu galeri diklik.
  6. Kolom pencarian berita yang langsung memfilter daftar artikel saat pengguna mengetik.
  7. Form pesan kontak yang memberikan feedback visual validasi seketika."
- **Esensi & Penjelasan:** Interaktivitas ini dibangun menggunakan state management internal React (`useState`) tanpa perlu menyentuh DOM browser secara manual.
- **Rujukan File:** `src/pages/GaleriPage.jsx`, `src/pages/BeritaPage.jsx`, `src/pages/KontakPage.jsx`.

---

### 6. Komponen mana yang punya keadaan aktif dan tidak aktif?
- **Jawaban Langsung:** "Komponen dengan state aktif/tidak aktif (active/inactive state) adalah:
  1. **Menu Navigasi:** Menggunakan `NavLink` dari React Router yang otomatis menyematkan class `.active` pada link halaman yang sedang dibuka.
  2. **Tombol Filter Kategori:** Tombol kategori terpilih memiliki class `.is-checked` / `.active` dengan warna berbeda dibanding tombol lainnya.
  3. **Tab Jurusan:** Tombol jurusan yang aktif memiliki class `.active` dan atribut `aria-selected="true"`.
  4. **Tombol Pagination:** Nomor halaman saat ini berstatus `.active`, sedangkan tombol 'Sebelumnya'/'Berikutnya' berstatus `disabled` jika sudah di batas awal/akhir.
  5. **Modal Galeri:** Memiliki kondisi terbuka (`selected !== null`) atau tertutup."
- **Esensi & Penjelasan:** State aktif memberikan kepastian orientasi (affordance & mental model) kepada pengguna mengenai posisi dan aksi mereka di aplikasi.
- **Rujukan File:** `src/components/layout/Navbar.jsx`, `src/components/common/Pagination.jsx`.

---

### 7. Bagaimana tampilannya di HP?
- **Jawaban Langsung:** "Tampilan di smartphone sepenuhnya responsif:
  1. Menu bar desktop beralih menjadi **tombol hamburger** yang membuka drawer **Offcanvas Bootstrap** dari sisi samping.
  2. Grid 3 atau 4 kolom (seperti kartu jurusan, ekskul, dan galeri) otomatis berubah menjadi 1 atau 2 kolom (`col-12` atau `col-sm-6`).
  3. Kartu berita horizontal di desktop otomatis tersusun bertumpuk vertikal di layar ponsel kecil agar gambar tidak terpotong.
  4. Ukuran tipografi judul menyesuaikan melalui clamp / media query sehingga tidak terjadi horizontal scrolling (overflow-x hidden)."
- **Esensi & Penjelasan:** Responsivitas dibangun menggunakan konsep mobile-first Bootstrap breakpoints (`col-12 col-md-6 col-lg-3`).
- **Rujukan File:** `src/components/layout/Navbar.jsx`, `public/css/school.css`.

---

### 8. Apa itu grid Bootstrap?
- **Jawaban Langsung:** "Grid Bootstrap adalah sistem tata letak 2 dimensi berbasis Flexbox yang membagi lebar satu baris (`.row`) menjadi **12 kolom imajiner** di dalam sebuah wadah (`.container`). Pengembang dapat menentukan berapa banyak kolom yang dikonsumsi sebuah elemen pada berbagai ukuran layar menggunakan class breakpoint, misalnya `col-12` (lebar penuh di HP) dan `col-md-6 col-lg-4` (sepertiga lebar layar di laptop/desktop)."
- **Esensi & Penjelasan:** Breakpoint Bootstrap terdiri dari xs (<576px), sm (≥576px), md (≥768px), lg (≥992px), xl (≥1200px), dan xxl (≥1400px).
- **Rujukan File:** `public/css/bootstrap.min.css`, seluruh komponen di `src/components/`.

---

## Bagian C: Unit 2 — Menerapkan Perintah Eksekusi

### 1. Bagaimana cara menjalankan websitemu? File mana yang dibuka pertama?
- **Jawaban Langsung:** "Untuk mode pengembangan, jalankan perintah terminal:
  ```bash
  npm.cmd run dev
  ```
  Lalu buka URL lokal `http://localhost:5173` di browser.
  Secara alur eksekusi, berkas yang pertama kali dimuat oleh browser adalah **`index.html`** di root proyek. Berkas ini memuat tag `<div id="root"></div>` dan memanggil skrip utama melalui tag `<script type="module" src="/src/main.jsx"></script>`. Dari `main.jsx`, React me-mount komponen root `App.jsx` ke dalam DOM."
- **Esensi & Penjelasan:** Karena menggunakan Vite, `index.html` berada di root proyek dan bertindak sebagai modul entry point resmi. Di Windows PowerShell, selalu gunakan `npm.cmd` jika perintah `npm` terhalang policy script.
- **Rujukan File:** `index.html`, `src/main.jsx`, `package.json`.

---

### 2. Kenapa tidak perlu dikompilasi (atau bagaimana proses kompilasinya)?
- **Catatan Jembatan:** *Pertanyaan docx mengasumsikan website HTML biasa yang tidak butuh compiler. Namun pada project React modern, jawablah dengan membedakan JavaScript murni vs JSX build step.*
- **Jawaban Langsung:** "Bahasa JavaScript pada dasarnya adalah bahasa pemrograman *interpreted* yang dieksekusi baris demi baris oleh mesin browser (seperti Google V8) saat runtime tanpa perlu dijadikan binary biner executable (.exe). 
Namun, karena proyek ini menggunakan **JSX dan arsitektur modular ES Modules**, proyek tetap memerlukan proses **transpilasi dan bundling** saat akan dipublikasikan ke produksi. Perintah `npm.cmd run build` menggunakan engine Vite/Rollup untuk mentranspilasi JSX menjadi JavaScript vanilla murni serta mengompres berkas ke dalam folder `dist/` agar dapat dibaca langsung oleh semua browser web standar."
- **Esensi & Penjelasan:** Jawaban ini membuktikan kamu menguasai perbedaan mendasar antara interpretasi browser dan peran bundler modern.
- **Rujukan File:** `vite.config.js`, `package.json`.

---

### 3. Apa beda running, debugging, dan executable?
- **Jawaban Langsung:** 
  - **Running:** Menjalankan kode program secara normal untuk melihat fungsionalitas dan output aplikasi (contoh: mengeksekusi `npm.cmd run dev` dan mengoperasikan web di browser).
  - **Debugging:** Proses sistematis mencari, mengisolasi, dan memperbaiki bug atau anomali logika pada kode (contoh: memasang `console.log`, breakpoint di Chrome DevTools, atau membaca error stack trace).
  - **Executable:** Berkas biner mandiri yang sudah dikompilasi ke bahasa mesin native sistem operasi tertentu (misalnya `.exe` di Windows) sehingga dapat langsung dieksekusi tanpa interpreter. Pada web, padanan rilis produksinya adalah bundel statis di folder `dist/`."
- **Esensi & Penjelasan:** Tiga istilah ini adalah terminologi baku rekayasa perangkat lunak pada unit kompetensi perintah eksekusi.

---

### 4. Bagaimana cara kamu melihat error?
- **Jawaban Langsung:** "Saya memantau error dari dua tempat:
  1. **Terminal / Console CLI:** Melihat error saat proses kompilasi bundler Vite, seperti broken import, modul tidak ditemukan, atau kesalahan sintaks JSX.
  2. **Browser Developer Tools (F12 -> tab Console):** Melihat runtime error JavaScript, unhandled promise rejection, peringatan warning React (seperti key prop duplikat), serta status 404 dari tab Network bila ada aset gambar yang gagal dimuat."
- **Esensi & Penjelasan:** Tunjukkan kepada asesor bahwa kamu terbiasa menekan tombol F12 untuk memeriksa kebersihan Console browser.
- **Rujukan File:** Terminal PowerShell & Browser Console (F12).

---

### 5. Sebutkan jenis error yang kamu ketahui.
- **Jawaban Langsung:** "Ada tiga jenis error utama dalam pemrograman:
  1. **Syntax Error:** Kesalahan penulisan tata bahasa kode sehingga interpreter gagal membaca program (contoh: lupa menutup tanda kurung kurawal `{}` atau tag JSX yang tidak ditutup).
  2. **Runtime Error:** Kesalahan yang muncul saat program sedang berjalan (contoh: `TypeError: Cannot read properties of undefined` saat membaca properti dari objek yang belum siap).
  3. **Logical Error (Bug Logika):** Kode berjalan mulus tanpa pesan error di konsol, namun hasil atau perilakunya tidak sesuai dengan yang diharapkan (contoh: salah formula perhitungan pagination atau salah filter array)."
- **Esensi & Penjelasan:** Klasifikasi ini adalah pertanyaan fundamental dalam pengujian perangkat lunak.

---

### 6. Pernah mengalami error? Apa penyebab dan perbaikannya?
- **Jawaban Langsung:** "Ya, baru saja pada pengembangan galeri, terjadi bug visual di mana saat berpindah ke halaman kedua setelah memfilter kategori, foto dari halaman sebelumnya tidak hilang dan menimpa foto baru. 
Setelah saya telusuri di DevTools, penyebabnya adalah **duplikasi atribut `id`** pada data foto tambahan (`galeri-1` terulang dua kali). Akibatnya, rekonsiliasi virtual DOM React menganggap node tersebut sama dan tidak melakukan unmount dengan bersih. 
Perbaikannya adalah: pertama, merevisi data di `src/data/galeri.js` agar memiliki ID unik (`galeri-13` s.d `galeri-16`); kedua, memperkuat atribut key di `GaleriPage.jsx` dengan format `key={`${item.id}-${index}`}` sebagai fail-safe."
- **Esensi & Penjelasan:** Menceritakan error nyata dan troubleshooting nyata yang baru kita lalui bersama adalah jawaban paling meyakinkan dan orisinal di hadapan asesor.
- **Rujukan File:** `src/data/galeri.js`, `src/pages/GaleriPage.jsx`.

---

### 7. Bagaimana kamu memastikan hasil program sesuai skenario?
- **Jawaban Langsung:** "Saya melakukan verifikasi silang (checklist verification) antara daftar kebutuhan pada lembar skenario uji dengan fungsi website:
  1. Memeriksa keberadaan seluruh rute halaman wajib.
  2. Melakukan tes interaksi manual pada setiap tombol filter, input pencarian, dan pagination.
  3. Menguji respons form kontak terhadap data valid dan invalid.
  4. Menjalankan `npm.cmd run build` untuk memastikan build produksi sukses dan tidak ada broken dependencies."
- **Esensi & Penjelasan:** Hal ini memastikan tidak ada fitur skenario yang terlewatkan sebelum sesi asesmen dimulai.
- **Rujukan File:** `src/App.jsx`, `package.json`.

---

## Bagian D: Unit 3 — Menyusun Fungsi, File, dan Sumber Daya

### 1. Kenapa file, variabel, dan fungsi diberi nama seperti itu?
- **Jawaban Langsung:** "Penamaan mengikuti konvensi standar industri agar kode mudah dibaca (*clean code* & *self-describing*):
  1. **Komponen React:** Menggunakan **PascalCase** (contoh: `NewsCard.jsx`, `Pagination.jsx`, `BeritaPage.jsx`) sesuai aturan React untuk membedakan komponen kustom dari tag HTML bawaan.
  2. **Variabel & Fungsi:** Menggunakan **camelCase** berorientasi kata kerja atau deskripsi data (contoh: `handleSearch`, `filteredItems`, `visibleItems`, `selectedCategory`).
  3. **File Aset & Data:** Menggunakan huruf kecil dan tanda hubung/kebab-case atau deskriptif singkat (contoh: `berita.js`, `school.css`, `hero-1.jpg`)."
- **Esensi & Penjelasan:** Konvensi penamaan yang seragam menghindarkan kebingungan tim dan mempercepat penelusuran modul saat debugging.
- **Rujukan File:** Folder `src/components/`, `src/data/`, `src/pages/`.

---

### 2. Apa isi komentar di awal fungsimu?
- **Jawaban Langsung:** "Komentar di awal fungsi/komponen berisi deskripsi ringkas tujuan komponen, peran props yang diterima, serta konteks penggunaannya pada halaman. Di proyek versi vanilla, terdapat blok JSDoc yang menerangkan fungsi listener atau penginisiasi Swiper/AOS. Komentar ini memudahkan developer lain memahami fungsi tanpa harus membaca seluruh baris kode implementasi."
- **Esensi & Penjelasan:** Contoh di `Pagination.jsx`: komentar menerangkan bahwa komponen ini menerima prop `currentPage`, `totalPages`, `onPageChange`, dan `targetId`.
- **Rujukan File:** `src/components/common/Pagination.jsx`, `src/components/common/NewsCard.jsx`.

---

### 3. Apa gunanya komentar di tengah kode?
- **Jawaban Langsung:** "Komentar di tengah baris kode berfungsi untuk:
  1. Menjelaskan logika kalkulasi yang tidak langsung tampak (misalnya rumus slice pagination: `(currentPage - 1) * perPage`).
  2. Menandai batas bagian antar section di file CSS atau struktur JSX yang panjang (contoh: `/* Galeri */`, `/* Sidebar Berita */`).
  3. Memberikan catatan pengingat (seperti fallback handling saat peta offline)."
- **Esensi & Penjelasan:** Komentar digunakan secara proporsional untuk menjelaskan *alasan* (why), bukan sekadar mengulang apa yang sudah jelas terbaca di kode (what).
- **Rujukan File:** `public/css/school.css`, `src/pages/BeritaPage.jsx`.

---

### 4. Kenapa file dipisah menjadi css/, js/, dan images/?
- **Jawaban Langsung:** "Pemisahan ini menerapkan prinsip **Separation of Concerns (Pemisahan Tanggung Jawab)** dan tata kelola aset yang teratur:
  1. Folder `public/css/` mengkhususkan diri pada aturan presentasi dan tata visual.
  2. Folder `src/` (komponen JSX & JS) mengelola struktur, logika state, dan interaksi.
  3. Folder `public/images/` menyimpan media grafis.
  4. Folder `public/fonts/` menyimpan berkas tipografi webfont.
  Dengan pemisahan ini, proyek menjadi rapi, tidak terjadi penumpukan file, serta memudahkan konfigurasi caching aset di web server."
- **Esensi & Penjelasan:** Struktur terstruktur mencegah konflik berkas dan mempermudah kolaborasi tim programmer, desainer, dan content creator.
- **Rujukan File:** Struktur folder root proyek.

---

### 5. Kenapa data ada di folder data (atau data.js), terpisah dari komponen/skrip?
- **Catatan Jembatan:** *Asesor bertanya 'Kenapa data ada di data.js, terpisah dari script.js?'. Di proyek React kita, jelaskan padanannya di folder `src/data/`.*
- **Jawaban Langsung:** "Data dipisahkan ke dalam folder khusus `src/data/` (seperti `berita.js`, `galeri.js`, `jurusan.js`) agar terjadi **decoupling antara konten informasi dan template presentasi**. 
Keuntungannya: jika pihak sekolah ingin memperbarui nomor telepon, menambah berita baru, atau mengubah kuota siswa, kita cukup mengedit berkas data terkait tanpa khawatir merusak kode antarmuka JSX atau logika komponen. Ini juga mempersiapkan struktur proyek agar kelak mudah dihubungkan ke database/API luar."
- **Esensi & Penjelasan:** Ini adalah pola arsitektur MVC (Model-View-Controller) sederhana di sisi frontend: folder `data/` adalah Model, dan komponen JSX adalah View.
- **Rujukan File:** `src/data/site.js`, `src/data/berita.js`, `src/data/jurusan.js`.

---

### 6. Apa isi README dan untuk apa dibuat?
- **Jawaban Langsung:** "File `README.md` adalah dokumentasi resmi proyek yang memuat:
  1. Pengenalan profil sekolah SMK LPPM RI Bandung.
  2. Tujuan dan sasaran pengguna website.
  3. Daftar fitur utama dan rincian halaman.
  4. Daftar teknologi yang digunakan beserta versinya.
  5. Panduan instalasi dan instruksi eksekusi (`npm install`, `npm.cmd run dev`, `npm.cmd run build`).
  6. Struktur direktori proyek serta pedoman pengelolaan konten.
  Tujuannya adalah sebagai petunjuk operasional bagi penguji, asesor, maupun pengembang lain yang ingin menjalankan, memelihara, atau mengembangkan website ini di masa mendatang."
- **Esensi & Penjelasan:** README yang profesional mencerminkan standar rekayasa perangkat lunak yang matang.
- **Rujukan File:** `README.md`.

---

### 7. Kenapa urutan script atau impor di proyek penting?
- **Catatan Jembatan:** *Di HTML klasik urutan `<script>` menentukan dependensi. Di React/Vite, jelaskan peran ES module import dan urutan pemanggilan CSS di `index.html`.*
- **Jawaban Langsung:** "Urutan pemanggilan sangat menentukan ketersediaan dependensi dan hirarki penimpaan (specificity cascade):
  1. **Pada file CSS di `index.html`:** `bootstrap.min.css` harus dimuat sebelum `style.css` dan `school.css`. Hal ini agar aturan kustom kita di `school.css` dapat secara sah menimpa (*override*) gaya default Bootstrap.
  2. **Pada modul JavaScript:** Impor pustaka dasar (seperti `React` dan `react-router-dom`) harus dieksekusi sebelum komponen anak yang membutuhkannya dipanggil. Vite dan modul ES memastikan modul dependensi dievaluasi sebelum kode komponen berjalan."
- **Esensi & Penjelasan:** Kesalahan urutan CSS menyebabkan tampilan rusak karena style kustom tertimpa oleh library.
- **Rujukan File:** `index.html` (baris 15-20), `src/main.jsx`.

---

## Bagian E: Unit 4 — Guidelines dan Best Practices

### 1. Aturan penulisan kode apa yang kamu terapkan?
- **Jawaban Langsung:** "Saya menerapkan prinsip-prinsip berikut:
  1. **Clean Code & Self-Descriptive Naming:** Nama variabel dan fungsi jelas menggambarkan kegunaannya.
  2. **Single Responsibility Principle:** Setiap komponen React hanya menangani satu bagian tampilan tertentu (misal: `Pagination` hanya mengurus tombol navigasi halaman).
  3. **Immutability:** Tidak pernah memodifikasi state array/objek React secara langsung, melainkan menggunakan setter function atau spreading operator.
  4. **Consistent Indentation:** Menggunakan indentasi 2-spasi yang rapi dan teratur.
  5. **Semantik HTML5:** Memanfaatkan tag `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, dan `<footer>`."
- **Esensi & Penjelasan:** Aturan penulisan kode yang bersih menjamin *maintainability* (kemudahan pemeliharaan di masa depan).
- **Rujukan File:** `src/App.jsx`, `src/components/common/Pagination.jsx`.

---

### 2. Bagaimana kamu menangani error?
- **Jawaban Langsung:** "Penanganan error diterapkan di berbagai lapisan:
  1. **Validasi Input Pengguna:** Mencegah form dikirim jika data kosong atau format email tidak benar, disertai pesan peringatan langsung di UI.
  2. **Fallback UI / Graceful Degradation:** Pada komponen yang mencari data berdasarkan parameter (seperti `BeritaDetailPage`), jika artikel dengan slug terkait tidak ditemukan, sistem merender tampilan informasi bahwa berita tidak ada dan menyediakan tombol kembali.
  3. **Fallback Offline Map:** Jika iframe Google Maps gagal memuat karena jaringan offline, halaman kontak menampilkan kartu alamat alternatif yang lengkap.
  4. **Route 404:** Rute wildcard (`*`) di `App.jsx` mengarahkan pengunjung ke `NotFoundPage` jika alamat URL salah."
- **Esensi & Penjelasan:** Aplikasi yang tangguh tidak boleh menampilkan layar putih (*white screen of death*) saat terjadi kesalahan.
- **Rujukan File:** `src/pages/BeritaDetailPage.jsx`, `src/pages/KontakPage.jsx`, `src/pages/NotFoundPage.jsx`.

---

### 3. Kenapa pesan pengguna ditampilkan dengan textContent (atau JSX), bukan innerHTML?
- **Jawaban Langsung:** "Penggunaan `innerHTML` sangat berbahaya karena rentan terhadap serangan **Cross-Site Scripting (XSS)**, di mana penyerang dapat menyusupkan skrip jahat (`<script>`) ke dalam DOM. 
Di React, data yang dirender di dalam kurung kurawal `{pesan}` secara otomatis di-*escape* sebagai teks aman murni (mirip `textContent` pada DOM vanilla). Karakter seperti `<` dan `>` diubah menjadi entitas teks aman sehingga browser tidak akan mengeksekusinya sebagai kode HTML aktif."
- **Esensi & Penjelasan:** Ini adalah pertanyaan keamanan web standar industri yang wajib dipahami setiap web developer.
- **Rujukan File:** `src/components/common/NewsCard.jsx`, `src/pages/KontakPage.jsx`.

---

### 4. Bagaimana kamu menghemat resource?
- **Jawaban Langsung:** "Penghematan sumber daya dilakukan melalui:
  1. **Kompresi Font Lokal:** Menggunakan format modern `.woff2` untuk font Jost dan Marcellus yang ukuran filenya jauh lebih kecil daripada `.ttf`.
  2. **Lazy Loading Gambar:** Menyematkan atribut `loading="lazy"` pada gambar galeri dan berita agar browser hanya memuat gambar saat mendekati layar pengguna.
  3. **Asset Bundling & Minification:** Menggunakan Vite untuk meminifikasi berkas JS/CSS saat build produksi (`dist/`).
  4. **Bebas CDN Eksternal:** Seluruh CSS, font, dan icon disimpan lokal sehingga menghemat request DNS lookup ke server pihak ketiga."
- **Esensi & Penjelasan:** Optimasi performa web berdampak langsung pada kecepatan Core Web Vitals dan hemat kuota bagi pengguna ponsel.
- **Rujukan File:** `index.html`, `public/fonts/`, `src/pages/GaleriPage.jsx`.

---

### 5. Bagaimana kamu memastikan websitemu mudah dipakai (UX & Aksesibilitas)?
- **Jawaban Langsung:** "Saya menerapkan kaidah kegunaan dan aksesibilitas:
  1. **Navigasi Intuitif:** Menu jelas dengan indikator aktif yang tegas di setiap halaman.
  2. **Aksesibilitas Keyboard & Screen Reader:** Tersedia tombol skip link ('Lewati ke konten utama'), atribut `aria-label` pada tombol ikon, serta outline fokus visual (`:focus-visible`).
  3. **Responsif & Kontras:** Teks terbaca jelas dengan rasio kontras tinggi di latar belakang putih/terang.
  4. **Pemberitahuan Feedback:** Umpan balik langsung saat aksi berhasil (alert hijau pada pengiriman form)."
- **Esensi & Penjelasan:** Website yang baik harus dapat digunakan oleh semua kalangan, termasuk pengguna penyandang disabilitas atau pengguna keyboard murni.
- **Rujukan File:** `src/components/layout/Navbar.jsx`, `public/css/school.css`.

---

### 6. Apa gunanya novalidate di form?
- **Jawaban Langsung:** "Atribut `noValidate` pada tag `<form>` mematikan gelembung balon validasi bawaan browser (*default browser validation tooltip*) yang tampilannya kaku dan berbeda-beda di setiap browser. 
Dengan menonaktifkannya, kita dapat menerapkan sistem **validasi kustom kita sendiri** menggunakan state React dan class Bootstrap (`is-invalid`, `.invalid-feedback`) sehingga pesan kesalahan tampil konsisten, rapi, dan seragam di semua perangkat."
- **Esensi & Penjelasan:** Validasi kustom memberikan kendali penuh kepada developer atas teks pesan error dan posisinya di antarmuka.
- **Rujukan File:** `src/pages/KontakPage.jsx` (baris `<form noValidate onSubmit={handleSubmit}>`).

---

### 7. Apa yang terjadi kalau localStorage diblokir browser?
- **Catatan Jembatan:** *Docx menanyakan ini untuk versi yang menyimpan form/bookmark di localStorage. Jelaskan konteks proyekmu.*
- **Jawaban Langsung:** "Jika sebuah website mengandalkan `localStorage` tanpa penanganan error (try-catch), pemblokiran penyimpanan oleh browser (misalnya pada mode private/incognito ketat) akan memicu exception `DOMException: QuotaExceededError` atau `Access Denied` yang dapat menghentikan eksekusi JavaScript. 
Pada proyek website sekolah kita saat ini, **kita tidak bergantung pada `localStorage`**; seluruh state formulir dan filter dikelola langsung di memori aplikasi melalui state internal React (`useState`). Dengan demikian, website sekolah tetap berfungsi sempurna 100% meskipun browser pengguna memblokir cookies dan storage lokal."
- **Esensi & Penjelasan:** Jawaban ini sekaligus mengonfirmasi arsitektur proyekmu yang mandiri dan bebas dari ketergantungan storage rapuh.
- **Rujukan File:** `src/pages/KontakPage.jsx`.

---

## Bagian F: Unit 5 — Pemrograman Terstruktur

### 1. Tipe data apa saja yang kamu pakai?
- **Jawaban Langsung:** "Saya menggunakan seluruh tipe data primitif dan non-primitif utama JavaScript:
  1. **String:** Untuk teks judul, kategori, alamat, dan deskripsi (contoh: `"Teknik Komputer & Jaringan"`).
  2. **Number:** Untuk data angka statistik dan pagination (contoh: `students: 620`, `perPage: 12`, `currentPage: 1`).
  3. **Boolean:** Untuk status logika benar/salah (contoh: `isSubmitted: false`, `isOffline: true`).
  4. **Array:** Untuk koleksi data jamak (contoh: daftar jurusan di `jurusan.js`, daftar berita di `berita.js`).
  5. **Object:** Untuk entitas data terstruktur berpasangan key-value (contoh: konfigurasi identitas sekolah di `site.js`).
  6. **Null / Undefined:** Sebagai representasi nilai kosong awal pada state (contoh: `selected = null` saat modal galeri tertutup)."
- **Esensi & Penjelasan:** Tipe data adalah fondasi struktur data dalam logika pemrograman terstruktur.
- **Rujukan File:** `src/data/site.js`, `src/data/home.js`, `src/pages/GaleriPage.jsx`.

---

### 2. Apa beda const, let, dan var?
- **Jawaban Langsung:**
  - **`const`:** Digunakan untuk mendeklarasikan variabel yang referensi nilainya tetap (tidak dapat di-reassign), dan memiliki cakupan blok (*block-scoped*). Wajib digunakan untuk deklarasi komponen, modul import, dan state setter.
  - **`let`:** Digunakan untuk variabel yang nilainya dapat berubah atau diisi ulang (reassignable), dan memiliki cakupan blok (*block-scoped*). Cocok untuk variabel counter atau iterator perulangan.
  - **`var`:** Standar ES5 lama yang memiliki cakupan fungsi (*function-scoped*) atau global serta mengalami *hoisting*. `var` dihindari dalam standar modern karena rentan memicu bug akibat penimpaan variabel yang tidak disengaja."
- **Esensi & Penjelasan:** Di seluruh codebase proyek React ini, kita hanya menggunakan `const` dan `let` sesuai standar modern ES6+.
- **Rujukan File:** `src/pages/BeritaPage.jsx`, `src/components/common/Pagination.jsx`.

---

### 3. Tunjukkan percabangan dan jelaskan fungsinya.
- **Jawaban Langsung:** "Percabangan digunakan untuk mengambil keputusan alur program. Contoh di proyek:
  1. **Ternary Operator di JSX (`kondisi ? aksiA : aksiB`):** Pada `GaleriPage.jsx` untuk menampilkan modal ketika `selected` terisi, atau pada `BeritaPage.jsx` untuk menampilkan pesan 'Berita tidak ditemukan' jika `filteredArticles.length === 0`.
  2. **If-Else Statement:** Pada `KontakPage.jsx` fungsi `validateForm()`, sistem memeriksa `if (!formData.name.trim())` untuk menetapkan pesan error nama wajib diisi.
  3. **Short-circuit Evaluation (`&&`):** Menampilkan tombol atau elemen kondisional hanya jika syarat terpenuhi."
- **Esensi & Penjelasan:** Percabangan memungkinkan antarmuka beradaptasi secara dinamis terhadap data dan interaksi pengguna.
- **Rujukan File:** `src/pages/KontakPage.jsx`, `src/pages/BeritaPage.jsx`, `src/pages/GaleriPage.jsx`.

---

### 4. Tunjukkan perulangan dan jelaskan fungsinya.
- **Jawaban Langsung:** "Perulangan digunakan untuk merender koleksi data array menjadi kumpulan elemen antarmuka. 
Di React, perulangan standar dilakukan menggunakan fungsi array tingkat tinggi **`.map()`**. Contoh di `HomePage.jsx` dan `BeritaPage.jsx`:
```jsx
{visibleArticles.map((article) => (
  <NewsCard key={article.id} {...article} layout="horizontal" />
))}
```
Fungsinya adalah mengulang setiap objek artikel di dalam array dan merendernya menjadi kartu visual `NewsCard` secara otomatis tanpa menulis kode HTML berulang kali."
- **Esensi & Penjelasan:** `.map()` mengembalikan array baru berisi elemen JSX yang siap dirender oleh React virtual DOM. Setiap elemen yang di-loop wajib memiliki atribut `key` unik.
- **Rujukan File:** `src/pages/BeritaPage.jsx`, `src/pages/GaleriPage.jsx`.

---

### 5. Apa fungsi continue pada perulangan ekskul?
- **Catatan Jembatan:** *Docx menyebut pernyataan `continue` pada perulangan ekskul di JavaScript klasik. Di React modern, jelaskan padanannya yang lebih bersih.*
- **Jawaban Langsung:** "Pada perulangan klasik (seperti `for` atau `while`), perintah **`continue`** berfungsi untuk melompati sisa instruksi pada iterasi saat ini dan langsung melompat ke iterasi berikutnya (misalnya melewati ekskul yang tidak sesuai kategori yang dipilih). 
Namun pada arsitektur React modern yang kita gunakan, pendekatan imperatif tersebut digantikan dengan metode deklaratif yang lebih bersih yaitu **`Array.prototype.filter()`**:
```javascript
const filtered = selectedCategory === "Semua" 
  ? items 
  : items.filter(item => item.category === selectedCategory);
```
Pendekatan ini menyaring data terlebih dahulu sehingga perulangan `.map()` hanya merender elemen yang benar-benar lolos saringan."
- **Esensi & Penjelasan:** Jawaban ini menjelaskan konsep `continue` sekaligus mendemonstrasikan keunggulan paradigma fungsional di React.
- **Rujukan File:** `src/pages/EkstrakurikulerPage.jsx`, `src/pages/GaleriPage.jsx`.

---

### 6. Apa beda fungsi dan prosedur? Mana contohnya di kodemu?
- **Jawaban Langsung:**
  - **Fungsi (Function):** Blok kode terstruktur yang menerima input dan **mengembalikan nilai balik (*return value*)** kepada pemanggilnya. Contoh di proyek: fungsi komponen `NewsCard` atau `Pagination` yang mengembalikan elemen JSX, atau helper filter yang mengembalikan array hasil saringan.
  - **Prosedur (Procedure):** Blok kode yang mengeksekusi serangkaian instruksi tindakan tanpa mengembalikan nilai (hanya menimbulkan efek samping atau *side-effect*). Contoh di proyek: event handler `handleSubmit` di `KontakPage.jsx` atau pemanggilan `AOS.init()` di `App.jsx` yang hanya menjalankan tugas inisialisasi."
- **Esensi & Penjelasan:** Di JavaScript semua dideklarasikan dengan kata kunci `function` atau arrow function, namun perbedaan fungsionalnya terletak pada ada/tidaknya nilai `return`.
- **Rujukan File:** `src/components/common/NewsCard.jsx` (fungsi), `src/pages/KontakPage.jsx` (prosedur handler).

---

### 7. Apa itu parameter? Tunjukkan contohnya.
- **Jawaban Langsung:** "Parameter adalah variabel penampung input yang didefinisikan pada deklarasi sebuah fungsi untuk menerima data dari luar saat fungsi tersebut dipanggil (argumen). 
Contohnya pada komponen `Pagination.jsx`:
```jsx
export default function Pagination({ currentPage, totalPages, onPageChange, targetId }) { ... }
```
Di sini `currentPage`, `totalPages`, `onPageChange`, dan `targetId` adalah parameter (props di React) yang memungkinkan komponen pagination ini dipakai ulang (*reusable*) di Galeri maupun di Berita dengan data yang berbeda-beda."
- **Esensi & Penjelasan:** Parameter menciptakan modularitas; tanpa parameter, sebuah fungsi hanya bisa bekerja dengan data statis yang terpaku (*hardcoded*).
- **Rujukan File:** `src/components/common/Pagination.jsx`.

---

### 8. Tunjukkan arraymu: isinya apa, berapa panjangnya, bagaimana mengaksesnya?
- **Jawaban Langsung:** "Contoh array terpusat ada di `src/data/berita.js`:
  - **Isinya:** Kumpulan objek artikel berita, di mana setiap objek memiliki atribut `id`, `slug`, `title`, `category`, `date`, `summary`, `image`, dan `content`.
  - **Panjangnya:** Saat ini terdapat **3 artikel utama** (panjang array `articles.length === 3`).
  - **Cara Mengaksesnya:** Menggunakan notasi indeks seperti `articles[0]` untuk mengambil artikel pertama, atau menggunakan loop iterasi fungsional seperti `articles.map(article => article.title)` untuk membaca seluruh judul artikel."
- **Esensi & Penjelasan:** Tunjukkan bahwa array diatur secara rapi dan seragam di dalam layer data.
- **Rujukan File:** `src/data/berita.js`, `src/data/jurusan.js`.

---

### 9. Bagaimana program menambah data ke array?
- **Jawaban Langsung:** "Dalam JavaScript standar, data ditambahkan dengan metode `.push()`. Namun dalam **React yang menganut prinsip immutability**, kita tidak boleh memodifikasi array state asli secara langsung. 
Kita menambah data dengan membuat array baru menggunakan **spread operator (`...`)**:
```javascript
const tambahBerita = (beritaBaru) => {
  setArticles(prevArticles => [...prevArticles, beritaBaru]);
};
```
Sintaks `[...prevArticles, beritaBaru]` menyalin seluruh elemen lama lalu menyematkan elemen baru di ujungnya, memicu React merender ulang UI secara tepat."
- **Esensi & Penjelasan:** Memahami immutability adalah pembeda krusial antara pemrogram pemula dan profesional dalam ekosistem React.
- **Rujukan File:** Konsep state di `src/pages/BeritaPage.jsx`.

---

### 10. Bagaimana program membaca dan menyimpan data?
- **Jawaban Langsung:** "Dalam arsitektur website sekolah kita:
  1. **Membaca Data:** Komponen membaca data dari modul berkas `src/data/*.js` melalui sintaks `import { newsPage } from "../data/berita";`. Data kemudian diproses menggunakan method array (`.filter()`, `.slice()`, `.map()`) untuk ditampilkan ke layar.
  2. **Menyimpan Data:** Input pengguna (seperti teks pencarian atau isian form kontak) disimpan di memori kerja browser menggunakan state React (`useState`). Untuk skala produksi berkelanjutan, data form dikirimkan melalui protokol HTTP POST ke RESTful API / database sekolah."
- **Esensi & Penjelasan:** Alur data bersifat satu arah (unidirectional data flow), khas arsitektur modern.
- **Rujukan File:** `src/pages/BeritaPage.jsx`, `src/pages/KontakPage.jsx`.

---

### 11. Apa beda == dan ===?
- **Jawaban Langsung:** 
  - **`==` (Loose Equality / Kesetaraan Lemah):** Membandingkan dua nilai dengan melakukan konversi tipe data otomatis (*type coercion*) jika tipenya berbeda. Contoh: `'5' == 5` bernilai `true`.
  - **`===` (Strict Equality / Kesetaraan Ketat):** Membandingkan nilai sekaligus tipe datanya tanpa konversi tipe. Contoh: `'5' === 5` bernilai `false` karena string tidak sama dengan number.
  Di seluruh proyek ini, saya selalu menggunakan `===` untuk mencegah bug konversi tak terduga."
- **Esensi & Penjelasan:** Standar clean code JavaScript selalu mewajibkan operator strict equality (`===`).
- **Rujukan File:** `src/pages/BeritaPage.jsx`, `src/pages/GaleriPage.jsx`.

---

### 12. Apa fungsi event.preventDefault()?
- **Jawaban Langsung:** "Perintah `event.preventDefault()` berfungsi untuk **membatalkan aksi bawaan (*default behavior*) browser** terhadap suatu kejadian (event). 
Contoh di proyek kita:
1. Pada pengiriman formulir kontak (`onSubmit` di `KontakPage.jsx`), perintah ini mencegah browser melakukan reload/refresh halaman dan mencegah pengiriman parameter ke URL.
2. Pada tautan galeri (`onClick` di `GaleriPage.jsx`), perintah ini mencegah browser langsung membuka berkas gambar di tab baru sehingga jendela modal popup React kita dapat dibuka secara mulus."
- **Esensi & Penjelasan:** Dalam SPA (Single Page Application), menjaga agar halaman tidak reload adalah kunci utama kehalusan performa.
- **Rujukan File:** `src/pages/KontakPage.jsx`, `src/pages/GaleriPage.jsx`.

---

### 13. Apa fungsi DOMContentLoaded (atau padanannya di React)?
- **Catatan Jembatan:** *Docx bertanya fungsi `DOMContentLoaded`. Di React, jelaskan peran siklus hidup komponen dan `useEffect`.*
- **Jawaban Langsung:** "Pada JavaScript murni, event `DOMContentLoaded` dipasang pada objek `document` untuk memastikan skrip baru dieksekusi setelah struktur pohon HTML selesai dibaca secara lengkap tanpa harus menunggu gambar atau stylesheet selesai dimuat. 
Di ekosistem React, padanannya adalah **`useEffect(() => { ... }, [])` dengan array dependensi kosong**. Hook ini menjamin logika di dalamnya (seperti inisialisasi AOS scroll animation atau sinkronisasi hash URL) baru dijalankan setelah komponen berhasil di-*mount* ke DOM browser."
- **Esensi & Penjelasan:** Ini menunjukkan pemahaman mendalam tentang siklus render peramban dan siklus hidup komponen React.
- **Rujukan File:** `src/App.jsx` (baris inisialisasi `AOS.init()`), `src/pages/JurusanPage.jsx`.

---

### 14. Jelaskan alur validasi form langkah demi langkah.
- **Jawaban Langsung:** "Alur validasi pada `KontakPage.jsx` berjalan sebagai berikut:
  1. Pengguna mengetik data pada input Nama, Email, Subjek, dan Pesan, yang tersimpan di state `formData`.
  2. Saat tombol 'Kirim Pesan' ditekan, event `handleSubmit` terpicu dan memanggil `event.preventDefault()`.
  3. Sistem menjalankan fungsi `validateForm()`:
     - Memeriksa apakah `name` kosong -> set error 'Nama lengkap wajib diisi'.
     - Memeriksa format regex `email` -> jika tidak ada `@` atau domain, set error 'Format email tidak valid'.
     - Memeriksa apakah `subject` kosong -> set error 'Subjek pesan wajib dipilih'.
     - Memeriksa panjang string `message` -> jika kurang dari 10 karakter, set error 'Pesan minimal 10 karakter'.
  4. Jika ditemukan error, state `errors` diperbarui dan pesan merah muncul di bawah masing-masing kolom input.
  5. Jika tidak ada error, state `isSubmitted` diubah menjadi `true`, banner sukses hijau muncul, dan form dikosongkan kembali."
- **Esensi & Penjelasan:** Validasi dilakukan secara terstruktur, memberikan perlindungan integritas data sekaligus pengalaman pengguna yang ramah.
- **Rujukan File:** `src/pages/KontakPage.jsx`.

---

### 15. Apa yang terjadi kalau array kosong?
- **Jawaban Langsung:** "Jika sebuah array kosong (`length === 0`), perulangan `.map()` tidak akan menghasilkan error; ia hanya akan mengembalikan array kosong dan React tidak merender elemen anak apa pun. 
Namun untuk menjaga kenyamanan pengunjung, program kita menangani kondisi ini dengan percabangan kondisional: jika hasil pencarian atau penyaringan array menghasilkan nol item, website merender **Fallback / Empty State UI** berupa kotak informasi yang ramah, contohnya: *'Tidak ada berita yang cocok dengan kata kunci Anda.'*"
- **Esensi & Penjelasan:** Menampilkan empty state yang informatif mencegah kebingungan pengunjung yang mungkin mengira website rusak saat data tidak ditemukan.
- **Rujukan File:** `src/pages/BeritaPage.jsx` (kondisi `filteredArticles.length === 0`).

---

## Bagian G: Unit 6 — Menggunakan Library Pre-Existing

### 1. Library apa yang kamu pakai dan kenapa?
- **Jawaban Langsung:** "Saya menggunakan empat library utama:
  1. **Bootstrap 5.3.3:** Untuk kerangka grid 12 kolom responsif, styling tombol, form controls, dan navigasi offcanvas.
  2. **React Router 7 (`react-router-dom`):** Mengelola navigasi halaman dinamis berbasis client-side SPA tanpa reload.
  3. **Swiper 11:** Library slider performa tinggi yang mendukung sentuhan (touch swipe), transisi fade, dan autoplay untuk banner beranda.
  4. **AOS (Animate On Scroll) 2.3.4:** Memberikan efek animasi transisi halus pada kartu dan judul saat layar digulir.
  Alasannya adalah mempercepat waktu pengembangan, menjamin stabilitas fungsional, dan memenuhi standar antarmuka modern."
- **Esensi & Penjelasan:** Menggunakan library teruji jauh lebih efisien daripada membangun sistem grid atau touch carousel dari nol.
- **Rujukan File:** `package.json`, `index.html`.

---

### 2. Apa lisensi Bootstrap? Bolehkah dipakai di sekolah?
- **Jawaban Langsung:** "Bootstrap dirilis di bawah lisensi **MIT License**. Lisensi ini sangat terbuka dan permisif, mengizinkan siapa saja untuk menggunakan, memodifikasi, menggabungkan, mempublikasikan, mendistribusikan, dan bahkan menggunakannya untuk keperluan komersial maupun non-komersial secara gratis, asalkan pemberitahuan hak cipta aslinya tetap disertakan. Jadi, Bootstrap **100% legal dan sangat boleh** digunakan untuk website sekolah."
- **Esensi & Penjelasan:** Pemahaman tentang lisensi perangkat lunak (open-source compliance) adalah poin penting dalam uji kompetensi kejuruan.
- **Rujukan File:** `README.md` (bagian Kredit Lisensi).

---

### 3. Kenapa memilih versi 5.3.3? Bagaimana memastikan tidak usang?
- **Catatan Jembatan:** *Jika asesor bertanya kenapa tidak versi 5.3.8 seperti di lembar docx, jelaskan versi rilis resminya.*
- **Jawaban Langsung:** "Versi 5.3.3 dipilih karena merupakan versi stabil resmi (*stable LTS release*) dari Bootstrap 5 yang terbukti matang, bebas bug kritis, mendukung mode tema modern (CSS variables), dan tidak lagi memiliki ketergantungan pada jQuery. Versi 5.3.8 tidak dirilis oleh tim resmi Bootstrap (rilis 5.3 berakhir di minor stabil 5.3.3). 
Untuk memastikan library tidak usang, kita dapat mengecek berkala melalui perintah `npm.cmd outdated` di terminal atau memeriksa rilis resmi di repositori GitHub Bootstrap."
- **Esensi & Penjelasan:** Jawaban ini membuktikan kamu cermat terhadap rilis software nyata di industri dan tidak menelan mentah-mentah typo dokumen.
- **Rujukan File:** `public/css/bootstrap.min.css`, `README.md`.

---

### 4. Library ini bergantung pada apa?
- **Jawaban Langsung:** "Bootstrap versi 5 dibangun dengan arsitektur mandiri:
  - **Untuk CSS:** Tidak memiliki dependensi eksternal; murni memanfaatkan fitur native CSS3 modern (CSS Flexbox, CSS Grid, dan CSS Custom Properties/Variables).
  - **Untuk JavaScript interaktifnya:** Bootstrap 5 hanya bergantung pada library positioning bernama **Popper.js** (yang sudah dibundel di dalam file `bootstrap.bundle.min.js`). Berbeda dengan Bootstrap versi 3 dan 4, Bootstrap 5 **sama sekali tidak bergantung pada jQuery**."
- **Esensi & Penjelasan:** Ketiadaan dependensi jQuery membuat waktu render halaman jauh lebih cepat dan ringan.
- **Rujukan File:** `index.html`, `package.json`.

---

### 5. Kenapa file disimpan lokal, tidak memakai CDN?
- **Jawaban Langsung:** "File CSS Bootstrap, font Jost/Marcellus, dan gambar disimpan lokal di folder `public/` dengan tiga alasan utama:
  1. **Kemampuan Berjalan Offline (Offline Capability):** Website dapat dibuka, diuji, dan dipresentasikan di ruang ujian sekolah meskipun koneksi internet mati atau terputus total.
  2. **Kecepatan & Privasi:** Mengurangi latency akibat round-trip DNS lookup ke server pihak ketiga serta mematuhi privasi pengguna karena tidak melacak IP pengunjung.
  3. **Stabilitas & Reliabilitas:** Menghindarkan website dari risiko tampilan rusak (*broken layout*) apabila server CDN publik mengalami downtime atau diblokir oleh firewall jaringan sekolah."
- **Esensi & Penjelasan:** Ini adalah keunggulan arsitektural utama yang kita bangun di proyek ini.
- **Rujukan File:** `index.html`, `public/css/`, `public/fonts/`.

---

### 6. Bagaimana cara memperbarui library?
- **Jawaban Langsung:** "Jika library dikelola melalui package manager npm, cara memperbaruinya adalah:
  1. Menjalankan perintah `npm.cmd outdated` untuk memeriksa paket yang memiliki versi terbaru.
  2. Menjalankan `npm.cmd update [nama-paket]` (misal: `npm.cmd update swiper`) untuk update minor yang kompatibel.
  3. Menguji ulang website dengan `npm.cmd run dev` dan `npm.cmd run build` guna memastikan tidak ada fitur yang patah (*breaking changes*).
  Untuk file vendor lokal di `public/css/`, kita cukup mengunduh berkas distribusi resmi terbaru lalu menggantikan berkas lama."
- **Esensi & Penjelasan:** Proses update perangkat lunak harus selalu diiringi dengan regression testing.
- **Rujukan File:** `package.json`.

---

### 7. Bagaimana kodemu terhubung dengan library?
- **Jawaban Langsung:** "Keterhubungan kode dengan library dilakukan melalui dua cara:
  1. **Melalui Link Stylesheet di `index.html`:** Berkas CSS lokal seperti `/css/bootstrap.min.css` dan `/css/vendor.css` dihubungkan melalui tag `<link rel="stylesheet">` di bagian `<head>`.
  2. **Melalui ES Module Import di JSX:** Pustaka logika seperti `react-router-dom` diimpor di bagian atas file kode:
  ```jsx
  import { BrowserRouter, Routes, Route } from "react-router-dom";
  import AOS from "aos";
  ```
  Lalu diinisialisasi melalui siklus hidup komponen menggunakan hook `useEffect`."
- **Esensi & Penjelasan:** Menjelaskan perbedaan pemuatan styling global vs modul JavaScript fungsional.
- **Rujukan File:** `index.html`, `src/App.jsx`.

---

### 8. Komponen Bootstrap apa saja yang kamu pakai?
- **Jawaban Langsung:** "Komponen Bootstrap yang diimplementasikan meliputi:
  1. **Grid System & Container:** `.container`, `.row`, `.col-12`, `.col-md-6`, `.col-lg-3`, serta `.g-3`/`.g-4`.
  2. **Navbar & Offcanvas Drawer:** Untuk navigasi responsif mobile.
  3. **Card Component:** `.card`, `.card-body`, `.card-title` pada berita dan profil.
  4. **Form Controls:** `.form-control`, `.form-select`, `.is-invalid`, `.invalid-feedback`.
  5. **Buttons & Badges:** `.btn`, `.btn-primary`, `.btn-outline-dark`, `.badge`, `.bg-primary`.
  6. **Utilities:** Spacing (`py-5`, `mb-3`), Text alignment (`text-center`), Flexbox utilities (`d-flex`, `align-items-center`, `justify-content-between`)."
- **Esensi & Penjelasan:** Komponen-komponen ini membentuk kerangka tata letak yang konsisten di semua halaman.
- **Rujukan File:** Seluruh berkas di `src/components/` dan `src/pages/`.

---

### 9. Apa risikonya memakai library dari pihak lain?
- **Jawaban Langsung:** "Risiko utama memakai library pihak ketiga adalah:
  1. **Kelebihan Ukuran Berkas (*Code Bloat*):** Mengimpor pustaka besar padahal hanya memakai sedikit fiturnya dapat memperlambat waktu muat awal website.
  2. **Risiko Kerentanan Keamanan (*Vulnerabilities*):** Bug keamanan di library dapat berimbas pada aplikasi kita jika library tidak dipelihara dengan baik.
  3. **Ketergantungan & *Breaking Changes*:** Pembaruan versi besar (*major update*) dari library dapat merusak sintaks kode yang sudah kita tulis sebelumnya jika tidak ada kompatibilitas mundur."
- **Esensi & Penjelasan:** Menyadari trade-off antara kecepatan pengembangan dan beban dependensi adalah tanda kedewasaan programmer.

---

### 10. Kalau Bootstrap dihapus, apa yang terjadi?
- **Jawaban Langsung:** "Jika file CSS Bootstrap dihapus:
  1. Sistem kisi 12 kolom akan runtuh sehingga seluruh kartu, kolom berita, dan formulir akan melorot menjadi satu kolom penuh yang berantakan ke bawah (*layout collapse*).
  2. Seluruh gaya tombol, field form input, dan badge akan kembali ke gaya dasar polos bawaan browser yang sangat primitif.
  3. Namun demikian, **seluruh logika fungsional JavaScript/React tetap berjalan**: data tetap bisa difilter, pencarian berita tetap berjalan di memori, dan routing tetap berganti halaman karena logika bisnis terpisah dari layer visual."
- **Esensi & Penjelasan:** Penjelasan ini kembali menegaskan pemahamanmu tentang pemisahan layer logika dan layer presentasi.
- **Rujukan File:** `index.html`, `public/css/bootstrap.min.css`.

---

## Bagian H: Studi Kasus Troubleshooting

### 1. Kasus: Gambar di galeri tidak muncul (broken image).
- **Langkah Investigasi & Solusi:**
  1. Buka Chrome DevTools (F12) -> tab **Console** dan tab **Network** (filter: *Img*) untuk memeriksa apakah ada error `404 Not Found`.
  2. Periksa path URL gambar di berkas `src/data/galeri.js`. Pastikan path diawali garis miring absolut `/images/nama-file.jpg` karena berkas fisik tersimpan di folder `public/images/`.
  3. Periksa ejaan nama berkas dan huruf besar/kecil (case-sensitivity), contoh: pastikan `.jpg` bukan `.JPG` atau `.png`.
  4. Pastikan file gambar fisiknya benar-benar ada di dalam direktori `public/images/`.
- **Rujukan File:** `src/data/galeri.js`, folder `public/images/`.

---

### 2. Kasus: Carousel slider, dropdown, atau tombol hamburger tidak bergerak.
- **Langkah Investigasi & Solusi:**
  1. Buka Console DevTools untuk memeriksa apakah ada error JavaScript runtime yang menghentikan eksekusi kode.
  2. Pada slider Swiper: periksa apakah komponen Swiper sudah terpasang dengan benar di `HeroSlider.jsx` dan file `/css/swiper-bundle.min.css` terpasang di `index.html`.
  3. Pada menu mobile (hamburger): periksa atribut data Bootstrap pada tombol hamburger di `Navbar.jsx`, yaitu `data-bs-toggle="offcanvas"` dan target ID-nya `data-bs-target="#navOffcanvas"` sudah cocok dengan ID kontainer drawer offcanvas.
  4. Pastikan skrip interaksi tidak terblokir oleh error sintaks di komponen lain.
- **Rujukan File:** `src/components/layout/Navbar.jsx`, `src/components/home/HeroSlider.jsx`.

---

### 3. Kasus: Berita di Beranda kosong.
- **Langkah Investigasi & Solusi:**
  1. Periksa berkas `src/data/berita.js`. Pastikan array `articles` memiliki elemen data dan diekspor dengan benar (`export const newsPage = { ... }`).
  2. Periksa pemanggilan komponen di `src/components/home/LatestNews.jsx`: pastikan prop data diterima dengan benar dan fungsi `.slice(0, 3)` membaca array yang valid.
  3. Berikan console log: `console.log("Data Berita:", articles)` sebelum pemetaan `.map()` untuk memastikan data tidak bernilai `undefined`.
- **Rujukan File:** `src/data/berita.js`, `src/components/home/LatestNews.jsx`.

---

### 4. Kasus: Form kosong tetap diterima, atau pesan error tidak muncul.
- **Langkah Investigasi & Solusi:**
  1. Buka `src/pages/KontakPage.jsx`. Periksa tag `<form>`: pastikan atribut `noValidate` aktif dan handler `onSubmit={handleSubmit}` terpasang.
  2. Di dalam `handleSubmit`: pastikan baris pertama memanggil `event.preventDefault()` agar halaman tidak reload sebelum validasi selesai.
  3. Periksa fungsi `validateForm()`: pastikan setiap kondisi memeriksa string kosong menggunakan `.trim()` (misal: `!formData.name.trim()`).
  4. Pastikan elemen error feedback di JSX terhubung dengan class `.is-invalid` dan menampilkan teks `{errors.name}`.
- **Rujukan File:** `src/pages/KontakPage.jsx`.

---

### 5. Kasus: Tampilan rusak di HP (muncul scrollbar horizontal / overflow).
- **Langkah Investigasi & Solusi:**
  1. Buka DevTools mode responsive ponsel (Ctrl+Shift+M).
  2. Temukan elemen yang menyebabkan lebar bocor dengan menjalankan skrip konsol:
  ```javascript
  document.querySelectorAll('*').forEach(el => el.scrollWidth > document.documentElement.clientWidth && console.log(el))
  ```
  3. Solusi umum:
     - Tambahkan class `img-fluid` atau styling `max-width: 100%; height: auto;` pada gambar.
     - Pastikan tidak ada elemen yang memiliki lebar tetap (`width: 800px;`) tanpa pembungkus responsif.
     - Bungkus tabel data di `ProfilPage.jsx` dengan class `.table-responsive`.
- **Rujukan File:** `public/css/school.css`, `src/pages/ProfilPage.jsx`.

---

### 6. Kasus: Sekolah minta menu baru bernama "Prestasi".
- **Langkah Solusi:**
  1. Tambahkan item navigasi di `src/data/navigation.js` pada array `mainMenu`:
     `{ label: "Prestasi", path: "/prestasi" }`.
  2. Buat halaman baru di `src/pages/PrestasiPage.jsx`.
  3. Daftarkan rute baru di `src/App.jsx`:
     `<Route path="/prestasi" element={<PrestasiPage />} />`.
  4. Menu otomatis muncul di navbar desktop dan drawer mobile tanpa mengubah struktur komponen navigasi.
- **Rujukan File:** `src/data/navigation.js`, `src/App.jsx`.

---

### 7. Kasus: Bootstrap merilis versi baru, atau versi lama punya celah keamanan.
- **Langkah Solusi:**
  1. Baca catatan rilis (*Release Notes & Migration Guide*) resmi Bootstrap untuk mengetahui apakah ada *breaking changes*.
  2. Unduh file `bootstrap.min.css` versi yang sudah ditambal, lalu timpa berkas di `public/css/bootstrap.min.css`.
  3. Buka seluruh halaman website untuk memeriksa apakah sistem grid, tombol, atau navigasi mengalami pergeseran visual.
  4. Jalankan `npm.cmd run build` untuk memverifikasi proses build tetap aman.
- **Rujukan File:** `public/css/bootstrap.min.css`.

---

### 8. Kasus: Jumlah siswa berubah dari 600 menjadi 650.
- **Langkah Solusi:**
  1. Buka `src/data/home.js`.
  2. Cari objek statistik di dalam `stats`:
     Ubah nilai `value: "600"` (atau angka terkait) menjadi `value: "650"`.
  3. Simpan berkas; Vite Hot Module Replacement (HMR) akan langsung memperbarui angka animasi di Beranda tanpa perlu reload.
- **Rujukan File:** `src/data/home.js`.

---

### 9. Kasus: Pesan dari form kontak tidak pernah sampai ke sekolah.
- **Langkah Investigasi & Solusi:**
  1. Jelaskan kepada asesor bahwa form kontak saat ini bekerja di sisi frontend (client-side demo) yang memverifikasi input dan menampilkan status sukses lokal.
  2. Agar pesan benar-benar terkirim ke email atau server tata usaha sekolah:
     - Siapkan endpoint backend API (misalnya Express/PHP mailer) atau integrasikan dengan layanan form handling pihak ketiga (seperti Formspree / EmailJS).
     - Di dalam fungsi `handleSubmit` di `KontakPage.jsx`, ganti penanganan lokal dengan pemanggilan `fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) })`.
- **Rujukan File:** `src/pages/KontakPage.jsx`.

---

### 10. Kasus: Halaman terasa lambat dibuka.
- **Langkah Investigasi & Solusi:**
  1. Jalankan audit **Google Lighthouse** di DevTools untuk melihat skor performa.
  2. Periksa ukuran berkas gambar di `public/images/`: lakukan kompresi gambar resolusi tinggi ke format WebP terkompresi.
  3. Pastikan seluruh gambar non-hero memakai atribut `loading="lazy"`.
  4. Gunakan code splitting berbasis `React.lazy()` dan `Suspense` pada rute di `App.jsx` agar browser hanya mengunduh kode halaman yang sedang dibuka oleh pengguna.
- **Rujukan File:** `src/App.jsx`, `vite.config.js`.

---

## Bagian I: Perubahan Langsung / Live Demo

*Bagian ini adalah instruksi aksi langsung jika asesor menyuruhmu mengedit kode di depan mereka. Hafalkan letak file dan barisnya!*

### 1. Asesor: "Ubah jumlah guru menjadi 50."
- **File:** `src/data/home.js` DAN `src/data/profil.js`.
- **Langkah:**
  1. Buka `src/data/home.js`, temukan bagian `stats`:
     ```javascript
     { value: 53, suffix: "+", label: "Guru & Staf" } // Ganti 53 menjadi 50
     ```
  2. Buka `src/data/profil.js`, temukan tabel profil `identityTable`:
     ```javascript
     { label: "Jumlah Guru", value: "56 orang" } // Ganti menjadi "50 orang"
     ```
  3. Simpan, tunjukkan perubahan di Beranda dan Profil.

---

### 2. Asesor: "Tambahkan satu berita baru."
- **File:** `src/data/berita.js`.
- **Langkah:**
  Buka `src/data/berita.js`, tambahkan satu objek di dalam array `articles`:
  ```javascript
  {
    id: "berita-4",
    slug: "workshop-ai-smk-lppm-ri",
    title: "Workshop Pengenalan Kecerdasan Buatan bagi Siswa",
    category: "Prestasi",
    date: "10 November 2026",
    summary: "Siswa SMK LPPM RI antusias mengikuti pelatihan dasar AI dan pemanfaatan teknologi masa depan.",
    image: "/images/berita-1.jpg",
    content: "SMK LPPM RI Bandung mengadakan pelatihan komprehensif..."
  },
  ```
  Simpan, buka `/berita` -> Berita baru langsung tampil di daftar!

---

### 3. Asesor: "Tambahkan satu ekstrakurikuler."
- **File:** `src/data/ekstrakurikuler.js`.
- **Langkah:**
  Buka `src/data/ekstrakurikuler.js`, tambahkan objek di dalam array `items`:
  ```javascript
  {
    id: "ekskul-13",
    name: "Robotika & IoT",
    category: "Akademik",
    coach: "Bpk. Rian Hidayat, S.Kom",
    schedule: "Jumat, 15.30 - 17.00 WIB",
    image: "/images/galeri-1.jpg",
    description: "Klub perakitan perangkat robot cerdas dan sensor berbasis microcontroller."
  },
  ```
  Simpan, buka `/ekstrakurikuler` -> Kartu Robotika langsung muncul.

---

### 4. Asesor: "Tambahkan satu foto galeri."
- **File:** `src/data/galeri.js`.
- **Langkah:**
  Buka `src/data/galeri.js`, tambahkan objek dengan ID unik baru di dalam array `items`:
  ```javascript
  {
    id: "galeri-17",
    category: "Prestasi",
    image: "/images/galeri-1.jpg",
    title: "Juara 1 LKS Tingkat Kota",
    alt: "Juara 1 LKS Tingkat Kota"
  },
  ```
  Simpan, buka `/galeri` -> Foto otomatis bertambah.

---

### 5. Asesor: "Ganti warna menu menjadi hijau."
- **File:** `public/css/school.css`.
- **Langkah:**
  Buka `public/css/school.css`, tambahkan di bagian paling bawah:
  ```css
  .navbar-nav .nav-link {
    color: #198754 !important; /* Warna hijau success Bootstrap */
  }
  .navbar-nav .nav-link:hover,
  .navbar-nav .nav-link.active {
    color: #0f5132 !important; /* Hijau tua saat aktif/hover */
  }
  ```
  Simpan, tunjukkan navbar seketika berubah warna hijau.

---

### 6. Asesor: "Tampilkan 6 foto di Beranda, bukan 4."
- **File:** `src/components/home/GalleryPreview.jsx`.
- **Langkah:**
  Buka `src/components/home/GalleryPreview.jsx`, cari pemotongan array `.slice(0, 4)`:
  ```jsx
  // Ubah angka 4 menjadi 6:
  {items.slice(0, 6).map((item) => (
  ```
  Simpan, di Beranda sekarang muncul 6 foto di section galeri.

---

### 7. Asesor: "Ubah syarat pesan menjadi minimal 20 karakter."
- **File:** `src/pages/KontakPage.jsx`.
- **Langkah:**
  Buka `src/pages/KontakPage.jsx`, cari validasi panjang pesan di `validateForm()`:
  ```javascript
  // Ubah angka 10 menjadi 20:
  if (!formData.message.trim()) {
    newErrors.message = "Pesan wajib diisi.";
  } else if (formData.message.trim().length < 20) {
    newErrors.message = "Pesan minimal 20 karakter.";
  }
  ```
  Simpan, coba ketik pesan 15 karakter di form kontak -> Peringatan minimal 20 karakter akan muncul!

---

### 8. Asesor: "Buat angka naik lebih lambat."
- **File:** `src/components/common/StatsCounter.jsx`.
- **Langkah:**
  Buka `src/components/common/StatsCounter.jsx`, cari konstanta `duration`:
  ```javascript
  // Default biasanya 1500 atau 2000 ms. Gandakan agar lebih lambat:
  const duration = 4000; // Ubah menjadi 4000 ms (4 detik)
  ```
  Simpan, gulir ke section statistik di Beranda -> Animasi angka berputar perlahan selama 4 detik.

---

### 9. Asesor: "Tambahkan satu baris di tabel profil."
- **File:** `src/data/profil.js`.
- **Langkah:**
  Buka `src/data/profil.js`, cari array `identityTable` (atau sejenisnya), tambahkan baris baru:
  ```javascript
  {
    label: "Status Akreditasi",
    value: "Terakreditasi A (Unggul)"
  },
  ```
  Simpan, buka `/profil` -> Tabel data sekolah memuat baris akreditasi baru.

---

### 10. Asesor: "Tambahkan slide keempat di carousel."
- **File:** `src/data/home.js`.
- **Langkah:**
  Buka `src/data/home.js`, cari array `heroSlides`:
  ```javascript
  {
    image: "/images/hero-1.jpg",
    title: "Mencetak Lulusan Siap Kerja & Wirausaha",
    subtitle: "Pendidikan Vokasi Berbasis Industri",
    link: "/jurusan",
    buttonText: "Lihat Jurusan"
  },
  ```
  Simpan, buka Beranda -> Carousel sekarang berputar dengan 4 slide.

---

### 11. Asesor: "Sengaja buat error lalu perbaiki."
- **Langkah Peragaan:**
  1. Buka `src/pages/BeritaPage.jsx`.
  2. Hapus satu kurung kurawal penutup `}` di baris akhir fungsi komponen atau ubah `import React` menjadi nama salah.
  3. Buka browser: layar seketika menampilkan overlay merah Vite Compiler Error (*Syntax Error*).
  4. Jelaskan tenang ke asesor: "Ini adalah syntax error kompilasi Vite karena blok kode tidak seimbang."
  5. Kembalikan kurung kurawal `}` dan simpan. Browser langsung kembali hijau normal (*Hot Reloaded*).

---

### 12. Asesor: "Jelaskan satu fungsi baris demi baris."
- **Pilih Komponen:** `src/components/common/Pagination.jsx`.
- **Penjelasan Lancar ke Asesor:**
  - Baris 1: `export default function Pagination({ currentPage, totalPages, onPageChange, targetId })`
    *"Ini deklarasi komponen yang menerima 4 props: halaman aktif, total halaman, fungsi callback saat halaman diklik, dan ID elemen tujuan scroll."*
  - Baris 2: `if (totalPages <= 1) return null;`
    *"Kondisi guard: jika total halaman hanya 1, sembunyikan seluruh tombol pagination karena tidak diperlukan navigasi."*
  - Baris 3: `const pages = Array.from({ length: totalPages }, (_, index) => index + 1);`
    *"Membuat deret array angka halaman dari 1 sampai total halaman, misalnya `[1, 2]`."*
  - Baris 4: Fungsi `handleClick(page)`:
    *"Memanggil `onPageChange(page)` untuk mengubah state di parent, lalu melakukan smooth scroll ke elemen ID target agar layar otomatis naik ke atas."*
  - Bagian JSX:
    *"Merender tombol 'Sebelumnya' dengan kondisi `disabled={currentPage === 1}`, merender tombol nomor halaman dengan class `.active` jika cocok, dan merender tombol 'Berikutnya'."*

---

## Bagian Tambahan: Pertanyaan Lisan HTML

### 1. Tag apa untuk pindah baris? Perlu tag penutup?
- **Jawaban:** Tag **`<br>`** (Line Break). Tidak memerlukan tag penutup karena merupakan *void element* (empty tag). Pada penulisan JSX/XHTML ditulis secara self-closing: `<br />`.

### 2. Type input apa yang menampilkan gambar sebagai tombol kirim?
- **Jawaban:** **`<input type="image" src="tombol.png" alt="Kirim">`**. Input ini berfungsi persis seperti tombol submit namun berwujud gambar grafis.

### 3. Type input apa untuk pilihan yang hanya boleh satu?
- **Jawaban:** **`<input type="radio">`**. Agar hanya bisa dipilih satu dari beberapa opsi, seluruh input radio dalam kelompok tersebut harus memiliki nilai atribut **`name` yang sama**.

### 4. Apa fungsi atribut action pada form?
- **Jawaban:** Atribut `action` menentukan **URL tujuan berkas atau endpoint server** yang akan menerima dan memproses data formulir saat tombol kirim ditekan (contoh: `<form action="/proses-kontak.php" method="POST">`).

### 5. Atribut apa untuk menggabungkan kolom tabel? Dan baris?
- **Jawaban:**
  - Menggabungkan kolom: **`colspan="jumlah_kolom"`** (Column Span).
  - Menggabungkan baris: **`rowspan="jumlah_baris"`** (Row Span).

### 6. Tag apa yang membuka sebuah dokumen HTML?
- **Jawaban:** Diawali dengan deklarasi tipe dokumen **`<!DOCTYPE html>`** untuk memberitahu browser bahwa dokumen menggunakan standar HTML5, kemudian dibuka dengan tag utama **`<html>`** (biasanya disertai atribut bahasa: `<html lang="id">`).

### 7. Editor teks paling sederhana untuk menulis HTML?
- **Jawaban:** **Notepad** (di sistem operasi Windows) atau TextEdit (di macOS). Untuk pengembangan profesional, kita menggunakan modern code editor seperti **Visual Studio Code**.

### 8. Bagaimana memberi warna pada teks dengan `<font>`?
- **Jawaban:** Menggunakan atribut color: **`<font color="red">Teks Berwarna</font>`**. *(Catatan: Beritahu asesor bahwa tag `<font>` sudah deprecated/usang di HTML5, dan standar modern wajib menggunakan CSS: `<span style="color: red;">`)*.

### 9. Atribut apa untuk warna latar tabel?
- **Jawaban:** Atribut **`bgcolor`**, contoh: `<table bgcolor="#f8f9fa">` atau `<td bgcolor="yellow">`. *(Standar modern HTML5 menggunakan CSS: `background-color`)*.

### 10. Apa itu web hosting?
- **Jawaban:** **Web hosting** adalah layanan penyewaan komputer server yang selalu terhubung ke jaringan internet 24 jam tanpa henti, berfungsi sebagai tempat penyimpanan berkas-berkas website (HTML, CSS, JS, gambar, database) agar website tersebut dapat diakses oleh siapa saja di seluruh dunia melalui jaringan internet.

---

<p align="center"><strong>KUNCI SUKSES UJIAN BESOK:</strong></p>
<p align="center"><em>Tarik napas, jawab dengan tenang, sebutkan nama file proyek saat menjelaskan, dan percaya diri. Kamu yang memiliki proyek ini, kamu yang memahami setiap baris kodenya! Selamat beristirahat dan sukses sertifikasinya!</em></p>
