import { site } from "./site.js";

export const notFoundPage = {
  meta: {
    title: `Halaman Tidak Ditemukan | ${site.name}`,
    description: "Halaman yang diminta tidak tersedia.",
  },
  kicker: "Halaman Tidak Ditemukan",
  code: "404",
  description:
    "Maaf, halaman yang kamu cari tidak tersedia atau sudah dipindahkan.",
  button: { label: "Kembali ke Beranda", to: "/" },
};
