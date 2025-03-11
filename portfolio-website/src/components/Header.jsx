import React from "react";

function Header() {
  return (
    <div
      id="header"
      className="w-full header flex row justify-between items-center p-10 text-white"
    >
      <div className="header__logo">
        <a className="text-[20px] font-large tracking-[0.08rem]" href="">
          SELİMCAN GÜRSU
        </a>
      </div>
      <div className="header__menu">
        <ul className="flex row gap-5">
          <li className="text-[14px] font-medium tracking-[0.08rem]">
            <a href="">ANASAYFA</a>
          </li>
          <li className="text-[14px] font-medium tracking-[0.08rem]">
            <a href="">HAKKIMDA</a>
          </li>
          <li className="text-[14px] font-medium tracking-[0.08rem]">
            <a href="">SERVİSLER</a>
          </li>
          <li className="text-[14px] font-medium tracking-[0.08rem]">
            <a href="">PORTFOLIO</a>
          </li>
          <li className="text-[14px] font-medium tracking-[0.08rem]">
            <a href="">BLOG</a>
          </li>
          <li className="text-[14px] font-medium tracking-[0.08rem]">
            <a href="">İLETİŞİM</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
