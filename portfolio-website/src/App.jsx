import "./App.css";
import Header from "./components/Header/Header";
import Typewriter from "typewriter-effect/dist/core";
import { useEffect, useRef } from "react";
import Button from "./components/Button";
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import Box from "./components/Box";
import { useSelector } from "react-redux";
import Card from "./components/Card";
function App() {
  const about = useSelector((state) => state.about.value);
  const services = useSelector((state) => state.services.value);


  // TypeWriter Kütüphanesi
  const typewriterRef = useRef(null);
  useEffect(() => {
    new Typewriter(typewriterRef.current, {
      strings: about[0].title,
      autoStart: true,
      loop: true,
    });
  }, []);

  return (
    <>
      <section className="home__full_screen w-full h-auto text-white">
        <Header />
        <div className="home__full__screen__main w-full grid grid-cols-1 md:grid-cols-2 justify-between items-center p-18 gap-30 text-white">
          {/**  Section 1 Sol Taraf:Başlangıç **/}
          <div className="w-full h-full home__full_screen__main__left">
            <p className="text-[20px] font-[600px]">Merhaba, Ben</p>
            <h1 className="text-[60px] font-bold">{about[0].fullname}</h1>
            <h3
              className="text-red-600 text-[28px] font-bold"
              ref={typewriterRef}
            ></h3>
            <p className="text-[17px] text-gray-500 mt-2">
              Modern ve işlevsel web çözümleri üreten bir web geliştiriciyim.
              Kullanıcı odaklı tasarımlar ve güçlü kod yapılarıyla markaların
              dijital dünyada öne çıkmasını sağlıyorum. Estetik ve performansı
              bir araya getirerek etkileyici web deneyimleri sunuyorum.
            </p>
            <Button
              id="contactButton"
              className="p-3 border-0 w-40 text-black cursor-pointer rounded-md mt-4 text-[15px] shadow-md font-semibold bg-white relative overflow-hidden"
            >
              <span className="contact-route"></span>
              <span className="contact-text">İletişime Geç</span>
            </Button>
          </div>
          {/**  Section 1 Sağ Taraf:Başlangıç **/}
          <div className="w-full h-full home__full_screen__main__right grid grid-cols-1 md:grid-cols-2 justify-between items-center">
            <img
              className="w-full h-auto max-w-lg md:max-w-xl lg:max-w-2xl"
              src=""
              alt="my_photo"
            />
            {/**  Section 1 Sağ Taraf Sosyal Medya İkonları:Başlangıç **/}
            <div className="w-full flex row justify-center items-center gap-2 mt-5 md:flex-col md:justify-end md:items-end">
              <a href={about[0].instagram}>
                {" "}
                <IoLogoInstagram className="cursor-pointer" size={22} />
              </a>
              <a href={about[0].github}>
                {" "}
                <IoLogoGithub className="cursor-pointer" size={22} />
              </a>
              <a href={about[0].linkedin}>
                {" "}
                <IoLogoLinkedin className="cursor-pointer" size={22} />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section
        className="about__me w-full h-auto text-white py-20"
        id="about__me"
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/** Sol Taraf - Profil Fotoğrafı **/}
            <div className="about-me-left flex justify-center">
              <img
                src=""
                alt="Profil Fotoğrafı"
                className="rounded-lg shadow-lg w-64 h-64 object-cover"
              />
            </div>

            {/** Sağ Taraf - İçerik **/}
            <div className="about-me-right space-y-10">
              {/** Hakkımda Açıklaması **/}
              <div>
                <h3 className="text-xl font-semibold text-gray-200 mb-2">
                  🚀 Hakkımda
                </h3>
                <p className="text-md text-gray-400 leading-relaxed">
                  {about[0].description}
                </p>
              </div>
              {/** Tasarım Araçları **/}
              <div>
                <h3 className="text-xl font-semibold text-gray-200 mb-2">
                  🚀 Tasarım Araçları
                </h3>
                <div className="flex flex-wrap gap-3">
                  {["Canva", "Figma", "Photoshop", "Illustrator"].map(
                    (tool, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 border border-gray-500 text-sm text-gray-400 rounded-full hover:border-gray-100 hover:text-gray-100 transition"
                      >
                        {tool}
                      </span>
                    )
                  )}
                </div>
              </div>
              {/** Teknolojiler ve Beceriler **/}
              <div>
                <h3 className="text-xl font-semibold text-gray-200 mb-2">
                  🚀 Teknolojiler & Beceriler
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    "HTML",
                    "CSS",
                    "PHP",
                    "Laravel",
                    "JavaScript",
                    "React.js",
                    "Node.js",
                  ].map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 border border-gray-500 text-sm text-gray-400 rounded-full hover:border-gray-100 hover:text-gray-100 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              {/** Öne Çıkan Yetkinlikler **/}
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
                        <p className="text-md font-medium text-gray-200">
                          {item.text}
                        </p>
                        <p className="text-sm text-gray-400">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="my__services"
        className="my__services w-full h-auto text-white p-18"
      >
        <div className="w-full my__services__title">
          <h3 className="text-center text-[40px] font-medium tracking-[3px]">
            HİZMETLERİM
          </h3>
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
            {services.map((service, index) => {
              return <Card key={index} services={service} />;
            })}
          </div>
        </div>
      </section>
      <section
        id="my__experience"
        className="my__experience w-full h-auto text-white p-18"
      >
        <div className="w-full my__services__title">
          <h3 className="text-center text-[40px] font-medium tracking-[3px]">
            DENEYİMİM
          </h3>
          <div className="w-full grid grid-cols-1 md:grid-cols-1 gap-5 mt-10">
            
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
