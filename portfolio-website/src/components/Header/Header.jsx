import React from "react";
import "./Header.css"
function Header() {
  return (
    <div
      id="header"
      className="w-full header flex row justify-between items-center p-10 text-white"
    >
      <div className="header__logo">
        <a className="text-[20px] font-medium tracking-[0.08rem]" href="">
          SELİMCAN GÜRSU
        </a>
      </div>
      <div className="header__menu">
        <ul className="hidden  md:flex row gap-5">
          <li className="text-[14px] font-medium tracking-[0.08rem]">
            <a className="link" href="">
              <span className="link-route"></span>
              <span className="link-name">ANASAYFA</span>
            </a>
          </li>
          <li className="text-[14px] font-medium tracking-[0.08rem]">
            <a className="link" href="">
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
              <span className="link-name">BLOG</span>
            </a>
          </li>
          <li className="text-[14px] font-medium tracking-[0.08rem]">
            <a className="link" href="">
              <span className="link-route"></span>
              <span className="link-name">İLETİŞİM</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
