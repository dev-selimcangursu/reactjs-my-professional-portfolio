import React from "react";
import Portfolio from "./Portfolio";
import { useSelector } from "react-redux";
function PortfolioList() {
  const portfolios = useSelector((state) => state.portfolio.value);

  return (
    <section
      id="my__portfolio"
      className="my__portfolio w-full p-3 h-auto text-white md:p-18"
    >
      <div className="w-full my__services__title">
        <h3 className="text-center text-3xl md:text-[40px] font-medium tracking-[3px]">
          PORTFÖYÜM
        </h3>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
          {portfolios.map((portfolio, index) => {
            return <Portfolio key={index} portfolio={portfolio} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default PortfolioList;
