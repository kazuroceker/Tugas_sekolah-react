import { site } from "./site.js";

export const galleryPage = {
  meta: {
    title: `Galeri | ${site.name}`,
    description:
      "Dokumentasi kegiatan belajar, fasilitas, dan prestasi siswa SMK LPPM RI BANDUNG.",
  },
  header: {
    breadcrumb: [{ label: "Beranda", to: "/" }, { label: "Galeri" }],
    title: "Galeri",
    description:
      "Melihat lebih dekat kegiatan belajar, fasilitas, dan prestasi siswa.",
  },
  intro: {
    kicker: "Dokumentasi",
    title: "Galeri Kegiatan",
    description:
      "Kumpulan momen belajar, kegiatan siswa, fasilitas, dan prestasi sekolah.",
  },
  filters: [
    { value: "all", label: "Semua" },
    { value: "Kegiatan", label: "Kegiatan" },
    { value: "Fasilitas", label: "Fasilitas" },
    { value: "Prestasi", label: "Prestasi" },
  ],
  pagination: {
    perPage: 12,
    ariaLabel: "Navigasi halaman galeri",
    previous: "Halaman sebelumnya",
    next: "Halaman berikutnya",
  },
  defaultImage: "/images/galeri-1.jpg",
  items: [
    {
      id: "galeri-1",
      category: "Kegiatan",
      image: "/images/galeri-1.jpg",
      title: "Kegiatan belajar di kelas",
      alt: "Kegiatan belajar di kelas",
    },
    {
      id: "galeri-2",
      category: "Kegiatan",
      image: "/images/galeri-2.jpg",
      title: "Seminar motivasi siswa",
      alt: "Seminar motivasi siswa",
    },
    {
      id: "galeri-3",
      category: "Kegiatan",
      image: "/images/galeri-3.jpg",
      title: "Kerja kelompok di perpustakaan",
      alt: "Kerja kelompok di perpustakaan",
    },
    {
      id: "galeri-4",
      category: "Fasilitas",
      image: "/images/galeri-4.jpg",
      title: "Perpustakaan sekolah",
      alt: "Perpustakaan sekolah",
    },
    {
      id: "galeri-5",
      category: "Kegiatan",
      image: "/images/galeri-5.jpg",
      title: "Diskusi kelompok",
      alt: "Diskusi kelompok",
    },
    {
      id: "galeri-6",
      category: "Fasilitas",
      image: "/images/galeri-6.jpg",
      title: "Laboratorium sains",
      alt: "Laboratorium sains",
    },
    {
      id: "galeri-7",
      category: "Fasilitas",
      image: "/images/galeri-7.jpg",
      title: "Ruang baca",
      alt: "Ruang baca",
    },
    {
      id: "galeri-8",
      category: "Kegiatan",
      image: "/images/galeri-8.jpg",
      title: "Kegiatan siswa",
      alt: "Kegiatan siswa",
    },
    {
      id: "galeri-9",
      category: "Prestasi",
      image: "/images/galeri-9.jpg",
      title: "Wisuda siswa",
      alt: "Wisuda siswa",
    },
    {
      id: "galeri-10",
      category: "Kegiatan",
      image: "/images/galeri-10.jpg",
      title: "Praktik komputer",
      alt: "Praktik komputer",
    },
    {
      id: "galeri-11",
      category: "Fasilitas",
      image: "/images/galeri-11.jpg",
      title: "Koleksi buku perpustakaan",
      alt: "Koleksi buku perpustakaan",
    },
    {
      id: "galeri-12",
      category: "Prestasi",
      image: "/images/galeri-12.jpg",
      title: "Kelulusan siswa",
      alt: "Kelulusan siswa",
    },
  ],
  cta: {
    title: "Ingin Mengabadikan Momen Lain?",
    text: "Ikuti kegiatan sekolah dan bagikan dokumentasinya kepada tim humas.",
    button: { label: "Hubungi Kami", to: "/kontak" },
  },
};
