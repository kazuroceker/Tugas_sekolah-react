# Panduan Presentasi — Website SMK LPPM RI BANDUNG

Dokumen ini membantu mempersiapkan dan menyampaikan presentasi proyek website sekolah (React + Bootstrap). Isinya: ringkasan proyek, alur demo, penjelasan arsitektur, potongan kode penting, kemungkinan pertanyaan, dan checklist sebelum tampil.

---

## 1. Ringkasan Proyek (untuk pembuka)

> "Saya mengubah website sekolah statis berbasis template Kaira menjadi aplikasi **React + Bootstrap** tanpa mengubah tampilan aslinya. Seluruh halaman dipecah menjadi komponen modular, konten dipusatkan di satu folder data, dan website tetap bisa berjalan offline karena semua aset disimpan lokal."

Poin yang ditonjolkan:

- Desain Kaira dipertahankan 100% (warna, font, layout).
- 11 halaman: Beranda, Profil, Jurusan, Ekstrakurikuler, Galeri, Kontak, Berita, 3 detail berita, dan 404.
- Navigasi SPA tanpa reload.
- Konten terpusat: mengubah teks tidak perlu menyentuh komponen.
- Interaktif: slider, filter, tab, modal galeri, pencarian berita, validasi form.
- Offline-friendly: tanpa CDN; peta punya fallback.

---

## 2. Persiapan Sebelum Presentasi

1. Buka terminal di folder proyek:
   ```bash
   cd "D:\Project\Tugas Sekolah\smk-react"
   ```
2. Pasang dependensi (sekali saja):
   ```bash
   npm install
   ```
3. Jalankan mode produksi agar cepat dan stabil:
   ```bash
   npm run build
   npm run preview
   ```
4. Buka `http://localhost:4173` di browser.
5. Siapkan tab cadangan:
   - Tab 1: Beranda (`/`)
   - Tab 2: Jurusan (`/jurusan#rpl`)
   - Tab 3: Kontak (`/kontak`)
6. Jika `npm` diblokir PowerShell, gunakan `npm.cmd run build` dan `npm.cmd run preview`.

> Tips: saat presentasi, gunakan mode preview (bukan dev) supaya tidak ada overlay/hot reload. Siapkan juga `dist/` jika perlu demo tanpa menjalankan server (dengan hosting statis).

---

## 3. Alur Demo yang Disarankan (±10 menit)

### 3.1 Beranda (2 menit)

Tunjukkan:

- Hero slider berjalan otomatis (Swiper).
- Statistik angka (CountUp) saat discroll.
- Section program, ekstrakurikuler, berita, galeri.
- Navbar sticky dan tombol **PPDB**.

Kalimat kunci:

> "Semua section beranda adalah komponen terpisah di `src/components/home/`, datanya diambil dari `src/data/home.js`."

### 3.2 Profil (1,5 menit)

- Buka menu **Profil Sekolah** → tunjukkan submenu.
- Klik **Visi & Misi** di submenu → halaman menggulir ke section yang tepat.
- Tunjukkan sambutan kepala sekolah, struktur, tabel data, dan fasilitas.

Kalimat kunci:

> "Submenu memakai anchor seperti `/profil#visi-misi`. `ScrollManager` yang mengatur posisi scroll setelah pindah halaman."

### 3.3 Jurusan (1,5 menit)

- Buka **Akademik → Jurusan**.
- Klik tab TKJ, RPL, DKV, AKL.
- Perhatikan URL berubah menjadi `/jurusan#dkv`.
- Reload halaman saat hash aktif → tab yang sama tetap terbuka.

Kalimat kunci:

> "Tab membaca hash dari React Router, jadi bisa dibagikan lewat link dan tetap konsisten setelah refresh."

### 3.4 Ekstrakurikuler & Galeri (2 menit)

- Di Ekstrakurikuler, klik filter **Olahraga** lalu **Semua**.
- Di Galeri, klik filter, lalu buka salah satu foto → modal muncul.
- Tutup modal, buka foto lain → modal terbuka lagi.

