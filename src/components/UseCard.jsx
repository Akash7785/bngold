
import React from "react";

const UseCard = ({ icon, title, description }) => {
  return (
    <div className="text-white w-lg bg-black p-5 flex gap-5">
      <img className="w-20 h-20" src={icon} alt="" />
      <div>
        <h1 className="text-xl py-4 font-bold">{title}</h1>
        <p className="text-lg">{description}</p>
      </div>
    </div>
  );
};

export default UseCard;
