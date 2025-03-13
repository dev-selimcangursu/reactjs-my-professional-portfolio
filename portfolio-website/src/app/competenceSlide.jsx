import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [
    {
        text: "Takım Çalışmasına Uyum",
        desc: "Ekip içinde etkili iletişim kurarak projeleri başarıyla yönetebilirim.",
        icon: "🤝",
      },
      {
        text: "Problem Çözme Yeteneği",
        desc: "Karşılaştığım teknik zorluklara yaratıcı çözümler bulurum.",
        icon: "🛠️",
      },
      {
        text: "Araştırma ve Geliştirme",
        desc: "Yeni teknolojileri yakından takip eder, projelerime entegre ederim.",
        icon: "🔍",
      },
      {
        text: "Detay Odaklı Çalışma",
        desc: "Kullanıcı deneyimi ve performans optimizasyonuna önem veririm.",
        icon: "🎯",
      },
  ]
}

export const competenceSlide = createSlice({
  name: 'competence',
  initialState,
  reducers: {
  
  },
})

export default competenceSlide.reducer