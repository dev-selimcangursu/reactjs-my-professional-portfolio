import React from "react";
import Image from "./Image";
import General from "./General";
import DesignTools from "./DesignTools";
import Technology from "./Technology";
import Competence from "./Competence";
function About() {
  return (
    <section className="about__me w-full h-auto text-white py-20" id="about__me">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <Image />
          <div className="about-me-right space-y-10">
            <General />
            <DesignTools/>
            <Technology/>
            <Competence/>  
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
