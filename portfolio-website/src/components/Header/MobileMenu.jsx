import React from "react";

function MobileMenu() {
  return (
    <div className="absolute top-25 left-0 w-full h-auto bg-white shadow-lg rounded-md p-6 z-10 md:hidden">
    <ul className="flex flex-col space-y-4">
      {[
        { name: "ANASAYFA", href: "#" },
        { name: "HAKKIMDA", href: "#" },
        { name: "SERVİSLERİM", href: "#" },
        { name: "PORTFOLİO", href: "#" },
        { name: "BLOG", href: "#" },
        { name: "İLETİŞİM", href: "#" },
      ].map((item, index) => (
        <li key={index}>
          <a
            href={item.href}
            className="block text-gray-900 font-semibold text-sm tracking-wide px-4 py-2 transition-all duration-300 hover:text-white hover:bg-black rounded-md"
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
  
  );
}

export default MobileMenu;
