import React from 'react'
import { useSelector } from "react-redux";
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

function Social() {
    const about = useSelector((state) => state.about.value);
  return (
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
  )
}

export default Social