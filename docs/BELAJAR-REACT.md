# Belajar React dari Source Code Website Sekolah

Panduan ini dibuat untuk kamu yang sudah paham **dasar JavaScript** dan ingin memahami cara kerja project `smk-react`, lalu bisa mengkustomnya sendiri.

Cara terbaik memakai dokumen ini:

1. Baca bagian mental model dulu (bagian 1–3).
2. Buka file yang disebut sambil membaca.
3. Coba ubah-ubah kecil, lihat hasilnya di browser.
4. Baru masuk ke bagian kustomisasi (bagian 9).

---

## Daftar Isi

1. [Cara menjalankan project](#1-cara-menjalankan-project)
2. [Mental model React dalam 5 menit](#2-mental-model-react-dalam-5-menit)
3. [JSX cheat sheet](#3-jsx-cheat-sheet)
4. [Struktur project ini](#4-struktur-project-ini)
5. [Alur render dari awal sampai halaman tampil](#5-alur-render-dari-awal-sampai-halaman-tampil)
6. [Props: cara mengirim data ke komponen](#6-props-cara-mengirim-data-ke-komponen)
7. [State & event: membuat halaman interaktif](#7-state--event-membuat-halaman-interaktif)
8. [useEffect: kode yang berjalan di luar render](#8-useeffect-kode-yang-berjalan-di-luar-render)
9. [Routing: pindah halaman tanpa reload](#9-routing-pindah-halaman-tanpa-reload)
10. [Lapisan data: tempat mengubah konten](#10-lapisan-data-tempat-mengubah-konten)
11. [Styling: Bootstrap, CSS Kaira, dan school.css](#11-styling-bootstrap-css-kaira-dan-schoolcss)
12. [Cookbook kustomisasi](#12-cookbook-kustomisasi)
13. [Debugging & error umum](#13-debugging--error-umum)
14. [Latihan bertahap](#14-latihan-bertahap)

---

## 1. Cara menjalankan project

Buka terminal di folder project:

```bash
cd "D:\Project\Tugas Sekolah\smk-react"
npm install        # sekali saja
npm run dev        # mode belajar (ada hot reload)
```

Buka alamat yang muncul, biasanya `http://localhost:5173`.

Saat `npm run dev` menyala, setiap kali file disimpan browser otomatis memperbarui tampilan. Ini paling enak untuk belajar.

Kalau `npm` diblokir PowerShell, pakai:

```bash
npm.cmd run dev
```

Untuk melihat hasil final seperti saat dikumpulkan:

```bash
npm.cmd run build
npm.cmd run preview
```

---

## 2. Mental model React dalam 5 menit

### Komponen = fungsi yang mengembalikan tampilan

```jsx
function Sapaan() {
  return <h1>Halo, dunia!</h1>;
}
```

Itu sudah sebuah komponen React. Nama file dan nama fungsi biasanya diawali huruf kapital (`Sapaan`, `HeroSlider`, `NewsCard`).

### Tampilan = hasil dari data

React menganut pola:

```
tampilan = f(data)
```

Kalau data berubah, React menghitung ulang tampilan dan memperbarui bagian yang perlu saja (bukan reload halaman).

### Tiga konsep inti

| Konsep | Arti sederhana | Contoh di project |
| --- | --- | --- |
| **Component** | Potongan UI yang bisa dipakai ulang | `NewsCard`, `FilterGroup` |
| **Props** | Data yang dikirim dari luar, hanya dibaca | `<NewsCard article={article} />` |
| **State** | Data milik komponen yang bisa berubah | `const [query, setQuery] = useState("")` |

### Render ulang

Komponen dijalankan ulang setiap kali **state**-nya berubah atau **props**-nya berubah. Karena itu di dalam komponen kita hanya menulis "tampilan seharusnya seperti apa", bukan menyuruh DOM satu per satu.

Contoh pola pikir:

```jsx
// Bukan: "sembunyikan kartu ini"
// Tapi: "kalau tidak cocok, beri class d-none"
<div className={cocok ? "" : "d-none"}>...</div>
```

Inilah yang dimaksud **declarative UI**.

---

## 3. JSX cheat sheet

JSX mirip HTML, tapi ada beberapa perbedaan penting.

### a. `class` menjadi `className`

```jsx
<div className="container">...</div>
```

### b. Ekspresi JavaScript memakai `{ }`

```jsx
<h2>{title}</h2>
<p>{2 + 3}</p>
<p>{site.name}</p>
```

### c. Atribut dinamis juga memakai `{ }`

```jsx
<img src={article.image} alt={article.imageAlt} />
```

### d. `map` untuk membuat daftar, wajib ada `key`

```jsx
{hero.slides.map((slide) => (
  <div className="swiper-slide hero-slide" key={slide.title}>
    ...
  </div>
))}
```

`key` membantu React mengenali item mana yang berubah. Gunakan nilai yang unik dan stabil (slug, id, atau judul).

### e. Kondisional

```jsx
{description ? <p>{description}</p> : null}
```

```jsx
<div className={`col-md-4${hidden ? " d-none" : ""}`}>...</div>
```

### f. Tag kosong harus ditutup

```jsx
<img ... />
<br />
<input ... />
```

### g. `for` menjadi `htmlFor`

```jsx
<label htmlFor="nama">Nama</label>
<input id="nama" />
```

### h. Komentar di dalam JSX

```jsx
{/* ini komentar */}
```

### i. Style inline memakai objek

```jsx
<h1 style={{ fontSize: "clamp(4rem, 12vw, 8rem)", lineHeight: 1 }}>
```

Perhatikan dua kurung kurawal: yang luar adalah "mulai ekspresi JS", yang dalam adalah objek JS.

---

## 4. Struktur project ini

```
src/
├─ main.jsx        → titik masuk React
├─ App.jsx         → daftar rute + inisialisasi AOS
├─ components/
│  ├─ layout/      → Navbar, Footer, Layout, ScrollManager, BackToTop
│  ├─ common/      → komponen kecil yang dipakai banyak halaman
│  └─ home/        → section khusus beranda
├─ pages/          → satu file = satu halaman
├─ data/           → semua konten (teks, gambar, menu)
└─ hooks/          → usePageMeta (judul tab & meta description)
```

Cara memilih: kalau sesuatu dipakai di lebih dari satu halaman → `components/common`. Kalau hanya untuk satu halaman → bisa jadi komponen lokal atau section di folder terkait.

---

## 5. Alur render dari awal sampai halaman tampil

### `index.html`

Hanya kerangka. Di dalamnya ada `<div id="root"></div>` dan stylesheet Kaira. React akan mengisi `#root`.

### `src/main.jsx`

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

- `createRoot` mengambil elemen `#root`.
- `render` memasang `<App />` ke dalamnya.
- `import "bootstrap"` memuat JavaScript Bootstrap (dropdown, offcanvas, collapse, modal).
- `StrictMode` membantu menemukan bug saat development (lihat bagian 8).

### `src/App.jsx`

```jsx
<BrowserRouter>
  <ScrollManager />
  <AOSManager />
  <Routes>
    <Route element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="profil" element={<ProfilPage />} />
      ...
      <Route path="berita/:slug" element={<BeritaDetailPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  </Routes>
</BrowserRouter>
```

- `BrowserRouter` mengaktifkan routing berbasis URL.
- `Layout` membungkus semua halaman: Navbar di atas, Footer di bawah.
- `Route element={<Layout />}` tanpa `path` disebut **layout route**; anak-anaknya tampil di dalam `<Outlet />` milik Layout.

### `src/components/layout/Layout.jsx`

```jsx
<a href="#main-content" className="skip-link">Lewati ke konten utama</a>
<Navbar />
<main id="main-content" tabIndex="-1">
  <Outlet />
</main>
<Footer />
<BackToTop />
```

`<Outlet />` adalah "lubang" tempat halaman aktif dirender.

### Halaman

Misalnya `HomePage.jsx` menyusun section:

```jsx
<HeroSlider />
<WelcomeSection />
<StatsSection />
...
```

Setiap section membaca data dari `src/data/home.js`.

---

## 6. Props: cara mengirim data ke komponen

Contoh `SectionIntro`:

```jsx
// src/components/common/SectionIntro.jsx
export default function SectionIntro({ kicker, title, description }) {
  return (
    <div className="row justify-content-center text-center mb-4" data-aos="fade-up">
      <div className="col-lg-8">
        <p className="text-uppercase fs-6 text-secondary mb-2">{kicker}</p>
        <h2 className="section-title mb-3">{title}</h2>
        {description ? <p className="mb-0">{description}</p> : null}
      </div>
    </div>
  );
}
```

Dipakai di halaman:

```jsx
<SectionIntro
  kicker="Informasi Sekolah"
  title="Berita & Pengumuman"
  description="Ikuti kabar terbaru..."
/>
```

Atau dengan spread object:

```jsx
<SectionIntro {...intro} />
```

Artinya: kalau `intro = { kicker, title, description }`, semua properti itu dikirim sebagai props.

### Props itu read-only

Jangan mengubah props di dalam komponen. Kalau perlu data yang berubah, gunakan state.

### Default value

```jsx
export default function NewsCard({ article, delay = 0, hidden = false }) {
```

Kalau `delay` tidak dikirim, nilainya `0`.

---

## 7. State & event: membuat halaman interaktif

### `useState`

```jsx
import { useState } from "react";

const [query, setQuery] = useState("");
```

- `query` = nilai saat ini.
- `setQuery` = fungsi untuk mengubah nilai.
- `""` = nilai awal.

Saat `setQuery("prestasi")` dipanggil, React merender ulang komponen dengan `query` baru.

### Contoh nyata: pencarian berita

```jsx
const [query, setQuery] = useState("");
const keyword = query.toLowerCase().trim();

<input
  type="search"
  value={query}
  onChange={(event) => setQuery(event.target.value)}
/>
```

Pola **controlled input**: nilai input dikendalikan state. Setiap ketikan memanggil `setQuery`, lalu tampilan dihitung ulang.

### Contoh nyata: filter

```jsx
const [activeFilter, setActiveFilter] = useState("all");

<FilterGroup
  options={filters}
  active={activeFilter}
  onChange={setActiveFilter}
  targetId="ekskul-grid"
/>
```

Di dalam `FilterGroup`, tombol memanggil `onChange`:

```jsx
onClick={(event) => {
  event.preventDefault();
  onChange(option.value);
}}
```

Lalu halaman menentukan item mana yang tampil:

```jsx
const matches = activeFilter === "all" || item.category === activeFilter;
<div className={`col-md-6 col-lg-4${matches ? "" : " d-none"}`}>
```

### Event handler

```jsx
<button onClick={() => setShowSuccess(true)}>Kirim</button>
```

Kalau butuh event asli browser:

```jsx
onChange={(event) => setQuery(event.target.value)}
```

### Aturan penting

- Jangan mengubah state langsung: `query = "x"` ❌
- Selalu lewat setter: `setQuery("x")` ✅

---

## 8. useEffect: kode yang berjalan di luar render

Render harus "murni": hanya menghitung tampilan. Hal-hal seperti mengambil data, memasang event listener, atau membuat instance library dilakukan di `useEffect`.

### Pola dasar

```jsx
useEffect(() => {
  // kode yang dijalankan setelah komponen tampil

  return () => {
    // cleanup: dijalankan sebelum effect berikutnya / saat komponen hilang
  };
}, []);
```

Array dependency di akhir menentukan kapan effect dijalankan:

| Dependency | Kapan jalan |
| --- | --- |
| `[]` | sekali setelah tampil |
| `[query]` | setiap `query` berubah |
| tanpa array | setiap render (jarang dipakai) |

### Contoh: Swiper di `HeroSlider`

```jsx
useEffect(() => {
  const element = swiperRef.current;
  if (!element) return undefined;

  const instance = new Swiper(element, {
    loop: true,
    effect: "fade",
    autoplay: { delay: 6500 },
    // ...
  });

  return () => {
    instance.destroy(true, true);
  };
}, []);
```

- `useRef` dipakai untuk mendapatkan elemen DOM.
- Swiper dibuat sekali setelah elemen ada.
- Cleanup menghancurkan instance saat komponen dilepas.

### Kenapa dulu gambar hero sempat hilang di `npm run dev`?

Ini contoh nyata pentingnya memahami effect dan cleanup.

1. Gambar hero dulu dipasang lewat inline style `background-image`.
2. `StrictMode` di development sengaja menjalankan effect dua kali: pasang → cleanup → pasang lagi.
3. Cleanup memanggil `destroy(true, true)`. Parameter kedua membuat Swiper menghapus **semua atribut `style`** di slide, termasuk `background-image` dari React.
4. Saat effect kedua berjalan, React tidak memasang ulang `background-image` karena props tidak berubah.
5. Hasilnya: slide kosong. Di build produksi effect hanya jalan sekali, jadi bug tidak terlihat.

Solusinya: gambar dirender sebagai elemen `<img>` di dalam slide, bukan lewat inline style yang bisa dihapus library.

```jsx
<div className="swiper-slide hero-slide" key={slide.title}>
  <img className="hero-slide-image" src={slide.image} alt="" aria-hidden="true" />
  <div className="container">...</div>
</div>
```

Pelajaran:

- Hati-hati memberi library kontrol atas atribut yang juga dipakai React.
- `StrictMode` bukan gangguan; ia membantu menemukan bug seperti ini.
- Cleanup harus mengembalikan kondisi sebersih mungkin.

### Contoh: AOS di `App.jsx`

```jsx
useEffect(() => {
  AOS.init({ duration: 1000, once: true });
}, []);

useEffect(() => {
  AOS.refreshHard();
}, [pathname]);
```

Effect pertama menginisialisasi sekali. Effect kedua menyegarkan animasi setiap rute berubah.

### Contoh: meta judul halaman

```jsx
useEffect(() => {
  document.title = title;
  setMeta("name", "description", description);
}, [title, description]);
```

Ini cara mengubah `<title>` dan meta description per halaman.

---

## 9. Routing: pindah halaman tanpa reload

Library: `react-router-dom`.

> Pendalaman khusus routing (pencocokan URL, `Link` vs `<a>`, `useParams`, `useLocation`, hash, tab jurusan, 404, dan SPA fallback) ada di [`ROUTING-DEEP-DIVE.md`](ROUTING-DEEP-DIVE.md).

### Komponen penting

| Komponen | Fungsi |
| --- | --- |
| `BrowserRouter` | Membaca URL browser |
| `Routes` / `Route` | Menentukan komponen untuk tiap path |
| `Link` | Navigasi internal tanpa reload |
| `useParams` | Mengambil bagian dinamis URL |
| `useLocation` | Mengambil `pathname`, `hash`, `search` |
| `useNavigate` | Pindah halaman lewat kode |

### Link, bukan `<a href>`

```jsx
import { Link } from "react-router-dom";

<Link to="/profil">Profil Sekolah</Link>
```

Kalau memakai `<a href="/profil">`, browser akan melakukan reload penuh dan React kehilangan state.

### Route dinamis

```jsx
<Route path="berita/:slug" element={<BeritaDetailPage />} />
```

```jsx
const { slug } = useParams();
const article = articleBySlug[slug];
if (!article) return <NotFoundPage />;
```

### Hash untuk section tertentu

```jsx
<Link to="/profil#visi-misi">Visi & Misi</Link>
```

`ScrollManager` akan menggulir ke elemen dengan `id="visi-misi"`.

### Rute 404

```jsx
<Route path="*" element={<NotFoundPage />} />
```

---

## 10. Lapisan data: tempat mengubah konten

Semua konten ada di `src/data/`. Ini sengaja dipisah supaya:

- halaman tetap fokus pada tampilan;
- konten mudah dicari dan diganti;
- tidak ada teks tersebar di banyak file.

### Contoh `site.js`

```js
export const site = {
  name: "SMK LPPM RI BANDUNG",
  tagline: "Unggul - Berkarakter - Siap Kerja",
  address: "Jl. Ters. Nilem Barat No.49 B, ...",
  phone: {
    display: "+62 882002227066",
    local: "0882002227066",
    href: "tel:+62882002227066",
  },
  // ...
};
```

Dipakai di mana saja:

```jsx
import { site } from "../data/site.js";
```

### Contoh data daftar

```js
export const articles = [
  {
    slug: "ppdb",
    path: "/berita/ppdb",
    category: "PPDB",
    date: "5 Januari 2026",
    title: "PPDB 2026/2027 Resmi Dibuka",
    excerpt: "...",
    author: "Tim Humas SMK LPPM RI BANDUNG",
    image: "/images/berita-ppdb.jpg",
    imageAlt: "...",
    paragraphs: ["...", "..."],
    points: ["...", "..."],
  },
];
```

Halaman tinggal melakukan `map`:

```jsx
{articles.map((article, index) => (
  <NewsCard article={article} delay={index * 100} key={article.slug} />
))}
```

### Peta file data

| File | Isi |
| --- | --- |
| `site.js` | Identitas global, kontak, sosial media, URL peta |
| `navigation.js` | Menu dan tautan footer |
| `home.js` | Semua konten beranda |
| `profil.js` | Profil, visi-misi, struktur, fasilitas |
| `jurusan.js` | Empat jurusan |
| `ekstrakurikuler.js` | Daftar ekstrakurikuler + filter |
| `galeri.js` | Daftar foto + filter |
| `berita.js` | Berita, pengumuman, agenda, artikel |
| `kontak.js` | Info kontak dan form |
| `notFound.js` | Konten 404 |

---

## 11. Styling: Bootstrap, CSS Kaira, dan school.css

### Urutan CSS di `index.html`

```html
<link rel="stylesheet" href="/css/bootstrap.min.css">
<link rel="stylesheet" href="/css/fonts.css">
<link rel="stylesheet" href="/css/vendor.css">
<link rel="stylesheet" href="/css/swiper-bundle.min.css">
<link rel="stylesheet" href="/css/style.css">
<link rel="stylesheet" href="/css/school.css">
```

Urutan ini penting. File yang dimuat belakangan menimpa aturan sebelumnya.

- `bootstrap.min.css` → grid, tombol, utilitas.
- `style.css` → desain asli Kaira. **Jangan diubah** kalau ingin tampilan tetap sama.
- `school.css` → tambahan proyek. Di sinilah kamu boleh menambah style baru.

### Memakai class Bootstrap

```jsx
<div className="container">
  <div className="row g-4">
    <div className="col-md-6 col-lg-4">...</div>
  </div>
</div>
```

### Menambah style sendiri

Tambahkan di akhir `public/css/school.css`:

```css
.kartu-favorit {
  border: 1px solid var(--bs-border-color);
  padding: 1rem;
}
```

Lalu pakai:

```jsx
<div className="kartu-favorit">...</div>
```

### Mengubah warna dengan aman

Jangan mengedit `style.css`. Timpa variabel Bootstrap di `school.css`:

```css
:root {
  --bs-primary: #8c907e;
}
```

Periksa dulu variabel yang dipakai desain agar tidak merusak tampilan lain.

---

## 12. Cookbook kustomisasi

### A. Mengubah nama sekolah / alamat / kontak

Edit `src/data/site.js`.

```js
name: "SMK LPPM RI BANDUNG",
address: "Alamat baru...",
email: { display: "...", href: "mailto:..." },
```

Navbar, Footer, Kontak, dan meta akan ikut berubah.

### B. Mengubah teks beranda

Edit `src/data/home.js`.

- Hero: bagian `hero.slides`.
- Statistik: array `stats`.
- Program: `programs`.

### C. Mengganti gambar hero

1. Siapkan gambar, mis. `hero-baru.jpg`.
2. Simpan di `public/images/hero-baru.jpg`.
3. Ubah di `src/data/home.js`:

```js
image: "/images/hero-baru.jpg",
```

Path selalu diawali `/images/` karena folder `public` menjadi root website.

### D. Menambah berita baru

1. Tambahkan gambar ke `public/images/`.
2. Tambahkan objek baru di array `articles` pada `src/data/berita.js`:

```js
{
  slug: "juara-basket",
  path: "/berita/juara-basket",
  category: "Prestasi",
  date: "10 Mei 2026",
  title: "Tim Basket Raih Juara 2",
  excerpt: "Tim basket sekolah berhasil meraih juara dua.",
  author: "Tim Humas SMK LPPM RI BANDUNG",
  image: "/images/berita-basket.jpg",
  imageAlt: "Tim Basket Raih Juara 2",
  paragraphs: [
    "Paragraf pertama...",
    "Paragraf kedua...",
  ],
  points: [
    "Poin penting pertama.",
    "Poin penting kedua.",
  ],
}
```

3. Halaman `/berita` dan `/berita/juara-basket` otomatis tersedia.

Catatan: `slug` harus unik dan `path` harus `/berita/<slug>`.

### E. Menambah ekstrakurikuler

Edit `src/data/ekstrakurikuler.js`. Tambahkan objek dengan `title`, `category`, deskripsi, dan ikon. Pastikan `category` sama dengan salah satu opsi filter, atau tambahkan opsi filter baru.

### F. Menambah foto galeri

Edit `src/data/galeri.js`. Setiap item butuh `id` unik, `image`, `alt`, `title`, dan `category`.

### G. Mengubah menu navigasi

Edit `src/data/navigation.js`:

```js
{ label: "Beranda", to: "/" },
{ label: "Profil Sekolah", to: "/profil", children: [...] },
```

Submenu memakai `to` dengan hash untuk section, mis. `/profil#visi-misi`.

### H. Mengubah urutan section beranda

Buka `src/pages/HomePage.jsx`, lalu pindahkan urutan komponen:

```jsx
<HeroSlider />
<WelcomeSection />
<StatsSection />
...
```

### I. Menambah halaman baru

1. Buat file `src/pages/PrestasiPage.jsx`.
2. Buat data di `src/data/prestasi.js` (opsional tapi disarankan).
3. Daftarkan rute di `src/App.jsx`:

```jsx
<Route path="prestasi" element={<PrestasiPage />} />
```

4. Tambahkan menu di `src/data/navigation.js`.

### J. Mengubah warna tombol utama

Di `public/css/school.css`:

```css
.btn-dark {
  --bs-btn-bg: #1f3d2b;
  --bs-btn-border-color: #1f3d2b;
  --bs-btn-hover-bg: #162c1f;
  --bs-btn-hover-border-color: #162c1f;
}
```

Cek dulu apakah `style.css` sudah mendefinisikan warna tersebut agar hasilnya sesuai keinginan.

### K. Menghubungkan form kontak ke backend

Sekarang form hanya demo. Di `src/pages/KontakPage.jsx`, pada `handleSubmit`, setelah validasi berhasil, ganti `setShowSuccess(true)` dengan pemanggilan API:

```jsx
const response = await fetch("/api/kontak", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ nama, email, telepon, subjek, pesan }),
});
```

Butuh backend/API terpisah; tidak bisa hanya dari frontend statis.

---

## 13. Debugging & error umum

### Melihat error

Buka **DevTools → Console** (F12). Error React biasanya menyebut nama komponen dan file.

### Error yang sering muncul

| Pesan | Penyebab umum | Solusi |
| --- | --- | --- |
| `Each child in a list should have a unique "key"` | `map` tanpa `key` | Tambahkan `key={item.id}` |
| `Objects are not valid as a React child` | Merender objek langsung | Render propertinya, mis. `{user.name}` |
| `Cannot read properties of undefined` | Data belum ada / salah nama properti | Cek `src/data` dan ejaan properti |
| `useState is not defined` | Lupa import | `import { useState } from "react"` |
| `Link is not defined` | Lupa import | `import { Link } from "react-router-dom"` |
| Halaman blank setelah refresh | Server tidak punya SPA fallback | Pakai `npm run preview` atau atur hosting |
| Gambar tidak muncul | Path salah | Harus `/images/namafile.jpg` |

### Cara cepat melacak

1. Baca nama file dan nomor baris di error.
2. Buka file tersebut.
3. `console.log(data)` sebelum dirender untuk memastikan bentuk datanya.
4. Cek apakah nama properti sama persis (huruf besar/kecil berpengaruh).

### Jangan lupa

- Simpan file → Vite otomatis reload.
- Kalau tampilan aneh, coba hard refresh (`Ctrl + Shift + R`).
- Kalau benar-benar bingung, hentikan server lalu jalankan `npm run dev` lagi.

---

## 14. Latihan bertahap

Kerjakan berurutan. Setiap latihan hanya mengubah 1–2 file.

### Latihan 1 — Ubah teks (data)

Ubah deskripsi hero pertama di `src/data/home.js`. Simpan. Lihat perubahan.

**Tujuan:** memahami bahwa konten berasal dari data.

### Latihan 2 — Ganti gambar (aset + data)

Ganti `image` hero kedua dengan gambar lain di `public/images/`.

**Tujuan:** memahami path `public`.

### Latihan 3 — Tambah kartu (array + map)

Tambahkan satu item baru di `src/data/ekstrakurikuler.js`. Pastikan muncul di halaman.

**Tujuan:** memahami `map` dan `key`.

### Latihan 4 — Ubah filter (state)

Tambahkan kategori filter baru di `src/data/ekstrakurikuler.js` dan pastikan filter berfungsi.

**Tujuan:** memahami state dan props.

### Latihan 5 — Buat komponen sendiri

Buat `src/components/common/BadgeBaru.jsx`:

```jsx
export default function BadgeBaru({ text }) {
  return <span className="badge text-bg-dark">{text}</span>;
}
```

Pakai di salah satu halaman.

**Tujuan:** memahami komponen dan props.

### Latihan 6 — Buat halaman baru

Buat halaman "Prestasi" sederhana, daftarkan rutenya, dan tambahkan ke menu.

**Tujuan:** memahami routing.

### Latihan 7 — Ambil data dari input

Buat input nama di halaman baru, simpan ke state, lalu tampilkan sapaan:

```jsx
const [nama, setNama] = useState("");
<input value={nama} onChange={(e) => setNama(e.target.value)} />
<p>Halo, {nama || "tamu"}!</p>
```

**Tujuan:** memahami controlled input.

### Latihan 8 — Effect sederhana

Tampilkan jam yang diperbarui tiap detik memakai `useEffect` + `setInterval`, dan bersihkan interval di cleanup.

**Tujuan:** memahami effect dan cleanup.

---

## Ringkasan satu halaman

- React = komponen (fungsi) + props (input) + state (data berubah).
- JSX = HTML + JavaScript. `class` → `className`, ekspresi pakai `{}`.
- `map` untuk daftar, selalu beri `key`.
- `useState` untuk data yang berubah; ubah lewat setter.
- `useEffect` untuk efek samping; selalu pikirkan cleanup.
- Routing pakai `Link`, bukan `<a href>`.
- Konten ada di `src/data/`; tampilan di `src/pages` dan `src/components`.
- Style tambahan di `public/css/school.css`; jangan ubah `style.css`.
- Kalau bingung, baca error di Console dan cek nama properti data.

Selamat belajar. Mulai dari Latihan 1, dan jangan takut merusak — selama project ini di git/backup, setiap kesalahan bisa dikembalikan.
