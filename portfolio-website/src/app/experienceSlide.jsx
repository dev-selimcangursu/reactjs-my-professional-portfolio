import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [
    {
      company: "Just English Dil Okulları",
      title: "Full Stack Web Developer",
      main: "Just English Dil firmasında Full Stack Web Developer olarak çalıştım ve bu süreçte hem frontend hem de backend geliştirme konusunda kapsamlı deneyim kazandım. Kullanıcı dostu arayüzler tasarlayarak, öğrenci ve öğretmenlerin etkileşimde bulunduğu platformları optimize ettim. Laravel ve Node.js gibi teknolojilerle sağlam API’ler oluşturdum, veritabanı yönetimi için MySQL ve MongoDB ile çalıştım.Bu süreçte hem teknik bilgi hem de takım çalışması yeteneklerimi geliştirerek, eğitim süreçlerini daha verimli ve erişilebilir hale getiren yenilikçi çözümler sundum. ",
      start_time: "01.08.2023",
      end_time: "Devam Ediyor",
      location: "İstanbul/Kadıköy",
    },
    {
      company: "Amerikan Estetik Hastanesi",
      title: "Full Stack Web Developer",
      main: "Amerikan Estetik firmasında Full Stack Developer olarak çalıştım ve bu süreçte hem klinik hem de hasta deneyimlerini iyileştiren dijital çözümler geliştirdim. Modern web teknolojileri kullanarak, kullanıcı dostu ve mobil uyumlu hasta portalları ve randevu sistemleri tasarladım.hasta bilgileri ve randevu yönetimi gibi hassas verilerin güvenliğini sağlamak için en iyi uygulamaları takip ettim. Sürekli olarak sistem performansını iyileştirerek, hasta memnuniyetini artıracak yenilikçi özellikler ekledim .Hem teknik hem de iş süreçlerine olan katkılarım, hastanenin dijital altyapısının gelişmesine önemli ölçüde katkı sağladı.",
      start_time: "01.01.2024",
      end_time: "01.01.2025",
      location: "İstanbul/Şişli",
    },
    {
      company: "Wiky Watch Akıllı Çocuk Saatleri",
      title: "Full Stack Web Developer",
      main: "Wiky Watch akıllı çocuk saatleri firmasında full stack web developer olarak görev aldım. Bu süreçte, hem müşteri tarafında kullanılan web sitesinin hem de dahili kullanım için geliştirilmiş CRM sistemi ve yönetim panellerinin tasarım ve geliştirilmesinde aktif rol aldım. Web teknolojileri ve veritabanı yönetimi konusunda deneyim kazanarak, kullanıcı dostu arayüzler oluşturmanın yanı sıra, dinamik ve verimli arka uç çözümleri geliştirdim. Ayrıca, sistem entegrasyonları ve kullanıcı verilerinin yönetimi gibi konularda da katkı sağladım, böylece firma içindeki operasyonel süreçlerin verimli hale gelmesine yardımcı oldum. ",
      start_time: "01.08.2023",
      end_time: "Devam Ediyor",
      location: "İstanbul/Üsküdar",
    },
    {
      company: "Freelance İş",
      title: "Full Stack Web Developer",
      main: "Freelance web geliştirme alanında çeşitli projelerde çalışarak geniş bir deneyim kazandım. Müşterilerimin ihtiyaçlarına göre özelleştirilmiş web siteleri, e-ticaret platformları ve uygulamalar geliştirdim. React, Laravel, Node.js gibi modern teknolojilerle dinamik ve ölçeklenebilir çözümler sundum. Ayrıca, SEO optimizasyonu, kullanıcı deneyimi (UX) ve arayüz tasarımı (UI) konularında da çalışmalar yaparak, müşterilerimin dijital varlıklarını güçlendirdim. Freelance projelerde, müşteri odaklı yaklaşımım ve zaman yönetimi becerilerimle, her projeyi zamanında ve yüksek kaliteli şekilde teslim ettim. Hem küçük ölçekli işletmeler hem de büyük projeler için çözümler sunarak, müşterilerimin dijital hedeflerine ulaşmalarına yardımcı oldum.",
      start_time: "-",
      end_time: "-",
      location: "İstanbul",
    },
  ],
};

export const experienceSlide = createSlice({
  name: "experience",
  initialState,
  reducers: {},
});

export default experienceSlide.reducer;
