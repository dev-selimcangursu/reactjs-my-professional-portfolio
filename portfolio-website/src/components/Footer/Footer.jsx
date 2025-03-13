import React from "react";
import { FaInstagram, FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full bg-[#011627] text-white py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        
        {/* Sosyal Medya İkonları */}
        <div className="flex gap-4 mb-4 md:mb-0">
          <a href="#" className="text-pink-500 hover:text-pink-600"><FaInstagram size={16} /></a>
          <a href="#" className="text-red-500 hover:text-red-600"><FaYoutube size={16} /></a>
          <a href="#" className="text-blue-500 hover:text-blue-600"><FaLinkedin size={16} /></a>
          <a href="#" className="text-gray-400 hover:text-gray-500"><FaGithub size={16} /></a>
        </div>

        {/* Menü Linkleri */}
        <nav className="text-gray-300 text-sm space-x-4 mb-4 md:mb-0">
          <a href="#" className="hover:text-white">Anasayfa</a>
          <a href="#" className="hover:text-white">Hakkımda</a>
          <a href="#" className="hover:text-white">Servisler</a>
          <a href="#" className="hover:text-white">Portföy</a>
          <a href="#" className="hover:text-white">İletişim</a>
        </nav>

        {/* Telif Hakkı */}
        <div className="text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} <a className="underline" href="">Selimcan Gürsu</a> Tüm hakları saklıdır.</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
