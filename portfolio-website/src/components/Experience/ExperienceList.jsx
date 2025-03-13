import React from "react";
import Experience from "./Exprerience";
import { useSelector } from "react-redux";

function ExperienceList() {
  const experience = useSelector((state) => state.experience.value);

  return (
    <section
      id="my__experience"
      className="my__experience w-full h-auto text-white p-18"
    >
      <div className="w-full my__services__title">
        <h3 className="text-center text-[40px] font-medium tracking-[3px]">
          DENEYİMLERİM
        </h3>
        <div className="w-full grid grid-cols-1 md:grid-cols-1 gap-5 mt-10">
          {experience.map((experience, index) => {
            return <Experience key={index} experience={experience} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default ExperienceList;
