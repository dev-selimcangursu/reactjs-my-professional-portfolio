import "./App.css";
import Header from "./components/Header";
import Typewriter from "typewriter-effect/dist/core";
import { useEffect, useRef } from "react";
import Button from "./components/Button";
import userİmage from "./assets/cheerful-guy-enjoying-outdoor-coffee-break-Photoroom.png";
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
      <div className="home__full_screen w-full h-auto text-white">
        <Header />
        <div className="home__full__screen__main w-full grid grid-cols-1 md:grid-cols-2 justify-between items-center p-18 gap-30 text-white">
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
            <Button className="mt-6 bg-white cursor-pointer text-black px-6 py-3 rounded-md shadow-lg font-semibold border-0 text-[16px] ">
              İletişime Geç
            </Button>
          </div>
          <div className="w-full h-full home__full_screen__main__right">
            <img
              style={{ height: "400px", width: "600px" }}
              src={userİmage}
              alt="my_photo"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
