import React from "react";
import { useSelector } from "react-redux";

function Competence() {
  const competence = useSelector((state) => state.competence.value);

  return (
    <div className="rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold text-gray-200 mb-4 flex items-center">
        🚀 Öne Çıkan Yetkinliklerim:
      </h3>
      <ul className="space-y-3">
        {competence.map((item, index) => (
          <li
            key={index}
            className="flex items-start gap-3 p-3 bg-gray-700 rounded-md hover:bg-gray-600 transition"
          >
            <span className="text-lg">{item.icon}</span>
            <div>
              <p className="text-md font-medium text-gray-200">{item.text}</p>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Competence;
