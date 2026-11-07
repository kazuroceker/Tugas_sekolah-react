export const primaryNav = [
  {
    label: "Beranda",
    to: "/",
  },
  {
    id: "profil",
    label: "Profil Sekolah",
    to: "/profil",
    children: [
      { label: "Ringkasan Profil", to: "/profil" },
      { label: "Sambutan Kepala Sekolah", to: "/profil#sambutan" },
      { label: "Sejarah & Keunggulan", to: "/profil#sejarah" },
      { label: "Visi & Misi", to: "/profil#visi-misi" },
      { label: "Struktur Sekolah", to: "/profil#struktur" },
      { label: "Data & Tabel Profil", to: "/profil#tabel-profil" },
      { label: "Fasilitas", to: "/profil#fasilitas" },
    ],
  },
  {
    id: "akademik",
    label: "Akademik",
    to: "/jurusan",
    children: [
      { label: "Jurusan", to: "/jurusan" },
      { label: "Ekstrakurikuler", to: "/ekstrakurikuler" },
    ],
  },
  {
    id: "informasi",
    label: "Informasi",
    to: "/berita",
    children: [
      { label: "Berita", to: "/berita" },
      { label: "Galeri", to: "/galeri" },
      { label: "Kontak", to: "/kontak" },
    ],
  },
];

export const ppdbLink = {
  label: "PPDB",
  to: "/kontak",
};

export const footerQuickLinks = [
  { label: "Beranda", to: "/" },
  { label: "Profil Sekolah", to: "/profil" },
  { label: "Kompetensi Keahlian", to: "/jurusan" },
  { label: "Ekstrakurikuler", to: "/ekstrakurikuler" },
  { label: "Berita", to: "/berita" },
];

export const footerInfoLinks = [
  { label: "Penerimaan Siswa Baru", to: "/kontak" },
  { label: "Galeri Kegiatan", to: "/galeri" },
  { label: "Data Sekolah", to: "/profil#tabel-profil" },
  { label: "Fasilitas", to: "/profil#fasilitas" },
  { label: "Hubungi Kami", to: "/kontak" },
];
