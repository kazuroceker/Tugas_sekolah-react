import { site } from "./site.js";

export const newsPage = {
  meta: {
    title: `Berita | ${site.name}`,
    description:
      "Kabar terbaru seputar kegiatan, prestasi, dan pengumuman SMK LPPM RI BANDUNG.",
  },
  header: {
    breadcrumb: [{ label: "Beranda", to: "/" }, { label: "Berita" }],
    title: "Berita",
    description:
      "Kabar terbaru seputar kegiatan, prestasi, dan pengumuman sekolah.",
  },
  intro: {
    kicker: "Informasi Sekolah",
    title: "Berita & Pengumuman",
    description:
      "Ikuti kabar terbaru seputar kegiatan, prestasi, dan informasi penting sekolah.",
  },
  search: {
    label: "Cari berita",
    placeholder: "Cari berita atau pengumuman...",
    empty: "Berita tidak ditemukan.",
  },
  pagination: {
    perPage: 3,
    ariaLabel: "Navigasi halaman berita",
    previous: "Halaman sebelumnya",
    next: "Halaman berikutnya",
  },
  announcements: {
    title: "Pengumuman Singkat",
    items: [
      {
        date: "10 November 2026",
        text: "Workshop literasi digital untuk guru dan tenaga kependidikan.",
      },
      {
        date: "13 November 2026",
        text: "Peringatan Hari Ulang Tahun Sekolah di lapangan sekolah.",
      },
      {
        date: "16 November 2026",
        text: "Pengumuman jadwal ujian akhir semester genap.",
      },
    ],
  },
  agenda: {
    title: "Agenda Terdekat",
    items: [
      { date: "23 November 2026", text: "Ujian Akhir Semester" },
      { date: "30 November 2026", text: "Pentas Seni Siswa" },
      { date: "14 Desember 2026", text: "Libur Hari Raya Natal & Tahun Baru" },
    ],
  },
  cta: {
    title: "Jangan Lewatkan Informasi Penting",
    text: "Ikuti kanal resmi sekolah agar tidak ketinggalan pengumuman terbaru.",
    button: { label: "Hubungi Kami", to: "/kontak" },
  },
};

