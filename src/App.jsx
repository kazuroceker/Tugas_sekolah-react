import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import AOS from "aos";
import Layout from "./components/layout/Layout.jsx";
import ScrollManager from "./components/layout/ScrollManager.jsx";
import HomePage from "./pages/HomePage.jsx";
import ProfilPage from "./pages/ProfilPage.jsx";
import JurusanPage from "./pages/JurusanPage.jsx";
import EkstrakurikulerPage from "./pages/EkstrakurikulerPage.jsx";
import GaleriPage from "./pages/GaleriPage.jsx";
import KontakPage from "./pages/KontakPage.jsx";
import BeritaPage from "./pages/BeritaPage.jsx";
import BeritaDetailPage from "./pages/BeritaDetailPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

function AOSManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  useEffect(() => {
    AOS.refreshHard();
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <AOSManager />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="profil" element={<ProfilPage />} />
          <Route path="jurusan" element={<JurusanPage />} />
          <Route
            path="ekstrakurikuler"
            element={<EkstrakurikulerPage />}
          />
          <Route path="galeri" element={<GaleriPage />} />
          <Route path="kontak" element={<KontakPage />} />
          <Route path="berita" element={<BeritaPage />} />
          <Route path="berita/:slug" element={<BeritaDetailPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