Kalimat kunci:

> "Filter dibuat dengan state React, bukan manipulasi DOM manual. Modal memakai API Bootstrap yang diinstansiasi di dalam `useEffect`."

### 3.5 Berita (1,5 menit)

- Buka **Informasi → Berita**.
- Ketik `prestasi` di kolom pencarian → hanya berita prestasi tampil.
- Ketik kata yang tidak ada → muncul pesan "Berita tidak ditemukan".
- Hapus pencarian → tiga berita kembali.
- Buka satu artikel → tunjukkan detail dan tombol kembali.

### 3.6 Kontak (1,5 menit)

- Klik **Kirim Pesan** tanpa mengisi → muncul validasi merah.
- Isi form dengan benar → muncul pesan sukses dan form ter-reset.
- Jelaskan form masih **mode demo** (tanpa backend).
- Untuk demo offline: putuskan internet atau buka DevTools → Network → Offline → panel peta berganti menjadi alamat + tautan.

Kalimat kunci:

> "Validasi memakai `checkValidity()` bawaan browser dan class Bootstrap `was-validated`. Saat offline, iframe diganti panel fallback agar informasi alamat tetap tersedia."

### 3.7 Responsif & 404 (1 menit)

- Perkecil jendela / buka mode mobile → menu berubah menjadi offcanvas.
- Buka URL acak, mis. `/halaman-tidak-ada` → halaman 404.

---

## 4. Arsitektur yang Perlu Dijelaskan

### 4.1 Alur aplikasi

```
index.html
  └─ src/main.jsx          (mount React + import Bootstrap JS)
      └─ src/App.jsx       (BrowserRouter + Routes + AOS)
          └─ Layout        (Navbar, <main>, Footer, BackToTop)
              └─ Page      (HomePage, ProfilPage, ...)
                  └─ Components (common/home/layout)
                      └─ Data (src/data/*.js)
```

### 4.2 Pembagian folder

| Folder | Peran |
| --- | --- |
| `src/pages/` | Satu file = satu halaman; mengatur state halaman dan menyusun section |
| `src/components/common/` | Komponen kecil yang dipakai lintas halaman (kartu, heading, filter, ikon, CTA) |
| `src/components/home/` | Section khusus beranda |
| `src/components/layout/` | Kerangka global: Navbar, Footer, Layout, ScrollManager, BackToTop |
| `src/data/` | Sumber konten tunggal (teks, gambar, tautan, daftar) |
| `src/hooks/` | Hook `usePageMeta` untuk judul tab & meta description |

### 4.3 Routing

Semua rute didefinisikan di `src/App.jsx`:

```jsx
<Route element={<Layout />}>
  <Route index element={<HomePage />} />
  <Route path="profil" element={<ProfilPage />} />
  <Route path="jurusan" element={<JurusanPage />} />
  <Route path="ekstrakurikuler" element={<EkstrakurikulerPage />} />
  <Route path="galeri" element={<GaleriPage />} />
  <Route path="kontak" element={<KontakPage />} />
  <Route path="berita" element={<BeritaPage />} />
  <Route path="berita/:slug" element={<BeritaDetailPage />} />
  <Route path="*" element={<NotFoundPage />} />
</Route>
```

Detail artikel memakai parameter dinamis `:slug`, lalu dicocokkan dengan data:

```jsx
const { slug } = useParams();
const article = articleBySlug[slug];
if (!article) return <NotFoundPage />;
```

### 4.4 Data terpusat

Contoh mengganti nama sekolah cukup di `src/data/site.js`:

```js
export const site = {
  name: "SMK LPPM RI BANDUNG",
  // ...
};
```

Lalu dipakai di banyak tempat:

```jsx
import { site } from "../data/site.js";
```

### 4.5 Metadata per halaman

```js
// src/hooks/usePageMeta.js
export default function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title;
    setMeta("name", "description", description);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
  }, [title, description]);
}
```

