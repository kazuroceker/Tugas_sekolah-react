# SMK LPPM RI BANDUNG — Website Sekolah

Website profil sekolah berbasis **React + Bootstrap** yang dikonversi dari template statis **Kaira**. Tampilan, warna, font, dan komponen visual dipertahankan sama seperti desain aslinya, tetapi struktur kode dipecah menjadi komponen React yang modular dan seluruh konten dipusatkan di lapisan data.

Aplikasi berjalan sebagai **Single Page Application (SPA)** dan seluruh aset (CSS, gambar, font) disimpan lokal agar bisa dipakai **offline**. Satu-satunya resource eksternal adalah peta Google Maps di halaman kontak, dan halaman tersebut memiliki fallback saat offline.

---

## Teknologi

| Bagian | Teknologi |
| --- | --- |
| UI | React 19 |
| Build tool | Vite 8 |
| Routing | React Router 7 (`BrowserRouter`) |
| CSS framework | Bootstrap 5.3.3 (file CSS lokal) |
| Slider | Swiper 11.2.10 |
| Animasi scroll | AOS 2.3.4 |
| Bahasa | JavaScript / JSX |

CSS Kaira (`public/css/style.css`) menjadi dasar desain dan telah disesuaikan (komentar header/TOC dihapus, ukuran `.icon-arrow` diperkecil. Penyesuaian tambahan proyek ada di `public/css/school.css`.

---

## Kebutuhan

- Node.js 18 atau lebih baru
- npm

> Di Windows PowerShell, jika `npm` diblokir Execution Policy, gunakan `npm.cmd` / `npx.cmd`.

---

## Menjalankan Proyek

```bash
npm install       # pasang dependensi (sekali saja)
npm run dev       # server development, biasanya http://localhost:5173
npm run build     # build produksi ke folder dist/
npm run preview   # menjalankan hasil build, biasanya http://localhost:4173
```

---

## Struktur Proyek

```
smk-react/
├─ index.html                 # kerangka HTML + urutan CSS Kaira
├─ vite.config.js
├─ package.json
├─ public/
│  ├─ css/                    # bootstrap, fonts, vendor, swiper, style.css, school.css
│  ├─ fonts/                  # font lokal
│  └─ images/                 # seluruh gambar website
├─ src/
│  ├─ main.jsx                # entry React + import Bootstrap JS
│  ├─ App.jsx                 # router, inisialisasi AOS
│  ├─ components/
│  │  ├─ common/              # komponen UI yang dipakai berulang
│  │  ├─ home/                # section khusus halaman beranda
│  │  └─ layout/              # Navbar, Footer, Layout, ScrollManager, BackToTop
│  ├─ data/                   # SEMUA konten website (single source of truth)
│  ├─ hooks/                  # usePageMeta (judul & meta description)
│  └─ pages/                  # satu file per halaman
└─ docs/
   ├─ PANDUAN-PRESENTASI.md    # panduan demo & penjelasan kode untuk presentasi
   ├─ BELAJAR-REACT.md         # materi belajar React + cookbook kustomisasi
   └─ ROUTING-DEEP-DIVE.md     # pendalaman cara kerja routing (URL, hash, 404)
```

---

## Routing

| URL | Halaman | Komponen |
| --- | --- | --- |
| `/` | Beranda | `HomePage` |
| `/profil` | Profil Sekolah | `ProfilPage` |
| `/jurusan` | Kompetensi Keahlian | `JurusanPage` |
| `/ekstrakurikuler` | Ekstrakurikuler | `EkstrakurikulerPage` |
| `/galeri` | Galeri | `GaleriPage` |
| `/kontak` | Kontak | `KontakPage` |
| `/berita` | Berita & Pengumuman | `BeritaPage` |
| `/berita/ppdb` | Detail berita PPDB | `BeritaDetailPage` |
| `/berita/lomba` | Detail berita prestasi | `BeritaDetailPage` |
| `/berita/kunjungan-industri` | Detail berita kegiatan | `BeritaDetailPage` |
| `*` (slug tidak dikenal) | 404 | `NotFoundPage` |

Semua halaman dibungkus `Layout` (Navbar + `<main>` + Footer + tombol kembali ke atas). Navbar memakai tautan internal React Router, bukan tautan `.html`.

---

## Lapisan Data (`src/data/`)

Seluruh teks, gambar, tautan, dan daftar isi berada di folder ini. Halaman hanya **membaca data** lalu merender komponen, sehingga mengganti konten tidak perlu menyentuh JSX.

| File | Isi |
| --- | --- |
| `site.js` | Identitas sekolah, alamat, telepon, WhatsApp, email, jam, sosial media, URL peta |
| `navigation.js` | Menu utama, submenu, tombol PPDB, tautan footer |
| `home.js` | Konten beranda (hero, sambutan, statistik, program, mitra, dll.) |
| `profil.js` | Sambutan kepala sekolah, sejarah, keunggulan, visi-misi, struktur, tabel data, fasilitas |
| `jurusan.js` | Empat jurusan beserta deskripsi, karier, dan fasilitas |
| `ekstrakurikuler.js` | Daftar ekstrakurikuler + filter kategori |
| `galeri.js` | Daftar foto galeri + filter kategori |
| `berita.js` | Halaman berita, pengumuman, agenda, dan tiga artikel lengkap |
| `kontak.js` | Info kontak, konfigurasi form, teks fallback peta |
| `notFound.js` | Konten halaman 404 |

Contoh pola data:

```js
// src/data/site.js
export const site = {
  name: "SMK LPPM RI BANDUNG",
  address: "Jl. Ters. Nilem Barat No.49 B, ...",
  // ...
};
```

```js
// src/pages/BeritaPage.jsx
import { articles, newsPage } from "../data/berita.js";
```

---

## Styling

Urutan stylesheet di `index.html` **wajib dipertahankan** agar tampilan identik dengan template Kaira:

1. `bootstrap.min.css`
2. `fonts.css`
3. `vendor.css` (termasuk animasi AOS)
4. `swiper-bundle.min.css`
5. `style.css` (CSS dasar Kaira, dengan sedikit penyesuaian proyek)
6. `school.css` (tambahan proyek: brand, galeri, peta fallback, aksesibilitas)

Karena `school.css` dimuat terakhir, penyesuaian kecil di sana menimpa aturan sebelumnya tanpa mengubah palet, font, atau desain dasar.

---

## Fitur Utama

- **Beranda**: hero slider (Swiper), statistik animasi (CountUp), program, ekstrakurikuler, berita, galeri, dan mitra.
- **Profil**: sambutan, sejarah, keunggulan, visi & misi, struktur organisasi, tabel data, fasilitas. Mendukung tautan anchor (`/profil#visi-misi`, dst.).
- **Jurusan**: tab interaktif (TKJ, RPL, DKV, AKL) yang sinkron dengan hash URL, mis. `/jurusan#rpl`.
- **Ekstrakurikuler & Galeri**: filter kategori tanpa reload; galeri memakai modal Bootstrap (buka–tutup–buka lagi).
- **Berita**: pencarian langsung (judul, kategori, tanggal, ringkasan) + pesan kosong, pengumuman, agenda, dan halaman detail artikel.
- **Kontak**: validasi form Bootstrap, pesan sukses (mode demo), info kontak, peta Google Maps, dan fallback saat offline.
- **Lainnya**: tombol kembali ke atas, menu mobile offcanvas, animasi AOS, skip link, dan dukungan `prefers-reduced-motion`.

---

## Aset & Mode Offline

- Semua CSS, font, dan gambar berada di `public/` dan dimuat dengan path absolut (`/images/...`, `/css/...`).
- Tidak ada CDN, Google Fonts, atau aset eksternal lain.
- Peta memakai iframe Google Maps (butuh internet). Saat offline, halaman kontak otomatis menampilkan panel alamat + tautan peta sebagai gantinya.
- Tautan WhatsApp, Instagram, YouTube, dan Google Maps tetap berupa tautan eksternal yang memang dibuka di tab baru.

---

## Catatan Penting

- **Form kontak bersifat demo**: data tidak dikirim ke server; submit yang valid hanya menampilkan pesan sukses lalu mereset form.
- **Deployment SPA**: karena memakai `BrowserRouter`, server hosting perlu aturan *fallback* ke `index.html` agar refresh di `/profil` atau `/berita/ppdb` tidak 404. Konfigurasi Netlify **belum** ditambahkan.
- **Build**: `npm run build` menghasilkan folder `dist/` yang siap diunggah ke hosting statis.
- **Konten**: nama sekolah, alamat, kontak, dan sebagian data identitas (NPSN, jumlah guru/siswa, dsb.) adalah data contoh yang dapat diganti kapan saja lewat `src/data/`.

---

## Verifikasi

- `npm run build` berhasil tanpa error.
- Semua rute utama dan rute 404 berhasil dirender.
- Skenario interaksi utama lulus (filter, modal galeri, pencarian berita, validasi form, fallback peta, tab jurusan, back-to-top, menu mobile).
- Tidak ada error console saat navigasi.

Dokumentasi tambahan:

- [`docs/PANDUAN-PRESENTASI.md`](docs/PANDUAN-PRESENTASI.md) — panduan demo & penjelasan kode untuk presentasi.
- [`docs/BELAJAR-REACT.md`](docs/BELAJAR-REACT.md) — materi belajar React dari source code ini + cookbook kustomisasi.
- [`docs/ROUTING-DEEP-DIVE.md`](docs/ROUTING-DEEP-DIVE.md) — pendalaman routing: pencocokan URL, `Link`, `useParams`, `useLocation`, hash, 404, dan deploy SPA.
