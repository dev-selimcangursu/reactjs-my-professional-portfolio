import React from "react";
import { useState } from "react";
function Card(props) {

    const [submain,setSubmain] = useState(props.services.main);
    console.log(submain)
    return (
        <div
            style={{ backgroundColor: "#001e35" }}
            className="flex flex-col border-0 shadow-lg rounded-lg w-full p-6 bg-black hover:border-red-500 hover:border-1"
        >
            <h3 className="font-semibold text-[22px]  text-center text-white mt-4">
                {props.services.title}
            </h3>
            <ul className="mt-6 space-y-4">
               {submain.map((main,index)=>(
                 <li key={index} className="text-[16px] text-gray-300 flex items-center">
                   <span className="mr-2">✔️</span> {main.submain}
                </li>
               ))}
            
            </ul>
        </div>
    );
}

export default Card;
