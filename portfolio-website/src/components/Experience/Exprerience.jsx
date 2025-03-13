import React from "react";
import { FaLocationDot, FaBusinessTime } from "react-icons/fa6";

function Exprerience(props) {
  return (
    <div
      style={{ backgroundColor: "#011627" }}
      className="grid grid-rows-1 md:grid-rows-2 gap-6 border-0 shadow-lg rounded-lg w-full p-8 bg-black hover:border-red-500 hover:border-2 transition-all duration-300"
    >
      <h3 className="font-semibold text-white text-[18px] mb-2 md:flex items-center">
        <FaBusinessTime className="me-1 hidden md:block" />
        {props.experience.company} / {props.experience.title}
      </h3>
      <small className="text-[14px] text-gray-300">
        {props.experience.main}
      </small>
      <div className="mt-2">
        <small className="text-[13px] text-gray-500 flex row items-center">
          <FaLocationDot />
          {props.experience.location}
        </small>
      </div>
      <div className="w-60 px-4 py-2 border-2 border-gray-600 rounded-full text-[13px] flex items-center justify-center">
        <span>{props.experience.start_time}</span> -{" "}
        <span>{props.experience.end_time}</span>
      </div>
    </div>
  );
}

export default Exprerience;
