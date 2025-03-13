import "./App.css";
import Header from "./components/Header/Header";
import Typewriter from "typewriter-effect/dist/core";
import { useEffect, useRef } from "react";
import Button from "./components/Button";
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { useSelector } from "react-redux";
import PortfolioList from "./components/Portfolio/PortfolioList";
import Contact from "./components/Contact/Contact";
import Footer from './components/Footer/Footer'
import ExperienceList from "./components/Experience/ExperienceList";
import ServiceList from "./components/Services/ServiceList";
import About from "./components/About/About";


function App() {

  const about = useSelector((state) => state.about.value);

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
      <section id="home__full_screen" className="home__full_screen w-full h-auto text-white">
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

      <About/>
      <ServiceList/>
      <ExperienceList/>
      <PortfolioList />
      <Contact />
      <Footer/>
    </>
  );
}

export default App;
