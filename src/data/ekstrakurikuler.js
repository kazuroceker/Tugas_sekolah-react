import { site } from "./site.js";

export const extracurricularPage = {
  meta: {
    title: `Ekstrakurikuler | ${site.name}`,
    description:
      "Wadah pengembangan bakat, minat, dan karakter siswa SMK LPPM RI BANDUNG.",
  },
  header: {
    breadcrumb: [{ label: "Beranda", to: "/" }, { label: "Ekstrakurikuler" }],
    title: "Ekstrakurikuler",
    description:
      "Wadah untuk mengembangkan bakat, minat, dan karakter siswa di luar jam pelajaran.",
  },
  intro: {
    kicker: "Kembangkan Minat",
    title: "Ekstrakurikuler Sekolah",
    description:
      "Pilih kegiatan yang sesuai dengan minatmu. Setiap ekstrakurikuler dibimbing oleh pembina dan memiliki jadwal rutin.",
  },
  filters: [
    { value: "all", label: "Semua" },
    { value: "Kepemimpinan", label: "Kepemimpinan" },
    { value: "Olahraga", label: "Olahraga" },
    { value: "Akademik", label: "Akademik" },
    { value: "Sosial", label: "Sosial" },
    { value: "Seni", label: "Seni" },
  ],
  items: [
    {
      category: "Kepemimpinan",
      title: "Pramuka",
      description:
        "Membentuk disiplin, kemandirian, dan jiwa kepemimpinan melalui kegiatan alam dan sosial.",
      coach: "Kak Budi Santoso",
      schedule: "Jumat, 14.00 - 16.00",
      image: "/images/ekskul-pramuka.jpg",
      imageAlt: "Pramuka",
    },
    {
      category: "Olahraga",
      title: "Futsal",
      description:
        "Meningkatkan kebugaran, kerja sama tim, dan sportivitas melalui latihan rutin.",
      coach: "Coach Rizky Pratama",
      schedule: "Selasa & Kamis, 15.30 - 17.00",
      image: "/images/ekskul-futsal.jpg",
      imageAlt: "Futsal",
    },
    {
      category: "Akademik",
      title: "Robotik",
      description:
        "Merancang robot sederhana, belajar pemrograman, dan mengikuti kompetisi teknologi.",
      coach: "Ibu Dewi Lestari",
      schedule: "Sabtu, 09.00 - 12.00",
      image: "/images/ekskul-robotik.jpg",
      imageAlt: "Robotik",
    },
    {
      category: "Kepemimpinan",
      title: "Paskibra",
      description:
        "Melatih kedisiplinan, kekompakan, dan rasa tanggung jawab dalam upacara bendera.",
      coach: "Bapak Andi Wijaya",
      schedule: "Rabu, 14.00 - 16.00",
      image: "/images/ekskul-paskibra.jpg",
      imageAlt: "Paskibra",
    },
    {
      category: "Sosial",
      title: "Palang Merah Remaja",
      description:
        "Belajar pertolongan pertama, kesehatan, dan kegiatan sosial kemanusiaan.",
      coach: "Ibu Siti Aminah",
      schedule: "Jumat, 14.00 - 15.30",
      image: "/images/ekskul-pmr.jpg",
      imageAlt: "Palang Merah Remaja",
    },
    {
      category: "Seni",
      title: "Seni Musik",
      description:
        "Menumbuhkan kreativitas dan keberanian tampil melalui latihan vokal dan instrumen.",
      coach: "Bapak Rudi Hartono",
      schedule: "Sabtu, 10.00 - 12.00",
      image: "/images/ekskul-musik.jpg",
      imageAlt: "Seni Musik",
    },
  ],
  cta: {
    title: "Punya Minat Lain?",
    text: "Sampaikan ide kegiatanmu kepada pembina kesiswaan. Kami terbuka untuk mengembangkan ekstrakurikuler baru.",
    button: { label: "Hubungi Sekolah", to: "/kontak" },
  },
};
