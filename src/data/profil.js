import { site } from "./site.js";

export const profilePage = {
  meta: {
    title: `Profil Sekolah | ${site.name}`,
    description:
      "Mengenal identitas, sejarah, visi misi, struktur, data, dan fasilitas SMK LPPM RI BANDUNG.",
  },
  header: {
    breadcrumb: [{ label: "Beranda", to: "/" }, { label: "Profil Sekolah" }],
    title: "Profil Sekolah",
    description:
      "Mengenal lebih dekat identitas, arah, dan fasilitas SMK LPPM RI BANDUNG.",
  },
  welcome: {
    image: "/images/kepala-sekolah.jpg",
    imageAlt: "Drs. Ahmad Fauzi, M.Pd., Kepala Sekolah",
    kicker: "Sambutan Kepala Sekolah",
    title: "Belajar Hari Ini, Berprestasi Esok Hari",
    paragraphs: [
      `Assalamualaikum warahmatullahi wabarakatuh. Selamat datang di ${site.name}. Kami berkomitmen menyiapkan lulusan yang kompeten, berkarakter, dan mampu bersaing di dunia industri maupun melanjutkan pendidikan ke jenjang yang lebih tinggi.`,
      "Pembelajaran di sekolah kami dirancang berbasis praktik dan proyek nyata. Dukungan guru profesional, laboratorium lengkap, serta kemitraan dengan industri menjadi bagian penting dari proses belajar siswa.",
      "Kami mengajak seluruh siswa, orang tua, dan mitra untuk bersama-sama membangun lingkungan belajar yang positif dan berprestasi.",
    ],
  },
  history: {
    kicker: "Tentang Kami",
    title: "Sejarah Singkat",
    paragraphs: [
      `${site.name} berdiri pada tahun 1998 sebagai sekolah menengah kejuruan yang berfokus pada kebutuhan tenaga kerja terampil. Sejak awal, sekolah tumbuh bersama perkembangan teknologi dan kebutuhan industri di sekitar wilayah.`,
      "Kini sekolah memiliki empat kompetensi keahlian, fasilitas praktik yang lengkap, serta jaringan mitra industri yang aktif. Berbagai prestasi akademik dan non-akademik terus diukir oleh siswa dan guru.",
    ],
  },
  advantages: {
    kicker: "Fokus Pendidikan",
    title: "Keunggulan Sekolah",
    items: [
      {
        icon: "book",
        title: "Kurikulum Praktik",
        text: "Belajar melalui proyek dan praktik langsung.",
      },
      {
        icon: "lab",
        title: "Laboratorium",
        text: "Fasilitas praktik sesuai bidang keahlian.",
      },
      {
        icon: "teacher",
        title: "Guru Profesional",
        text: "Tenaga pendidik berpengalaman di bidangnya.",
      },
      {
        icon: "industry",
        title: "Mitra Industri",
        text: "Kemitraan aktif untuk magang dan karier.",
      },
    ],
  },
  visionMissions: {
    kicker: "Arah Lembaga",
    title: "Visi & Misi",
    visionTitle: "Visi",
    vision:
      "Menjadi sekolah kejuruan unggul yang menghasilkan lulusan kompeten, berkarakter, dan berdaya saing global.",
    missionTitle: "Misi",
    missions: [
      "Menyelenggarakan pembelajaran berbasis kompetensi dan praktik kerja nyata.",
      "Mengembangkan karakter siswa yang religius, disiplin, dan bertanggung jawab.",
      "Meningkatkan kualitas guru dan tenaga kependidikan secara berkelanjutan.",
      "Membangun kerja sama yang aktif dengan dunia usaha dan dunia industri.",
      "Mendorong lahirnya inovasi, prestasi, dan budaya kerja profesional.",
    ],
  },
  structure: {
    kicker: "Organisasi",
    title: "Struktur Sekolah",
    items: [
      { role: "Kepala Sekolah", name: "Drs. Ahmad Fauzi, M.Pd." },
      { role: "Wakasek Kurikulum", name: "Ibu Ratna Sari, S.Pd., M.Pd." },
      { role: "Wakasek Kesiswaan", name: "Bapak Andi Wijaya, S.Pd." },
      { role: "Wakasek Sarana", name: "Bapak Hendra Gunawan, S.T." },
    ],
  },
  profileTable: {
    kicker: "Data Resmi",
    title: "Tabel Informasi Profil Sekolah",
    note:
      "Informasi lebih lanjut mengenai data sekolah dapat disampaikan melalui halaman kontak.",
    rows: [
      { label: "Nama Sekolah", value: site.name },
      { label: "NPSN", value: "20219876" },
      { label: "Status", value: "Swasta" },
      { label: "Akreditasi", value: "A (Unggul)" },
      { label: "Kurikulum", value: "Kurikulum Merdeka" },
      { label: "Tahun Berdiri", value: "1998" },
      { label: "Kepala Sekolah", value: "Drs. Ahmad Fauzi, M.Pd." },
      { label: "Alamat", value: site.address },
      { label: "Telepon", value: site.phone.display },
      { label: "Email", value: site.email.display },
      { label: "Jumlah Guru", value: "56 orang" },
      { label: "Jumlah Siswa", value: "1.240 siswa" },
      { label: "Jumlah Rombel", value: "36 rombongan belajar" },
      {
        label: "Kompetensi Keahlian",
        value: "TKJ, RPL, DKV, Akuntansi dan Keuangan Lembaga",
      },
      { label: "Jam Layanan", value: site.hours },
    ],
  },
  facilities: {
    kicker: "Sarana Prasarana",
    title: "Fasilitas Pendukung Belajar",
    link: { label: "Hubungi Kami", to: "/kontak" },
    items: [
      {
        image: "/images/galeri-10.jpg",
        imageAlt: "Laboratorium komputer",
        title: "Laboratorium Komputer",
        text: "Ruang praktik dengan perangkat modern untuk jurusan TKJ dan RPL.",
      },
      {
        image: "/images/galeri-4.jpg",
        imageAlt: "Perpustakaan sekolah",
        title: "Perpustakaan",
        text: "Koleksi buku pelajaran, referensi, dan ruang baca yang nyaman.",
      },
      {
        image: "/images/jurusan-dkv.jpg",
        imageAlt: "Studio desain komunikasi visual",
        title: "Studio DKV",
        text: "Studio desain untuk praktik grafis, ilustrasi, dan multimedia.",
      },
      {
        image: "/images/ekskul-futsal.jpg",
        imageAlt: "Lapangan olahraga sekolah",
        title: "Lapangan Olahraga",
        text: "Area olahraga untuk kegiatan belajar, ekstrakurikuler, dan upacara.",
      },
    ],
  },
  cta: {
    title: "Ingin Mengenal Sekolah Lebih Dekat?",
    text: "Kunjungi sekolah kami atau hubungi panitia untuk informasi profil dan penerimaan siswa baru.",
    button: { label: "Hubungi Kami", to: "/kontak" },
  },
};
