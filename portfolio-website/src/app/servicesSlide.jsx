import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [
    {
      title: "💻 Web Geliştirme Hizmetleri",
      main: [
        {
          submain:
            "Laravel, React, Node.js gibi modern framework’ler ile web uygulamaları geliştirme.",
        },
        {
          submain:
            "Özelleştirilmiş veri tabanı yapıları ve optimizasyonları oluşturma.",
        },
        {
          submain:
            "Landing Page Tasarımı – Ürün veya hizmet tanıtımı için dönüşüm odaklı tek sayfalık siteler.",
        },
        {
          submain: "Kullanıcı doğrulama ve yetkilendirme sistemleri kurma.",
        },
        {
          submain: "Performans iyileştirmeleri ve hız optimizasyonları yapma.",
        },
        {
          submain:
            "API entegrasyonu ile dış sistemlerle veri paylaşımı sağlama.",
        },
      ],
    },
    {
      title: "🛠 E-Ticaret Çözümleri",
      main: [
        {
          submain: "Kullanıcı dostu e-ticaret platformları oluşturma.",
        },
        {
          submain:
            "Ürün yönetimi, stok takibi ve sipariş yönetimi sistemleri geliştirme.",
        },
        {
          submain:
            "Ödeme sistemleri entegrasyonu (PayPal, Stripe, kredi kartı vb.).",
        },
        {
          submain: "Güvenli ödeme ve kullanıcı verisi yönetimi sağlama.",
        },
        {
          submain:
            "Kullanıcı hesapları ve alışveriş geçmişi gibi özellikler ekleme.",
        },
        {
          submain: "Ürün arama, filtreleme ve kategori düzenlemeleri yapma.",
        },
      ],
    },
    {
      title: "🎨 Web Tasarımı ve UI/UX Geliştirme",
      main: [
        {
          submain: "Kullanıcı dostu ve şık web tasarımları oluşturma.",
        },
        {
          submain: "Mobil uyumlu (responsive) tasarımlar geliştirme.",
        },
        {
          submain:
            "Kullanıcı deneyimini (UX) iyileştirme ve kullanıcı arayüzü (UI) optimizasyonu.",
        },
        {
          submain: "Web tasarımı için Figma, Canva gibi araçlar kullanma..",
        },
        {
          submain: "SEO uyumlu ve hızlı yüklenen web sayfaları geliştirme.",
        },
        {
          submain:
            "Erişilebilirlik standartlarına uygun web siteleri tasarlama.",
        },
      ],
    },
    {
      title: "🎨 API Geliştirme ve Entegrasyonları",
      main: [
        {
          submain:
            "RESTful API’ler oluşturma ve mevcut sistemlere entegre etme.",
        },
        {
          submain:
            "Dış servislerle entegrasyon için özelleştirilmiş API çözümleri geliştirme.",
        },
        {
          submain: "Web servisleri üzerinden veri alımı ve gönderimi sağlama.",
        },
        {
          submain: "API ile veri tabanı yönetimi ve iş mantığı oluşturma.",
        },
        {
          submain: "API güvenliği için OAuth, JWT gibi standartlar kullanma.",
        },
        {
          submain:
            "Üçüncü parti API’lerle (Google Maps, Twitter, ödeme sistemleri vb.) entegrasyon sağlama.",
        },
      ],
    },
    {
      title: "🔗 SEO ve Dijital Pazarlama",
      main: [
        {
          submain: "Web siteniz için kapsamlı SEO denetimleri yapma.",
        },
        {
          submain: "Anahtar kelime araştırması ve içerik optimizasyonu.",
        },
        {
          submain:
            "Sayfa içi SEO (meta etiketler, başlık etiketleri, URL yapısı) uygulamaları.",
        },
        {
          submain: "Bağlantı inşası ve backlink stratejileri oluşturma.",
        },
        {
          submain: "Sosyal medya pazarlama ve reklam kampanyaları yönetme.",
        },
        {
          submain:
            "Google Ads ve Facebook Ads gibi dijital reklam araçlarıyla kampanya oluşturma.",
        },
      ],
    },
  ],
};

export const servicesSlide = createSlice({
  name: "services",
  initialState,
  reducers: {},
});

export default servicesSlide.reducer;
