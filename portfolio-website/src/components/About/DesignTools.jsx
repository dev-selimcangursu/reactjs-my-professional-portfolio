import React from "react";

function DesignTools() {
  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-200 mb-2">
        🚀 Tasarım Araçları
      </h3>
      <div className="flex flex-wrap gap-3">
        {["Canva", "Figma", "Photoshop", "Illustrator"].map((tool, index) => (
          <span
            key={index}
            className="px-3 py-1 border border-gray-500 text-sm text-gray-400 rounded-full hover:border-gray-100 hover:text-gray-100 transition"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}

export default DesignTools;