Setiap halaman memanggil `usePageMeta(...)` agar judul tab dan deskripsi ikut berubah tanpa reload.

---

## 5. Potongan Kode Andalan (siap ditunjukkan)

### 5.1 Filter dengan state React

```jsx
const [activeFilter, setActiveFilter] = useState("all");

<FilterGroup
  options={filters}
  active={activeFilter}
  onChange={setActiveFilter}
  targetId="ekskul-grid"
/>
```

Item disembunyikan dengan class Bootstrap, bukan menghapus DOM:

```jsx
const matches = activeFilter === "all" || item.category === activeFilter;
<div className={`col-md-6 col-lg-4${matches ? "" : " d-none"}`}>
```

### 5.2 Modal galeri Bootstrap di React

```jsx
const modalRef = useRef(null);

useEffect(() => {
  const instance = new Modal(modalRef.current);
  // simpan instance, bersihkan saat unmount
}, []);

useEffect(() => {
  if (selected) modalInstanceRef.current.show();
}, [selected]);
```

Yang penting dijelaskan: instance Bootstrap **tidak** dibuat ulang setiap render, dan `hidden.bs.modal` dipakai untuk mereset pilihan supaya modal bisa dibuka kembali.

### 5.3 Tab jurusan sinkron dengan hash

```jsx
const { hash } = useLocation();
const [activeTab, setActiveTab] = useState(() => getTabFromHash(tabs, hash));

useEffect(() => {
  setActiveTab(getTabFromHash(tabs, hash));
}, [tabs, hash]);
```

### 5.4 Pencarian berita

```jsx
return [article.title, article.category, article.date, article.excerpt]
  .join(" ")
  .toLowerCase()
  .includes(keyword);
```

### 5.5 Validasi form kontak

```jsx
if (!formElement.checkValidity()) {
  formElement.classList.add("was-validated");
  return;
}
```

---

## 6. Keputusan Teknis (kalau ditanya "kenapa?")

| Pertanyaan | Jawaban singkat |
| --- | --- |
| Kenapa React? | Halaman dipecah jadi komponen yang bisa dipakai ulang, state interaktif lebih rapi, dan navigasi SPA tanpa reload. |
| Kenapa Bootstrap, bukan Tailwind? | Desain asli Kaira sudah memakai Bootstrap. Mempertahankan Bootstrap membuat tampilan 100% sama dan tidak perlu menulis ulang style. |
| Kenapa CSS asli tidak diubah? | Agar desain tetap identik. Penyesuaian hanya ditambahkan di `school.css` yang dimuat paling akhir. |
| Kenapa data dipisah? | Konten mudah diganti, komponen tetap bersih, dan tidak ada teks tersebar di banyak file. |
| Kenapa tidak pakai jQuery? | Semua interaksi (slider, filter, modal, menu mobile) sudah ditangani React/Bootstrap/Swiper. jQuery jadi tidak perlu. |
| Kenapa gambar di `public/`? | Supaya dipakai langsung dengan path absolut dan tetap tersedia saat build, tanpa diproses bundler. |
| Apakah jalan offline? | Ya, semua aset lokal. Hanya peta yang butuh internet dan sudah ada fallback. |
| Apakah form mengirim email? | Belum, masih demo. Untuk produksi perlu backend/API atau layanan form. |
| Bagaimana deploy? | Build menghasilkan `dist/`. Karena SPA, hosting perlu fallback semua rute ke `index.html`. |

---

## 7. Hal Teknis yang Sering Ditanyakan Penguji

**"Di mana saya mengubah berita?"**
`src/data/berita.js` — tambahkan objek di array `articles`. Halaman detail otomatis tersedia di `/berita/<slug>`.

**"Di mana mengubah menu?"**
`src/data/navigation.js` — `primaryNav`, `ppdbLink`, `footerQuickLinks`, `footerInfoLinks`.

