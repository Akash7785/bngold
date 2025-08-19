import React from "react";
import icon from "../assets/image/useCase.png";

const UseCard = () => {
  return (
    <div className="text-white w-lg bg-black p-5 flex gap-5">
      <img className="w-20 h-20" src={icon} alt="" />
      <div className="">
        <h1 className="text-xl py-4 font-bold">Cross-Border Commodity Trade</h1>
        <p className="text-lg">
          Instantly settle international trades using gold-backed tokens.
        </p>
      </div>
    </div>
  );
};

export default UseCard;
