import React from "react";
import Info from "./Info";
import Social from "./Social";

function Home() {
  return (
    <div className="home__full__screen__main w-full grid grid-cols-1 md:grid-cols-2 justify-between items-center p-18 gap-30 text-white">
      <Info />
      <div className="w-full h-full home__full_screen__main__right grid grid-cols-1 md:grid-cols-2 justify-between items-center">
        <img
          className="w-full h-auto max-w-lg md:max-w-xl lg:max-w-2xl"
          src=""
          alt="my_photo"
        />
        <Social />
      </div>
    </div>
  );
}

export default Home;