export const articles = [
  {
    slug: "ppdb",
    path: "/berita/ppdb",
    category: "PPDB",
    date: "5 Januari 2027",
    title: "PPDB 2027/2028 Resmi Dibuka",
    excerpt: "Pendaftaran gelombang pertama dibuka untuk calon siswa baru.",
    author: `Tim Humas ${site.name}`,
    image: "/images/berita-ppdb.jpg",
    imageAlt: "PPDB 2027/2028 Resmi Dibuka",
    paragraphs: [
      `${site.name} resmi membuka penerimaan peserta didik baru (PPDB) tahun ajaran 2027/2028. Pendaftaran gelombang pertama dibuka mulai 5 Januari hingga 28 Februari 2027.`,
      "Calon siswa dapat mendaftar secara daring melalui formulir yang tersedia di halaman kontak atau datang langsung ke sekolah pada hari dan jam layanan. Berkas yang perlu disiapkan meliputi fotokopi ijazah, kartu keluarga, akta kelahiran, dan pas foto terbaru.",
      "Sekolah menyediakan empat kompetensi keahlian yang dapat dipilih, yaitu Teknik Komputer dan Jaringan, Rekayasa Perangkat Lunak, Desain Komunikasi Visual, serta Akuntansi dan Keuangan Lembaga.",
      "Panitia mengimbau calon siswa dan orang tua untuk membaca panduan pendaftaran dengan teliti serta menghubungi sekolah apabila ada hal yang belum jelas.",
    ],
    points: [
      "Pendaftaran gelombang pertama: 5 Januari - 28 Februari 2027.",
      "Empat pilihan kompetensi keahlian tersedia.",
      "Pendaftaran dapat dilakukan daring atau langsung di sekolah.",
      "Informasi resmi hanya melalui kanal sekolah.",
    ],
  },
  {
    slug: "lomba",
    path: "/berita/lomba",
    category: "Prestasi",
    date: "22 Februari 2026",
    title: "Siswa RPL Raih Juara 1 Lomba Web Design Nasional",
    excerpt:
      "Tim sekolah berhasil menyisihkan puluhan peserta dari seluruh Indonesia.",
    author: `Tim Humas ${site.name}`,
    image: "/images/berita-lomba.jpg",
    imageAlt: "Siswa RPL Raih Juara 1 Lomba Web Design Nasional",
    paragraphs: [
      `Tim siswa Rekayasa Perangkat Lunak ${site.name} berhasil meraih juara pertama pada lomba web design tingkat nasional yang diikuti puluhan sekolah.`,
      "Karya yang dilombakan berupa website profil sekolah dengan tampilan responsif, navigasi yang mudah, dan informasi yang terstruktur. Tim melalui beberapa tahap seleksi, mulai dari proposal, prototipe, hingga presentasi akhir.",
      "Pembina tim menyampaikan bahwa kemenangan ini merupakan hasil latihan rutin dan budaya kerja proyek di laboratorium sekolah. Siswa didorong untuk terus mengembangkan kemampuan teknis sekaligus kemampuan komunikasi.",
      "Prestasi ini diharapkan menjadi motivasi bagi siswa lain untuk aktif berkarya dan mengikuti kompetisi sesuai bidang keahliannya.",
    ],
    points: [
      "Juara 1 lomba web design tingkat nasional.",
      "Karya berupa website profil sekolah yang responsif.",
      "Proses seleksi meliputi proposal, prototipe, dan presentasi.",
      "Prestasi menjadi motivasi bagi siswa lain.",
    ],
  },
  {
    slug: "kunjungan-industri",
    path: "/berita/kunjungan-industri",
    category: "Kegiatan",
    date: "18 Maret 2026",
    title: "Kunjungan Industri ke PT Teknologi Bandung",
    excerpt:
      "Siswa kelas XI belajar langsung tentang proses kerja di industri.",
    author: `Tim Humas ${site.name}`,
    image: "/images/berita-industri.jpg",
    imageAlt: "Kunjungan Industri ke PT Teknologi Bandung",
    paragraphs: [
      `Siswa kelas XI ${site.name} melaksanakan kunjungan industri ke PT Teknologi Bandung. Kegiatan ini bertujuan memperkenalkan dunia kerja secara langsung kepada siswa.`,
      "Dalam kunjungan tersebut, siswa melihat proses pengembangan produk, alur kerja tim teknologi, serta standar keselamatan dan kualitas yang diterapkan perusahaan. Siswa juga berkesempatan bertanya kepada praktisi yang bekerja di bidangnya.",
      "Kegiatan kunjungan industri merupakan bagian dari program sekolah untuk memperkuat hubungan antara pembelajaran di kelas dan kebutuhan dunia usaha serta dunia industri.",
      "Sekolah berencana menjadikan kunjungan industri sebagai agenda rutin setiap tahun dengan mitra yang berbeda sesuai kompetensi keahlian.",
    ],
    points: [
      "Kunjungan diikuti siswa kelas XI.",
      "Siswa belajar proses kerja dan budaya industri.",
      "Kegiatan memperkuat hubungan sekolah dengan industri.",
      "Akan menjadi agenda rutin tahunan.",
    ],
  },
];

export const articleBySlug = Object.fromEntries(
  articles.map((article) => [article.slug, article])
);

export const articlePage = {
  backLabel: "Kembali ke Berita",
  contactLabel: "Hubungi Kami",
  pointsTitle: "Poin Penting",
  cta: {
    title: "Ingin Tahu Informasi Lainnya?",
    text: "Lihat berita dan pengumuman lain di halaman berita sekolah.",
    button: { label: "Semua Berita \u2192", to: "/berita" },
  },
};
