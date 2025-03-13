import React from "react";
import { useSelector } from "react-redux";
import Service from "./Service";
function ServiceList() {
  const services = useSelector((state) => state.services.value);

  return (
    <section
      id="my__services"
      className="my__services w-full h-auto text-white p-18"
    >
      <div className="w-full my__services__title">
        <h3 className="text-center text-[40px] font-medium tracking-[3px]">
          HİZMETLERİM
        </h3>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
          {services.map((service, index) => {
            return <Service key={index} services={service} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default ServiceList;
