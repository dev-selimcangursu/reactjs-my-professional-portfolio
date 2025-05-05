import React from 'react'
import mePhoto from "../../assets/WhatsApp Image 2025-03-13 at 22.07.58.jpeg";
import myPhoto from "../../assets/3bfe7f54-fff8-48a1-a3ce-f79393eed8ab.jpg";

function Image() {
  return (
    <div className="about-me-left flex flex-col justify-center gap-5">
           <img
             className="w-full h-[400px] md:h-auto object-cover md:col-span-2 "
             src={mePhoto}
             alt="my_photo"
           />
             <img
             className="w-full h-[400px] md:h-auto object-cover md:col-span-2 "
             src={myPhoto}
             alt="my_photo"
           />
        </div>
  )
}

export default Image