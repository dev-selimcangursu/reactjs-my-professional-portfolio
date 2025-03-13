import React from "react";
import "./Header.css";
import { RxHamburgerMenu } from "react-icons/rx";
import MobileMenu from "./MobileMenu";
import { useState } from "react";

function Header() {
  // Mobil Görünüm İkonu Aktif Pasif Durumu
  const [statusMobileShow,setStatusMobileShow] = useState(false);

  // Mobile Menü İkonuna Basıldığında Ekranın Açılması veya  Kapanması Durumu
  function openPhoneMenu() {
      setStatusMobileShow(!statusMobileShow)

  }
  console.log(statusMobileShow)

  return (
    <>
      <div
        id="header"
        className="w-full header flex row justify-between items-center p-10 text-white relative"
      >
        <div className="header__logo">
          <a className="text-[20px] font-medium tracking-[0.08rem]" href="">
            SELİMCAN GÜRSU
          </a>
        </div>
        <div className="header__menu">
          <ul className="hidden  md:flex row gap-5">
            <li className="text-[14px] font-medium tracking-[0.08rem]">
              <a className="link" href="#home__full_screen">
                <span className="link-route"></span>
                <span className="link-name">ANASAYFA</span>
              </a>
            </li>
            <li className="text-[14px] font-medium tracking-[0.08rem]">
              <a className="link" href="#about__me">
                <span className="link-route"></span>
                <span className="link-name">HAKKIMDA</span>
              </a>
            </li>
            <li className="text-[14px] font-medium tracking-[0.08rem]">
              <a className="link" href="">
                <span className="link-route"></span>
                <span className="link-name">SERVİSLER</span>
              </a>
            </li>
            <li className="text-[14px] font-medium tracking-[0.08rem]">
              <a className="link" href="">
                <span className="link-route"></span>
                <span className="link-name">PORTFOLIO</span>
              </a>
            </li>
            <li className="text-[14px] font-medium tracking-[0.08rem]">
              <a className="link" href="">
                <span className="link-route"></span>
                <span className="link-name">İLETİŞİM</span>
              </a>
            </li>
          </ul>
          <a onClick={openPhoneMenu} type="button" className="block md:hidden text-3xl">
            <RxHamburgerMenu />
          </a>
        </div>
      </div>
       {statusMobileShow && <MobileMenu/>}
    </>
  );
}

export default Header;
