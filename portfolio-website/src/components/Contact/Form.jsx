import React from "react";
import Button from "../Button";
function Form() {
  return (
    <div className="w-full grid grid-cols-1 p-5">
      <h3 className="font-semibold text-[18px]">İletişime Geçin</h3>
      <form className="grid grid-cols-1 mt-5">
        <div className="w-full grid grid-cols-1 md:grid-cols-2  gap-5">
          <input
            className="w-full h-9 border-1 border-gray-500 ps-3 rounded-md"
            type="text"
            placeholder="İsim"
          />
          <input
            className="w-full h-9 border-1 border-gray-500 ps-3 rounded-md"
            type="text"
            placeholder="E-Posta"
          />
        </div>
        <input
          className="w-full h-9 border-1 border-gray-500 mt-3 ps-3 rounded-md"
          type="text"
          placeholder="Konu"
        />
        <textarea
          className="border-1 border-gray-500 mt-3 ps-3 rounded-md"
          rows={10}
          type="text"
          placeholder="Mesajınız"
        />
        <Button className="btn bg-white text-black w-40 mt-3 h-12 cursor-pointer font-semibold rounded-md text-sm">
          Bize Ulaşın
        </Button>
      </form>
    </div>
  );
}

export default Form;
