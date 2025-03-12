import "./App.css";
import Header from "./components/Header";
import Typewriter from "typewriter-effect/dist/core";
import { useEffect, useRef } from "react";
import Button from "./components/Button";
import userİmage from "./assets/cheerful-guy-enjoying-outdoor-coffee-break-Photoroom.png";
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

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
            <Button className="p-3 border-0 w-40 text-black cursor-pointer rounded-md mt-4 text-[15px] shadow-md font-semibold bg-white">
              <span>İletişime Geç</span>
            </Button>
          </div>
          {/**  Section 1 Sağ Taraf:Başlangıç **/}
          <div className="w-full h-full home__full_screen__main__right grid grid-cols-1 md:grid-cols-2 justify-between items-center">
            <img
              style={{ height: "400px", width: "900px" }}
              src={userİmage}
              alt="my_photo"
            />
            {/**  Section 1 Sağ Taraf Sosyal Medya İkonları:Başlangıç **/}
            <div className="w-full flex row justify-center items-center gap-2 mt-5 md:flex-col md:justify-end md:items-end">
              <IoLogoInstagram size={22} />
              <IoLogoGithub size={22} />
              <IoLogoLinkedin size={22} />
            </div>
          </div>
        </div>
      </section>
      <section
        className="about__me w-full h-screen text-white p-18"
        id="about__me"
      >
        <div className="about__me__wrapper grid grid-cols-1 md:grid-cols-2 justify-between items-center">
          <div className="about__me__left">
            <img src="" alt="my_photo" />
          </div>
          <div className="about__me__right">sadasdasdad</div>
        </div>
      </section>
    </>
  );
}

export default App;
