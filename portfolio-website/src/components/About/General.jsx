import React from "react";
import { useSelector } from "react-redux";

function General() {
    const about = useSelector((state) => state.about.value);

  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-200 mb-2">🚀 Hakkımda</h3>
      <p className="text-md text-gray-400 leading-relaxed">
        {about[0].description}
      </p>
    </div>
  );
}

export default General;
