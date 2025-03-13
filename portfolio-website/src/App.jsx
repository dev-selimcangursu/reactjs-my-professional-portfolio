import "./App.css";
import Header from "./components/Header/Header";
import Typewriter from "typewriter-effect/dist/core";
import { useEffect, useRef } from "react";
import Button from "./components/Button";
import userİmage from "./assets/cheerful-guy-enjoying-outdoor-coffee-break-Photoroom.png";
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import Box from "./components/Box";

function App() {
  // TypeWriter Kütüphanesi
  const typewriterRef = useRef(null);
  useEffect(() => {
    new Typewriter(typewriterRef.current, {
      strings: ["Full Stack Web Developer"],
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
            <h1 className="text-[60px] font-bold">Selimcan Gürsu</h1>
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
              src={userİmage}
              alt="my_photo"
            />
            {/**  Section 1 Sağ Taraf Sosyal Medya İkonları:Başlangıç **/}
            <div className="w-full flex row justify-center items-center gap-2 mt-5 md:flex-col md:justify-end md:items-end">
              <IoLogoInstagram className="cursor-pointer" size={22} />
              <IoLogoGithub className="cursor-pointer" size={22} />
              <IoLogoLinkedin className="cursor-pointer" size={22} />
            </div>
          </div>
        </div>
      </section>
      <section
        className="about__me w-full h-auto text-white p-18"
        id="about__me"
      >
        <div className="about__me__wrapper grid grid-cols-1 md:grid-cols-2 justify-between items-center">
          {/**  Section 2 Sol Taraf:Başlangıç **/}
          <div className="about__me__left">
            <img src="" alt="my_photo" />
          </div>
          {/**  Section 2 Sağ Taraf:Başlangıç **/}
          <div className="about__me__right grid grid-rows-4  items-center">
            <div className="about__me__text mt-2 h-auto">
              <h3 className="text-[18px] mb-2 font-bold">Hakkımda</h3>
              <p className="text-[15px] text-gray-400">
                Ben bir web geliştiricisiyim ve kullanıcı dostu, ölçeklenebilir
                web uygulamaları oluşturmak konusunda tutkuluyum. HTML, CSS,
                JavaScript ve modern framework'lerde (React, Vue.js) deneyime
                sahibim. 
              </p>
            </div>
            <div className="about__me__text h-auto">
              <h3 className="text-[18px] mb-7 font-bold">Tasarım Araçları</h3>
              <div className="w-full h-auto grid grid-cols-1 md:flex row gap-3">
                <Box className="border-1 p-2 text-[12px] text-gray-400 rounded-full hover:border-gray-100 hover:text-gray-100">
                  Canva
                </Box>
                <Box className="border-1 p-2 text-[12px] text-gray-400 rounded-full hover:border-gray-100 hover:text-gray-100">
                  Figma
                </Box>
                <Box className="border-1 p-2 text-[12px] text-gray-400 rounded-full  hover:border-gray-100 hover:text-gray-100">
                  Photoshop
                </Box>
                <Box className="border-1 p-2 text-[12px] text-gray-400 rounded-full  hover:border-gray-100 hover:text-gray-100">
                  Illustrator
                </Box>
              </div>
            </div>
            <div className="about__me__text">
              <h3 className="text-[18px] mb-7 font-bold">
                Teknolojiler ve Beceriler
              </h3>
              <div className="w-full grid grid-cols-1 md:flex row gap-3">
                <Box className="border-1 p-2 text-[12px] text-gray-400 rounded-full hover:border-gray-100 hover:text-gray-100">
                  Html
                </Box>
                <Box className="border-1 p-2 text-[12px] text-gray-400 rounded-full hover:border-gray-100 hover:text-gray-100">
                  Css
                </Box>
                <Box className="border-1 p-2 text-[12px] text-gray-400 rounded-full  hover:border-gray-100 hover:text-gray-100">
                  Php
                </Box>
                <Box className="border-1 p-2 text-[12px] text-gray-400 rounded-full  hover:border-gray-100 hover:text-gray-100">
                  Laravel
                </Box>
                <Box className="border-1 p-2 text-[12px] text-gray-400 rounded-full  hover:border-gray-100 hover:text-gray-100">
                  Javascript
                </Box>
                <Box className="border-1 p-2 text-[12px] text-gray-400 rounded-full  hover:border-gray-100 hover:text-gray-100">
                  React.Js
                </Box>
                <Box className="border-1 p-2 text-[12px] text-gray-400 rounded-full  hover:border-gray-100 hover:text-gray-100">
                  Node.Js
                </Box>
              </div>
            </div>
            <div className="about__me__text">
              <h3 className="text-[18px] mb-2 font-bold">Çalışma Prensibim</h3>
              <p className="text-[15px] text-gray-400">
                Projelerde temiz ve optimize kod yazmaya özen gösteririm.
                Kullanıcı deneyimini ön planda tutarak modern, ölçeklenebilir ve
                sürdürülebilir web uygulamaları geliştiririm. Ekip çalışmasına
                ve sürekli öğrenmeye önem veririm.
              </p>
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
            SERVİSLERİM
          </h3>
        </div>
      </section>
    </>
  );
}

export default App;
