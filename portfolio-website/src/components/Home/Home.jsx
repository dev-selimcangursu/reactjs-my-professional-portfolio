import React from "react";
import Info from "./Info";
import Social from "./Social";
import profilePhoto from "../../assets/3bfe7f54-fff8-48a1-a3ce-f79393eed8ab.jpg"

function Home() {
  return (
    <div className="home__full__screen__main w-full grid grid-cols-1 p-3 md:grid-cols-2 justify-between items-center md:p-18 gap-30 text-white">
      <Info />
      <div className="w-full h-full home__full_screen__main__right grid grid-cols-1 md:grid-cols-2 justify-between items-center">
  <img
    className="w-full h-[400px] md:h-auto object-cover md:col-span-2 -mt-35"
    src={profilePhoto}
    alt="my_photo"
  />
  <Social />
</div>

    </div>
  );
}

export default Home;
