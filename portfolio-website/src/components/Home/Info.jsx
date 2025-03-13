import React from "react";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect/dist/core";
import Button from "../Button";

function Info() {
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
    <div className="w-full h-full home__full_screen__main__left">
      <p className="text-[20px] font-[600px]">Merhaba, Ben</p>
      <h1 className="text-5xl md:text-[60px] font-bold">{about[0].fullname}</h1>
      <h3
        className="text-red-600 text-2xl md:text-[28px] font-bold"
        ref={typewriterRef}
      ></h3>
      <p className="text-[17px] text-gray-500 mt-2">
        Modern ve işlevsel web çözümleri üreten bir web geliştiriciyim.
        Kullanıcı odaklı tasarımlar ve güçlü kod yapılarıyla markaların dijital
        dünyada öne çıkmasını sağlıyorum. Estetik ve performansı bir araya
        getirerek etkileyici web deneyimleri sunuyorum.
      </p>
      <Button
        id="contactButton"
        className="p-3 border-0 w-40 text-black cursor-pointer rounded-md mt-4 text-[15px] shadow-md font-semibold bg-white relative overflow-hidden"
      >
        <span className="contact-route"></span>
        <span className="contact-text">İletişime Geç</span>
      </Button>
    </div>
  );
}

export default Info;
