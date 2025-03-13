import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [
    {
      fullname: "Selimcan Gürsu",
      title: "Full Stack Web Developer",
      description: `
        Merhaba ! Ben Selimcan Gürsu bir Full Stack Web Developer'im . Bu mesleğe olan ilgim,geleneksel bir eğitim sürecinden değil  tamamen kendi azmim ve merakım sayesinde gelişti.
        Marmara Üniversitesi İş Sağlığı ve Güvenliği bölümünden mezun olduktan sonra, teknolojiye olan ilgim beni web geliştirme dünyasına yönlendirdi. Kendi çabalarımla araştırmalar yaparak, çeşitli online eğitimler, kurslar ve sertifikalar ile yazılım alanında kendimi geliştirdim. İstanbul Üniversitesi'nde Web Tasarım ve Kodlama bölümüne kayıt oldum, ancak kariyerime odaklanmak için eğitimime devam etmeme kararı aldım.
        Son iki yıldır aktif olarak sektörde Full Stack Web Developer olarak çalışıyorum. Hem frontend hem de backend geliştirme süreçlerinde deneyim sahibiyim. Yenilikçi çözümler üretmeyi, araştırma yaparak güncel teknolojilere hakim olmayı ve kendimi sürekli geliştirmeyi seviyorum.
        `,
      email:'selimcangursu@yandex.com',
      phone:'5550162190',
      github:"https://github.com/dev-selimcangursu",
      linkedin:"https://www.linkedin.com/in/selimcan-g%C3%BCrsu-aa4794339?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram:"https://www.instagram.com/selimcangursu3?igsh=MTlybWhoYjQ4Y2xkNQ==",
      location:"İstanbul,Türkiye"
    },
  ],
};

export const aboutSlide = createSlice({
  name: "about",
  initialState,
  reducers: {},
});

export default aboutSlide.reducer;
