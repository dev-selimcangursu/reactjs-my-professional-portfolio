import React from "react";

function Portfolio(props) {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 border-0 shadow-lg rounded-lg w-full p-6 
    bg-[#001e35] hover:border-red-500 hover:border transition duration-300"
    >
      <div className="flex justify-center items-center">
        <img
          src=""
          alt=""
          className="w-32 h-32 md:w-65 md:h-50 object-cover rounded-lg shadow-md"
        />
      </div>
      <div className="flex flex-col justify-between items-start p-4 text-white">
        <h3 className="text-lg font-semibold">{props.portfolio.title}</h3>
        <p className="text-sm text-gray-300">{props.portfolio.company}</p>
        <div className="flex row">
          <span className="mt-4 px-3 py-1 me-2 text-xs font-semibold bg-red-500 text-white rounded-full">
            {props.portfolio.subject}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
