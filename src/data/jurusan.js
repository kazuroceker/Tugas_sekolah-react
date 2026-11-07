import { site } from "./site.js";

export const jurusanPage = {
  meta: {
    title: `Kompetensi Keahlian | ${site.name}`,
    description:
      "Empat kompetensi keahlian SMK LPPM RI BANDUNG: TKJ, RPL, DKV, dan Akuntansi & Keuangan Lembaga.",
  },
  header: {
    breadcrumb: [{ label: "Beranda", to: "/" }, { label: "Jurusan" }],
    title: "Kompetensi Keahlian",
    description:
      "Empat jurusan dengan pembelajaran berbasis praktik dan kebutuhan industri.",
  },
  intro: {
    kicker: "Pilih Jalurmu",
    title: "Empat Kompetensi Keahlian",
    description:
      "Setiap jurusan dirancang agar siswa memiliki keterampilan praktis, pemahaman teori, dan pengalaman proyek nyata.",
  },
  tabs: [
    {
      id: "tkj",
      label: "Teknik Komputer & Jaringan",
      title: "Teknik Komputer & Jaringan",
      image: "/images/jurusan-tkj.jpg",
      imageAlt: "Jurusan Teknik Komputer & Jaringan",
      description:
        "Mempelajari instalasi jaringan, administrasi server, keamanan siber, dan layanan internet.",
      careers: [
        "Network Engineer",
        "Teknisi Jaringan",
        "Administrator Server",
        "Cyber Security Analyst",
      ],
      facilities: [
        "Laboratorium jaringan",
        "Perangkat router & switch",
        "Praktik fiber optik",
      ],
    },
    {
      id: "rpl",
      label: "Rekayasa Perangkat Lunak",
      title: "Rekayasa Perangkat Lunak",
      image: "/images/jurusan-rpl.jpg",
      imageAlt: "Jurusan Rekayasa Perangkat Lunak",
      description:
        "Mempelajari pemrograman web, mobile, basis data, dan pengembangan aplikasi secara terstruktur.",
      careers: [
        "Web Developer",
        "Mobile Developer",
        "Quality Assurance",
        "Data Analyst",
      ],
      facilities: [
        "Laboratorium pemrograman",
        "Server pengembangan",
        "Praktik proyek aplikasi",
      ],
    },
    {
      id: "dkv",
      label: "Desain Komunikasi Visual",
      title: "Desain Komunikasi Visual",
      image: "/images/jurusan-dkv.jpg",
      imageAlt: "Jurusan Desain Komunikasi Visual",
      description:
        "Mempelajari desain grafis, ilustrasi, fotografi, videografi, dan desain antarmuka.",
      careers: [
        "Graphic Designer",
        "UI/UX Designer",
        "Animator",
        "Video Editor",
      ],
      facilities: [
        "Studio desain",
        "Komputer grafis",
        "Kamera & perangkat produksi",
      ],
    },
    {
      id: "akl",
      label: "Akuntansi & Keuangan Lembaga",
      title: "Akuntansi & Keuangan Lembaga",
      image: "/images/jurusan-akl.jpg",
      imageAlt: "Jurusan Akuntansi & Keuangan Lembaga",
      description:
        "Mempelajari pencatatan keuangan, perpajakan, administrasi, dan pengelolaan laporan keuangan.",
      careers: ["Staff Akuntansi", "Teller Bank", "Staff Pajak", "Wirausaha"],
      facilities: [
        "Laboratorium akuntansi",
        "Software akuntansi",
        "Praktik administrasi",
      ],
    },
  ],
  cta: {
    title: "Belum Yakin Memilih Jurusan?",
    text: "Konsultasikan minat dan bakatmu dengan guru bimbingan konseling atau hubungi kami.",
    button: { label: "Konsultasi", to: "/kontak" },
  },
};
