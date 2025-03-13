import React from "react";
import Info from "./Info";
import Social from "./Social";
import mePhoto from "../../assets/WhatsApp Image 2025-03-13 at 21.42.55-Photoroom.png";

function Home() {
  return (
    <div className="home__full__screen__main w-full grid grid-cols-1 p-3 md:grid-cols-2 justify-between items-center md:p-18 gap-30 text-white">
      <Info />
      <div className="w-full h-full home__full_screen__main__right grid grid-cols-1 md:grid-cols-2 justify-between items-center">
  <img
    className="w-full h-[400px] md:h-auto object-cover md:col-span-2 -mt-35"
    src={mePhoto}
    alt="my_photo"
  />
  <Social />
</div>

    </div>
  );
}

export default Home;
