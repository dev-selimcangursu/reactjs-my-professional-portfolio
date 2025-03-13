import React from "react";
import { FaInstagram, FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa";
import { useSelector } from "react-redux";
function Info() {
  let about = useSelector((state) => state.about.value);
  console.log(about);

  return (
    <div className="w-full mx-auto bg-[#011627] text-white p-6 rounded-xl shadow-lg">
      <h3 className="text-xl font-semibold mb-4 border-b pb-2">
        Kişisel Bilgiler
      </h3>

      <div className="space-y-4">
        <div>
          <p className="text-gray-400 text-sm">İsim Soyisim</p>
          <p className="font-medium">{about[0].fullname}</p>
        </div>
        <div>
          <p className="text-gray-400 text-sm">E-Posta</p>
          <p className="font-medium">{about[0].email}</p>
        </div>
        <div>
          <p className="text-gray-400 text-sm">Telefon</p>
          <p className="font-medium">{about[0].phone}</p>
        </div>
        <div>
          <p className="text-gray-400 text-sm">Adres</p>
          <p className="font-medium">{about[0].location}</p>
        </div>
      </div>

      <div className="mt-6 flex gap-4">
        <a
          href={about[0].instagram}
          className="text-pink-500 hover:text-pink-600"
        >
          <FaInstagram size={18} />
        </a>
        <a
          href={about[0].instagram}
          className="text-red-500 hover:text-red-600"
        >
          <FaYoutube size={18} />
        </a>
        <a
          href={about[0].linkedin}
          className="text-blue-500 hover:text-blue-600"
        >
          <FaLinkedin size={18} />
        </a>
        <a href={about[0].github} className="text-gray-400 hover:text-gray-500">
          <FaGithub size={18} />
        </a>
      </div>
    </div>
  );
}

export default Info;