**"Di mana mengubah identitas sekolah?"**
`src/data/site.js` untuk identitas global; data per halaman ada di file data masing-masing.

**"Bagaimana animasi scroll bekerja?"**
AOS diinisialisasi sekali di `App.jsx`. Saat rute berubah, `AOS.refreshHard()` dipanggil agar elemen baru ikut terdeteksi. Animasi bisa dimatikan pengguna lewat `prefers-reduced-motion`.

**"Kenapa judul berita di halaman detail tidak error saat slug salah?"**
`ArticleView` adalah komponen terpisah, sehingga hook `usePageMeta` tidak dipanggil secara kondisional. Jika slug tidak ada, langsung merender `NotFoundPage`.

**"Bagaimana mencegah error modal Bootstrap?**
Instance dibuat di `useEffect` setelah elemen ada, event listener dibersihkan saat unmount, dan `dispose()` dipanggil.

**"Apakah aksesibilitas diperhatikan?"**
Ya: skip link, `<main id="main-content" tabIndex="-1">`, label form, `aria-label` pada tombol ikon, `aria-current` pada menu aktif, dan pengurangan animasi.

---

## 8. Checklist Sebelum Tampil

- [ ] `npm run build` berhasil tanpa error.
- [ ] `npm run preview` berjalan dan halaman terbuka.
- [ ] Semua menu navbar bisa diklik dan tidak ada halaman kosong.
- [ ] Slider beranda bergerak otomatis.
- [ ] Filter ekstrakurikuler & galeri berfungsi.
- [ ] Modal galeri bisa dibuka, ditutup, dan dibuka lagi.
- [ ] Pencarian berita menampilkan hasil dan pesan kosong.
- [ ] Form kontak menampilkan validasi dan pesan sukses.
- [ ] Tab jurusan berubah dan URL ikut berubah.
- [ ] Menu mobile (offcanvas) terbuka dan menutup saat navigasi.
- [ ] Halaman 404 tampil untuk URL acak.
- [ ] Internet dimatikan → peta kontak menampilkan fallback.
- [ ] Tidak ada error di console browser.
- [ ] File `docs/PANDUAN-PRESENTASI.md` dan `README.md` siap ditunjukkan sebagai dokumentasi.

---

## 9. Troubleshooting Saat Demo

| Masalah | Solusi cepat |
| --- | --- |
| `npm` tidak bisa dijalankan | Pakai `npm.cmd run build` / `npm.cmd run preview` |
| Port 4173 dipakai | `npm run preview -- --port 4174` |
| Halaman putih setelah refresh rute | Jalankan lewat `preview`/server SPA; untuk hosting perlu fallback `index.html` |
| Gambar tidak muncul | Pastikan file ada di `public/images/` dan path diawali `/images/` |
| Peta kosong | Normal saat offline; fallback muncul otomatis. Saat online, pastikan iframe tidak diblokir |
| Animasi tidak muncul | Scroll sedikit; atau cek pengaturan `prefers-reduced-motion` di OS |
| Font berbeda | Pastikan `public/css/fonts.css` dan folder `public/fonts/` ikut ter-build |

---

## 10. Penutup Presentasi

Kalimat penutup yang disarankan:

> "Proyek ini menunjukkan bahwa website sekolah statis bisa dimodernisasi menjadi aplikasi React yang modular, interaktif, dan tetap mempertahankan identitas visual aslinya. Konten mudah diperbarui lewat satu lapisan data, aset berjalan offline, dan struktur komponennya siap dikembangkan lebih lanjut, misalnya dengan backend untuk form dan sistem berita dinamis."

Lanjutan pengembangan yang bisa disebutkan:

- Menghubungkan form kontak ke backend/email.
- Menjadikan berita dinamis (CMS/API).
- Menambahkan halaman PPDB dengan formulir pendaftaran.
- Menambahkan konfigurasi deploy (Netlify/Vercel) dengan SPA fallback.
- Optimasi gambar dan code-splitting untuk memperkecil bundle.
