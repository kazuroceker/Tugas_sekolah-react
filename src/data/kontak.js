import { site } from "./site.js";

export const contactPage = {
  meta: {
    title: `Kontak | ${site.name}`,
    description:
      "Hubungi SMK LPPM RI BANDUNG untuk informasi PPDB, kerja sama industri, atau pertanyaan umum.",
  },
  header: {
    breadcrumb: [{ label: "Beranda", to: "/" }, { label: "Kontak" }],
    title: "Kontak",
    description:
      "Hubungi sekolah untuk informasi penerimaan siswa baru, kerja sama, atau pertanyaan umum.",
  },
  info: {
    kicker: "Hubungi Kami",
    title: "Informasi Kontak",
    description:
      "Kami siap membantu pertanyaan seputar penerimaan siswa baru, kerja sama industri, atau informasi sekolah lainnya.",
    items: [
      {
        icon: "location",
        label: "Alamat",
        value: site.address,
      },
      {
        icon: "phone",
        label: "Telepon",
        value: site.phone.local,
        href: site.phone.href,
      },
      {
        icon: "whatsapp",
        label: "WhatsApp",
        value: site.whatsapp.display,
        href: site.whatsapp.href,
        external: true,
      },
      {
        icon: "email",
        label: "Email",
        value: site.email.display,
        href: site.email.href,
      },
      {
        icon: "clock",
        label: "Jam Layanan",
        value: site.hours,
      },
    ],
  },
  form: {
    kicker: "Formulir",
    title: "Kirim Pesan",
    success:
      "Terima kasih. Pesanmu sudah kami terima dan akan segera ditindaklanjuti.",
    fields: {
      name: {
        label: "Nama Lengkap",
        placeholder: "",
        invalid: "Nama wajib diisi.",
      },
      email: {
        label: "Email",
        placeholder: "",
        invalid: "Email wajib diisi dengan format yang benar.",
      },
      phone: {
        label: "Nomor Telepon",
        placeholder: "",
        invalid: "Nomor telepon wajib diisi.",
      },
      subject: {
        label: "Subjek",
        placeholder: "Pilih subjek",
        invalid: "Pilih salah satu subjek.",
        options: [
          { value: "PPDB", label: "Penerimaan Siswa Baru" },
          { value: "Kerja Sama", label: "Kerja Sama Industri" },
          { value: "Informasi Umum", label: "Informasi Umum" },
        ],
      },
      message: {
        label: "Pesan",
        placeholder: "",
        invalid: "Pesan wajib diisi.",
      },
    },
    submitLabel: "Kirim Pesan",
  },
  map: {
    title: "Lokasi SMK LPPM RI BANDUNG di Google Maps",
    offlineTitle: "Peta belum dapat ditampilkan.",
    offlineText:
      "Koneksi internet diperlukan untuk memuat Google Maps. Silakan gunakan alamat sekolah berikut.",
    linkLabel: "Buka di Google Maps \u2192",
    linkHref:
      "https://www.google.com/maps/search/?api=1&query=SMK+LPPM+RI+%26+SMA+Karya+Agung+Bandung",
  },
};
