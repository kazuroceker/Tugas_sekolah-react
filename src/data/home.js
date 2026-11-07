import { site } from "./site.js";
import { articles } from "./berita.js";

const previewArticles = ["ppdb", "lomba", "kunjungan-industri"].map((slug) =>
  articles.find((article) => article.slug === slug)
);

export const homePage = {
  meta: {
    title: `Beranda | ${site.name}`,
    description: site.description,
  },
  hiddenTitle: `${site.name} - Beranda`,
  hero: {
    ariaLabel: "Sorotan sekolah",
    slides: [
      {
        kicker: "Selamat Datang",
        title: site.name,
        description:
          "Mencetak lulusan kompeten, berkarakter, dan siap bersaing di dunia industri.",
        image: "/images/hero-1.jpg",
      },
      {
        kicker: "Kompetensi Keahlian",
        title: "Belajar Sesuai Bidang yang Kamu Pilih",
        description:
          "TKJ, RPL, DKV, dan Akuntansi dengan pembelajaran berbasis praktik dan proyek nyata.",
        image: "/images/hero-2.jpg",
      },
      {
        kicker: "Fasilitas Belajar",
        title: "Lingkungan Belajar yang Nyaman",
        description:
          "Laboratorium komputer, studio desain, perpustakaan, dan ruang praktik yang lengkap.",
        image: "/images/hero-3.jpg",
      },
    ],
    actions: [
      {
        label: "Profil Sekolah",
        to: "/profil",
        className: "btn btn-light btn-lg text-uppercase px-4",
      },
      {
        label: "Info PPDB",
        to: "/kontak",
        className: "btn btn-outline-light btn-lg text-uppercase px-4",
      },
    ],
  },
  welcome: {
    image: "/images/kepala-sekolah.jpg",
    imageAlt: "Drs. Ahmad Fauzi, M.Pd., Kepala Sekolah",
    kicker: "Sambutan Kepala Sekolah",
    title: "Belajar Hari Ini, Berprestasi Esok Hari",
    paragraphs: [
      `Assalamualaikum warahmatullahi wabarakatuh. Selamat datang di ${site.name}. Kami berkomitmen menyiapkan generasi yang kompeten, berkarakter, dan siap menghadapi dunia kerja maupun melanjutkan pendidikan.`,
      "Melalui pembelajaran berbasis praktik, kerja sama dengan industri, dan pembinaan karakter, kami percaya setiap siswa dapat tumbuh sesuai potensinya.",
    ],
    link: { label: "Baca Selengkapnya \u2192", to: "/profil#sambutan" },
  },
  stats: [
    { value: 68, suffix: "+", label: "Guru & Tenaga Kependidikan" },
    { value: 1240, suffix: "+", label: "Siswa Aktif" },
    { value: 36, suffix: "", label: "Rombongan Belajar" },
    { value: 4, suffix: "", label: "Kompetensi Keahlian" },
  ],
  programs: {
    kicker: "Kompetensi Keahlian",
    title: "4 Jurusan Unggulan",
    link: { label: "Semua Jurusan \u2192", to: "/jurusan" },
    items: [
      {
        id: "tkj",
        title: "Teknik Komputer & Jaringan",
        description: "Belajar jaringan, server, dan keamanan siber.",
        image: "/images/jurusan-tkj.jpg",
        imageAlt: "Teknik Komputer & Jaringan",
        to: "/jurusan#tkj",
        linkLabel: "Lihat Jurusan \u2192",
      },
      {
        id: "rpl",
        title: "Rekayasa Perangkat Lunak",
        description: "Bangun aplikasi web dan mobile dari nol.",
        image: "/images/jurusan-rpl.jpg",
        imageAlt: "Rekayasa Perangkat Lunak",
        to: "/jurusan#rpl",
        linkLabel: "Lihat Jurusan \u2192",
      },
      {
        id: "dkv",
        title: "Desain Komunikasi Visual",
        description: "Kuasai desain grafis, ilustrasi, dan multimedia.",
        image: "/images/jurusan-dkv.jpg",
        imageAlt: "Desain Komunikasi Visual",
        to: "/jurusan#dkv",
        linkLabel: "Lihat Jurusan \u2192",
      },
      {
        id: "akl",
        title: "Akuntansi & Keuangan Lembaga",
        description: "Kelola laporan keuangan dan administrasi bisnis.",
        image: "/images/jurusan-akl.jpg",
        imageAlt: "Akuntansi & Keuangan Lembaga",
        to: "/jurusan#akl",
        linkLabel: "Lihat Jurusan \u2192",
      },
    ],
  },
  extracurricularPreview: {
    kicker: "Kegiatan Siswa",
    title: "Ekstrakurikuler Pilihan",
    link: { label: "Semua Ekstrakurikuler \u2192", to: "/ekstrakurikuler" },
    posts: [
      {
        category: "Kepemimpinan",
        title: "Pramuka",
        description:
          "Membentuk disiplin, kemandirian, dan jiwa kepemimpinan.",
        coach: "Kak Budi Santoso",
        schedule: "Jumat, 14.00 - 16.00",
        image: "/images/ekskul-pramuka.jpg",
        imageAlt: "Pramuka",
      },
      {
        category: "Olahraga",
        title: "Futsal",
        description:
          "Meningkatkan kebugaran, kerja sama tim, dan sportivitas.",
        coach: "Coach Rizky Pratama",
        schedule: "Selasa & Kamis, 15.30 - 17.00",
        image: "/images/ekskul-futsal.jpg",
        imageAlt: "Futsal",
      },
      {
        category: "Akademik",
        title: "Robotik",
        description:
          "Merancang robot sederhana dan mengikuti kompetisi teknologi.",
        coach: "Ibu Dewi Lestari",
        schedule: "Sabtu, 09.00 - 12.00",
        image: "/images/ekskul-robotik.jpg",
        imageAlt: "Robotik",
      },
    ],
    featured: {
      title: "Seni Musik",
      description:
        "Menumbuhkan kreativitas dan keberanian tampil di panggung.",
      image: "/images/ekskul-musik.jpg",
      imageAlt: "Ekstrakurikuler seni musik",
      to: "/ekstrakurikuler",
      linkLabel: "Lihat Ekstrakurikuler \u2192",
    },
  },
  news: {
    kicker: "Informasi Terbaru",
    title: "Berita & Kegiatan Sekolah",
    link: { label: "Semua Berita \u2192", to: "/berita" },
    items: previewArticles,
  },
  gallery: {
    kicker: "Galeri",
    title: "Momen Kegiatan Sekolah",
    link: { label: "Buka Galeri \u2192", to: "/galeri" },
    items: [
      {
        image: "/images/galeri-1.jpg",
        alt: "Kegiatan belajar di kelas",
      },
      {
        image: "/images/galeri-2.jpg",
        alt: "Seminar motivasi siswa",
      },
      {
        image: "/images/galeri-3.jpg",
        alt: "Kerja kelompok di perpustakaan",
      },
      {
        image: "/images/galeri-5.jpg",
        alt: "Diskusi kelompok",
      },
      {
        image: "/images/galeri-10.jpg",
        alt: "Praktik komputer",
      },
      {
        image: "/images/galeri-9.jpg",
        alt: "Wisuda siswa",
      },
    ],
  },
  partners: {
    kicker: "Mitra Industri",
    title: "Belajar Langsung dari Dunia Kerja",
    items: [
      "PT Teknologi Bandung",
      "CV Digital Kreatif",
      "Bank Cendekia",
      "PT Jaringan Mandiri",
      "Studio Visual Kreatif",
    ],
  },
  cta: {
    title: "Siap Bergabung Bersama Kami?",
    text: "Daftarkan dirimu pada penerimaan siswa baru atau hubungi kami untuk informasi lebih lanjut.",
    button: { label: "Hubungi Kami", to: "/kontak" },
  },
};
