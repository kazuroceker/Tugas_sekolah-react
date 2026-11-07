# Routing Deep Dive — Cara Kerja Routing Website Ini

Dokumen ini membahas **routing** di project `smk-react` secara mendalam: dari file yang memasang router, cara React Router mencocokkan URL, sampai perilaku hash, tab jurusan, dan 404.

Prasyarat: kamu sudah membaca bagian dasar di [`BELAJAR-REACT.md`](BELAJAR-REACT.md), terutama bagian 2 (mental model), 7 (state), 8 (`useEffect`), dan 9 (routing dasar).

Cara memakai dokumen ini:

1. Buka project di editor.
2. Buka file yang disebut sambil membaca.
3. Jalankan `npm run dev`, lalu coba URL yang dibahas di browser.
4. Kerjakan latihan di bagian akhir.

---

## Daftar Isi

1. [Peta besar routing](#1-peta-besar-routing)
2. [Tiga aktor utama](#2-tiga-aktor-utama)
3. [Perjalanan satu klik](#3-perjalanan-satu-klik)
4. [Cara `Routes` mencocokkan URL](#4-cara-routes-mencocokkan-url)
5. [Layout route dan `<Outlet />`](#5-layout-route-dan-outlet)
6. [`Link` vs `<a>` vs `NavLink`](#6-link-vs-a-vs-navlink)
7. [`useParams`: membaca bagian dinamis URL](#7-useparams-membaca-bagian-dinamis-url)
8. [`useLocation`: membaca URL saat ini](#8-uselocation-membaca-url-saat-ini)
9. [Hash dan `ScrollManager`](#9-hash-dan-scrollmanager)
10. [Studi kasus: tab Jurusan memakai hash](#10-studi-kasus-tab-jurusan-memakai-hash)
11. [404 dua lapis](#11-404-dua-lapis)
12. [Effect yang menempel pada rute](#12-effect-yang-menempel-pada-rute)
13. [Catatan deploy `BrowserRouter`](#13-catatan-deploy-browserrouter)
14. [Checklist menambah rute baru](#14-checklist-menambah-rute-baru)
15. [Debugging routing](#15-debugging-routing)
16. [Latihan + kunci](#16-latihan--kunci)
17. [Cheat sheet](#17-cheat-sheet)

---

## 1. Peta besar routing

```
src/main.jsx
└─ <App />
   └─ <BrowserRouter>              ← menyimpan lokasi & memberi tahu komponen
      ├─ <ScrollManager />         ← atur scroll tiap pindah halaman
      ├─ <AOSManager />            ← refresh animasi tiap pindah halaman
      └─ <Routes>                  ← tabel aturan URL
         └─ <Route element={<Layout />}>     ← layout route (tanpa path)
            ├─ index            → HomePage             (/)
            ├─ profil           → ProfilPage           (/profil)
            ├─ jurusan          → JurusanPage          (/jurusan)
            ├─ ekstrakurikuler  → EkstrakurikulerPage  (/ekstrakurikuler)
            ├─ galeri           → GaleriPage           (/galeri)
            ├─ kontak           → KontakPage           (/kontak)
            ├─ berita           → BeritaPage           (/berita)
            ├─ berita/:slug     → BeritaDetailPage     (/berita/<slug>)
            └─ *                → NotFoundPage         (URL apa pun yang tak cocok)
```

Semua halaman berada **di dalam** `Layout`, jadi Navbar dan Footer selalu ada. Yang berganti hanya isi `<Outlet />`.

---

## 2. Tiga aktor utama

| Aktor | Peran | Lokasi |
| --- | --- | --- |
| `BrowserRouter` | Membaca URL browser, menyimpan `location`, memberi tahu komponen saat URL berubah | `src/App.jsx` |
| `Routes` + `Route` | Tabel "URL ini → komponen apa" | `src/App.jsx` |
| `Link`, `useLocation`, `useParams`, `useNavigate` | Membaca/mengubah URL dari dalam komponen | Navbar, halaman, `ScrollManager` |

Analogi:

- `BrowserRouter` = resepsionis yang tahu kamu sedang di ruangan mana.
- `Routes` = papan petunjuk arah.
- `Link` = pintu antar-ruangan.
- `<Outlet />` = ruangan kosong yang diisi halaman aktif.

---

## 3. Perjalanan satu klik

Misal kamu klik menu **Berita** (`<Link to="/berita">`). Urutannya:

1. `Link` **tidak** memuat ulang halaman. Ia memanggil History API browser (`pushState`), sehingga URL berubah menjadi `/berita`.
2. `BrowserRouter` mendeteksi perubahan dan menyimpan `location` baru:
   ```js
   { pathname: "/berita", search: "", hash: "", state: null }
   ```
3. `Routes` mencocokkan `/berita` dengan `<Route path="berita">`.
4. `Layout` **tetap terpasang** — Navbar, Footer, dan BackToTop tidak dibuat ulang.
5. `BeritaPage` dirender ke dalam `<Outlet />`.
6. Effect berjalan:
   - `usePageMeta` mengganti `<title>` dan meta description.
   - `AOSManager` memanggil `AOS.refreshHard()` agar animasi mengenali elemen baru.
   - `ScrollManager` menggulir ke atas (karena tidak ada hash).

**Poin kunci:** routing React menukar isi lubang, bukan memuat dokumen baru. Karena itu terasa cepat dan state aplikasi tidak hilang.

---

## 4. Cara `Routes` mencocokkan URL

Ada empat jenis aturan di project ini.

### a. `index` — path persis milik parent

```jsx
<Route index element={<HomePage />} />
```

`index` cocok ketika URL sama persis dengan path parent. Karena parent tidak punya path, `index` berarti `/`.

### b. Path statis

```jsx
<Route path="profil" element={<ProfilPage />} />
```

Cocok hanya untuk `/profil`.

### c. Path dinamis (`:slug`)

```jsx
<Route path="berita/:slug" element={<BeritaDetailPage />} />
```

Cocok untuk:

- `/berita/ppdb`
- `/berita/lomba`
- `/berita/kunjungan-industri`

Bagian setelah `/berita/` ditangkap sebagai parameter bernama `slug`.

### d. Catch-all (`*`)

```jsx
<Route path="*" element={<NotFoundPage />} />
```

Jaring terakhir: semua URL yang tidak cocok dengan route lain akan masuk ke sini.

### Urutan tidak perlu diurutkan manual

React Router memilih aturan **paling spesifik**. Untuk URL `/berita`, route statis `berita` menang atas `berita/:slug`. Jadi kamu tidak perlu khawatir soal urutan penulisan.

### Tabel pencocokan

| URL | Route yang menang | Komponen |
| --- | --- | --- |
| `/` | `index` | `HomePage` |
| `/profil` | `profil` | `ProfilPage` |
| `/jurusan` | `jurusan` | `JurusanPage` |
| `/berita` | `berita` | `BeritaPage` |
| `/berita/lomba` | `berita/:slug` | `BeritaDetailPage` |
| `/apa-saja` | `*` | `NotFoundPage` |

---

## 5. Layout route dan `<Outlet />`

Di `src/App.jsx`:

```jsx
<Route element={<Layout />}>
  <Route index element={<HomePage />} />
  {/* ... */}
</Route>
```

Route ini **tidak punya `path`**. Namanya *layout route*. Artinya: semua child memakai `Layout` sebagai bungkus.

Di `src/components/layout/Layout.jsx`:

```jsx
<a href="#main-content" className="skip-link">Lewati ke konten utama</a>
<Navbar />
<main id="main-content" tabIndex="-1">
  <Outlet />
</main>
<Footer />
<BackToTop />
```

`<Outlet />` adalah lubang tempat halaman aktif dipasang. Tanpa `<Outlet />`, halaman child tidak akan muncul meskipun route-nya cocok.

Karena parent tidak punya `path`, path child dihitung dari root. Kalau suatu saat kamu menulis:

```jsx
<Route path="app" element={<Layout />}>
  <Route path="profil" element={<ProfilPage />} />
</Route>
```

maka halamannya menjadi `/app/profil`.

---

## 6. `Link` vs `<a>` vs `NavLink`

| Cara | Perilaku | Kapan dipakai |
| --- | --- | --- |
| `<Link to="...">` | Navigasi SPA, tanpa reload | Semua link internal |
| `<a href="...">` | Reload penuh, React restart | Link eksternal, `mailto:`, `tel:`, skip-link |
| `<NavLink>` | Seperti `Link`, otomatis menambah class `active` | Menu sederhana |

### Kenapa project ini memakai `Link` dan bukan `<a href>`?

Kalau memakai `<a href="/profil">`, browser akan memuat ulang seluruh dokumen. React kehilangan state dan aplikasi terasa lambat. `Link` mencegahnya.

### Kenapa bukan `NavLink`?

Karena menu punya submenu dengan hash seperti `/profil#visi-misi`. `NavLink` tidak bisa membedakan "Profil" dan "Profil #visi-misi". Jadi Navbar membuat logikanya sendiri di `src/components/layout/Navbar.jsx`:

```jsx
function splitTarget(to) {
  const [path, hash = ""] = to.split("#");
  return { path, hash: hash ? `#${hash}` : "" };
}

// menu induk: aktif jika path sama atau diawali path itu
function isSectionActive(to, pathname) {
  const { path } = splitTarget(to);
  if (path === "/") return pathname === "/";
  return pathname === path || pathname.startsWith(`${path}/`);
}

// submenu: path dan hash harus sama
function isLinkActive(to, pathname, hash) {
  const target = splitTarget(to);
  return pathname === target.path && hash === target.hash;
}
```

Efeknya: saat di `/berita/lomba`, menu induk **Informasi** tetap menyala (karena diawali `/berita`), tetapi submenu **Berita** tidak otomatis menyala. Ini perilaku yang disengaja agar submenu menandai section yang benar-benar aktif.

### Link eksternal

Untuk WhatsApp/Instagram/YouTube, gunakan `<a href>` biasa dengan `target="_blank"` dan `rel="noreferrer"`. Itu memang harus membuka tab baru di luar aplikasi.

---

## 7. `useParams`: membaca bagian dinamis URL

`src/pages/BeritaDetailPage.jsx`:

```jsx
import { useParams } from "react-router-dom";

export default function BeritaDetailPage() {
  const { slug } = useParams();        // /berita/lomba → slug = "lomba"
  const article = articleBySlug[slug]; // cari data

  if (!article) {
    return <NotFoundPage />;           // slug tidak ada → 404
  }

  return <ArticleView article={article} />;
}
```

`articleBySlug` dibuat di `src/data/berita.js` sebagai objek indeks:

```js
export const articleBySlug = Object.fromEntries(
  articles.map((article) => [article.slug, article])
);
```

### Kenapa `ArticleView` dipisah?

Karena `usePageMeta` adalah **hook**, dan hook tidak boleh dipanggil bersyarat. Kalau ditulis setelah `if (!article) return ...`, jumlah hook bisa berubah antar-render dan React akan error. Memisahkan `ArticleView` membuat hook hanya dipanggil ketika artikel benar-benar ada.

Aturan umum:

> Semua hook harus dipanggil di urutan yang sama pada setiap render. Jangan letakkan hook setelah `return` bersyarat.

---

## 8. `useLocation`: membaca URL saat ini

```jsx
import { useLocation } from "react-router-dom";

const location = useLocation();
```

Bentuk objeknya:

```js
{
  pathname: "/berita/lomba",
  search: "?q=prestasi",
  hash: "#visi-misi",
  state: null
}
```

Contoh pemakaian di project:

| File | Yang diambil | Untuk apa |
| --- | --- | --- |
| `ScrollManager.jsx` | `pathname`, `hash` | Menentukan scroll ke atas atau ke section |
| `Navbar.jsx` | `pathname`, `hash` | Menentukan menu aktif |
| `JurusanPage.jsx` | `hash` | Menentukan tab jurusan yang aktif |
| `App.jsx` (`AOSManager`) | `pathname` | Refresh animasi setelah pindah halaman |

`location.state` berguna untuk mengirim data antar-halaman tanpa URL, misalnya:

```jsx
<Link to="/kontak" state={{ dari: "berita" }}>Hubungi Kami</Link>

// di halaman tujuan
const { state } = useLocation();
console.log(state?.dari); // "berita"
```

---

## 9. Hash dan `ScrollManager`

Menu seperti "Visi & Misi":

```js
{ label: "Visi & Misi", to: "/profil#visi-misi" }
```

`src/components/layout/ScrollManager.jsx`:

```jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1)); // "#visi-misi" → "visi-misi"

      const frame = window.requestAnimationFrame(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ block: "start" });
        }
      });

      return () => window.cancelAnimationFrame(frame);
    }

    window.scrollTo(0, 0);
    return undefined;
  }, [pathname, hash]);

  return null;
}
```

Dua detail penting:

1. **`requestAnimationFrame`** menunda scroll satu frame. Tujuannya memastikan halaman tujuan sudah terpasang di DOM sebelum `getElementById` dipanggil.
2. **`decodeURIComponent`** penting jika hash mengandung karakter khusus atau spasi.

Perilaku:

- Ada hash → cari elemen dengan `id` tersebut, lalu scroll ke sana.
- Tidak ada hash → selalu mulai dari atas.

Skip-link `#main-content` di `Layout.jsx` juga memanfaatkan mekanisme ini: browser mengubah hash, `ScrollManager` menangkapnya, lalu menggulir ke `<main>`.

---

## 10. Studi kasus: tab Jurusan memakai hash

`src/pages/JurusanPage.jsx`:

```jsx
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function getTabFromHash(tabs, hash) {
  const id = hash.replace(/^#/, "");
  return tabs.some((tab) => tab.id === id) ? id : tabs[0].id;
}

export default function JurusanPage() {
  const { tabs } = jurusanPage;
  const { hash } = useLocation();

  const [activeTab, setActiveTab] = useState(() =>
    getTabFromHash(tabs, hash)
  );

  useEffect(() => {
    setActiveTab(getTabFromHash(tabs, hash));
  }, [tabs, hash]);

  function selectTab(id) {
    setActiveTab(id);
    window.history.replaceState(null, "", `#${id}`);
  }

  // ...
}
```

Alurnya:

1. Saat halaman dibuka, `useState` menghitung tab awal dari hash. `/jurusan#rpl` → tab RPL.
2. Kalau hash berubah dari luar (misalnya klik link footer), `useEffect` menyinkronkan tab.
3. Saat user mengklik tab, `selectTab` mengganti state **dan** menulis hash baru.

### Kenapa `history.replaceState`, bukan `useNavigate`?

- `replaceState` hanya mengubah URL di address bar **tanpa memberi tahu React Router**.
- Akibatnya `ScrollManager` tidak ikut jalan, jadi halaman **tidak melompat** saat ganti tab.
- Kalau memakai `navigate("/jurusan#rpl", { replace: true })`, `ScrollManager` akan menggulir ke elemen ber-`id="rpl"`, yang bisa terasa mengganggu.

Trade-off-nya: `useLocation().hash` di komponen lain tidak langsung berubah. Untuk kebutuhan tab ini, itu aman dan disengaja.

### Kaitan dengan `id` tab

Tab dirender dengan id dinamis:

```jsx
<div className="tab-pane" id={tab.id}>
```

Itulah sebabnya `/jurusan#tkj`, `#rpl`, `#dkv`, dan `#akl` valid, meskipun `id` tidak tertulis literal di source.

---

## 11. 404 dua lapis

Project ini punya dua lapis penanganan 404:

1. **Path tidak dikenal** — `/apa-saja` ditangkap `<Route path="*">` → `NotFoundPage`.
2. **Slug berita tidak ada** — `/berita/tidak-ada` cocok ke `berita/:slug`, tetapi `articleBySlug["tidak-ada"]` kosong → `BeritaDetailPage` mengembalikan `<NotFoundPage />`.

Bedanya:

- Kasus 1: URL yang tidak dikenal sama sekali.
- Kasus 2: URL valid secara pola, tetapi datanya tidak ada. URL tetap `/berita/tidak-ada`, hanya isinya 404.

---

## 12. Effect yang menempel pada rute

### `AOSManager` — `src/App.jsx`

```jsx
function AOSManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    AOS.refreshHard();
  }, [pathname]);

  return null;
}
```

- Effect pertama: init sekali saat aplikasi dimuat.
- Effect kedua: setiap `pathname` berubah, AOS memindai ulang DOM agar elemen baru ikut beranimasi.

### `usePageMeta` — `src/hooks/usePageMeta.js`

```jsx
useEffect(() => {
  document.title = title;
  setMeta("name", "description", description);
  setMeta("property", "og:title", title);
  setMeta("property", "og:description", description);
}, [title, description]);
```

Dipanggil di awal setiap halaman, misalnya:

```jsx
usePageMeta("Kontak | SMK LPPM RI BANDUNG", "Hubungi sekolah ...");
```

Pola umumnya: **rute berubah → effect bereaksi**.

---

## 13. Catatan deploy `BrowserRouter`

Karena memakai `BrowserRouter`, server **wajib** mengembalikan `index.html` untuk path apa pun yang bukan file statis. Ini disebut **SPA fallback**.

- `npm run preview` sudah menangani ini.
- Hosting statis murni perlu aturan rewrite (`/* → /index.html`).
- Membuka `dist/index.html` lewat `file://` akan gagal untuk rute selain `/`.
- Konfigurasi Netlify **belum** ditambahkan (sesuai rencana).

Contoh aturan Netlify (`public/_redirects`):

```
/*  /index.html  200
```

Contoh `netlify.toml`:

```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

Tanpa aturan ini, refresh di `/profil` akan menghasilkan 404 dari server, meskipun navigasi dari dalam aplikasi tetap berjalan.

---

## 14. Checklist menambah rute baru

Misal ingin halaman **Prestasi** di `/prestasi`:

1. **Buat halaman** `src/pages/PrestasiPage.jsx`:
   ```jsx
   import usePageMeta from "../hooks/usePageMeta.js";

   export default function PrestasiPage() {
     usePageMeta("Prestasi | SMK LPPM RI BANDUNG", "Prestasi siswa.");

     return (
       <section className="py-5">
         <div className="container">
           <h1 className="section-title">Prestasi</h1>
         </div>
       </section>
     );
   }
   ```

2. **Import** di `src/App.jsx`:
   ```jsx
   import PrestasiPage from "./pages/PrestasiPage.jsx";
   ```

3. **Daftarkan route** di dalam `<Route element={<Layout />}>`:
   ```jsx
   <Route path="prestasi" element={<PrestasiPage />} />
   ```

4. **Tambahkan menu** di `src/data/navigation.js`:
   ```js
   { label: "Prestasi", to: "/prestasi" }
   ```

5. **Uji**:
   - Klik menu → halaman terbuka tanpa reload.
   - Refresh di `/prestasi` → tetap terbuka (di `npm run dev`/`preview`).
   - Cek judul tab berubah.

Tidak perlu menyentuh `BrowserRouter`, `Layout`, atau file lain.

---

## 15. Debugging routing

### Melihat lokasi saat ini

Di Console browser:

```js
window.location.pathname
window.location.hash
window.location.search
```

Atau tambahkan sementara di komponen:

```jsx
const location = useLocation();
console.log(location);
```

### Masalah umum

| Gejala | Penyebab | Solusi |
| --- | --- | --- |
| Halaman blank saat refresh di `/profil` | Server tidak punya SPA fallback | Pakai `npm run preview` atau atur rewrite hosting |
| Klik link malah reload penuh | Memakai `<a href>` untuk link internal | Ganti ke `<Link to>` |
| Halaman 404 padahal route ada | Path salah tulis / beda huruf besar-kecil | Cocokkan dengan `App.jsx` |
| `useParams` bernilai `undefined` | Komponen tidak berada di route dinamis | Pastikan route memakai `:slug` |
| Auto-scroll tidak jalan ke section | `id` target tidak ada | Cek `id="..."` di halaman tujuan |
| Menu tidak menyala | Logika `pathname` tidak cocok | Cek `isSectionActive`/`isLinkActive` |
| Tab jurusan tidak sesuai hash | Hash tidak dikenal | Cek `getTabFromHash` dan `id` tab |

### Trik memahami alur

1. Buka `src/App.jsx`, temukan URL yang sedang dibuka.
2. Lihat komponen yang dirender.
3. Buka komponennya, lihat `useParams`/`useLocation`/`usePageMeta`.
4. Cek file data yang dipakai.

---

## 16. Latihan + kunci

Kerjakan berurutan. Setiap latihan hanya mengubah 1–3 file.

### Latihan A — membaca tanpa mengubah

Buka `/berita/lomba`, lalu di Console jalankan:

```js
window.location.pathname
```

Bandingkan dengan `slug` yang diterima `BeritaDetailPage`.

**Pertanyaan:** kenapa `slug` hanya `"lomba"`, bukan `/berita/lomba`?

**Kunci:** karena route `berita/:slug` menangkap hanya segmen setelah `/berita/`.

### Latihan B — menambah halaman

Buat `/prestasi` mengikuti checklist bagian 14. Isi dulu dengan `<h1>Prestasi</h1>`.

**Cek keberhasilan:**

- Menu muncul di Navbar.
- Halaman terbuka tanpa reload.
- Judul tab berubah.
- Refresh di `/prestasi` tetap berfungsi di dev/preview.

### Latihan C — memprediksi route dinamis

Tambahkan:

```jsx
<Route path="prestasi/:tahun" element={<PrestasiPage />} />
```

Lalu buka `/prestasi/2026`.

**Pertanyaan:** apa yang terjadi jika `PrestasiPage` tidak memakai `useParams`?

**Kunci:** halaman tetap tampil, tetapi komponen tidak tahu tahunnya. Tidak ada error, hanya data `tahun` tidak terpakai.

### Latihan D — mengubah perilaku scroll

Di `ScrollManager.jsx`, ubah:

```js
window.scrollTo(0, 0);
```

menjadi:

```js
window.scrollTo({ top: 0, behavior: "smooth" });
```

**Pertanyaan:** kapan perubahan ini terasa?

**Kunci:** saat berpindah halaman tanpa hash. Jika ada hash, jalur `scrollIntoView` yang dipakai.

### Latihan E — tautan dengan state

Di salah satu halaman, tambahkan:

```jsx
<Link to="/kontak" state={{ dari: "latihan" }}>Ke Kontak</Link>
```

Di `KontakPage`, baca:

```jsx
const { state } = useLocation();
console.log(state);
```

**Pertanyaan:** apakah `state` terlihat di URL?

**Kunci:** tidak. `state` disimpan di memory History API, bukan di address bar.

---

## 17. Cheat sheet

```jsx
// import
import {
  BrowserRouter, Routes, Route, Link, NavLink,
  Outlet, useParams, useLocation, useNavigate
} from "react-router-dom";
```

```jsx
// navigasi deklaratif
<Link to="/profil">Profil</Link>
<Link to="/profil#visi-misi">Visi & Misi</Link>
<Link to="/berita/ppdb">Baca berita</Link>
```

```jsx
// route
<Route index element={<HomePage />} />
<Route path="profil" element={<ProfilPage />} />
<Route path="berita/:slug" element={<BeritaDetailPage />} />
<Route path="*" element={<NotFoundPage />} />
```

```jsx
// baca parameter
const { slug } = useParams();

// baca lokasi
const { pathname, search, hash, state } = useLocation();

// navigasi lewat kode
const navigate = useNavigate();
navigate("/kontak");
navigate(-1); // kembali
```

| Tugas | Cara |
| --- | --- |
| Link internal | `<Link to="...">` |
| Link eksternal | `<a href="..." target="_blank" rel="noreferrer">` |
| Ambil bagian dinamis URL | `useParams()` |
| Baca path/hash/query | `useLocation()` |
| Pindah lewat kode | `useNavigate()` |
| Tempat halaman child | `<Outlet />` |
| 404 | `<Route path="*" element={<NotFoundPage />} />` |
| Scroll ke section | `<Link to="/halaman#id">` + `id="id"` |

---

## Ringkasan satu halaman

- `BrowserRouter` menyimpan lokasi; `Routes` memilih komponen; `Link` mengubah URL tanpa reload.
- `Layout` membungkus semua halaman; halaman aktif masuk ke `<Outlet />`.
- `index` = path persis parent; `:slug` = bagian dinamis; `*` = 404.
- `useParams` membaca bagian dinamis; `useLocation` membaca `pathname`, `search`, `hash`, `state`.
- Hash (`#visi-misi`) ditangani `ScrollManager` dengan `scrollIntoView`.
- Tab Jurusan memakai hash + `history.replaceState` agar URL berubah tanpa lompat scroll.
- Hook tidak boleh dipanggil bersyarat — karena itu `BeritaDetailPage` memisahkan `ArticleView`.
- `BrowserRouter` butuh SPA fallback saat deploy.
- Menambah halaman = buat file → import → daftarkan `<Route>` → tambah menu.
