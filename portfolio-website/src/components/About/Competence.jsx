import React from "react";

function Competence() {
  return (
    <div className="rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold text-gray-200 mb-4 flex items-center">
        🚀 Öne Çıkan Yetkinliklerim:
      </h3>
      <ul className="space-y-3">
        {[
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
        ].map((item, index) => (
          <li
            key={index}
            className="flex items-start gap-3 p-3 bg-gray-700 rounded-md hover:bg-gray-600 transition"
          >
            <span className="text-lg">{item.icon}</span>
            <div>
              <p className="text-md font-medium text-gray-200">{item.text}</p>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Competence;
