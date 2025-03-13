import React from "react";
import { FaLocationDot, FaBusinessTime } from "react-icons/fa6";

function Experience(props) {
  return (
    <div
      style={{ backgroundColor: "#011627" }}
      className="w-full mx-auto grid grid-rows-1 md:grid-rows-2 gap-4 border-0 shadow-lg rounded-lg 
      p-4 md:p-8 hover:border-red-500 hover:border-2 transition-all duration-300"
    >
      <h3 className="font-semibold text-white text-sm md:text-lg mb-2 md:flex items-center">
        <FaBusinessTime className="me-1 hidden md:block" />
        {props.experience.company} / {props.experience.title}
      </h3>

      <small className="text-xs md:text-sm text-gray-300">
        {props.experience.main}
      </small>

      <div className="mt-2">
        <small className="text-xs md:text-sm text-gray-500 flex items-center">
          <FaLocationDot className="me-1" />
          {props.experience.location}
        </small>
      </div>

      <div className="w-full md:w-60 px-4 py-2 border-2 border-gray-600 rounded-full 
      text-xs md:text-sm flex items-center justify-center">
        <span>{props.experience.start_time}</span> -{" "}
        <span>{props.experience.end_time}</span>
      </div>
    </div>
  );
}

export default Experience;
