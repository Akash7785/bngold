import React from "react";
import Hbeat from "../assets/image/Hbeat.png";
import hand from "../assets/image/hand.png";
import arrow from "../assets/image/arrow.png";

const steps = [
  "Create a BSC Wallet (MetaMask / Trust Wallet)",
  "Fund with USDT, BNB & Bitcoin",
  "Connect Wallet to ICO Portal",
  "Buy BIGOD and get tokens instantly"
];

const Buy = () => (
  <div
    className="w-full min-h-[500px] py-52 flex flex-col justify-center items-center"
    style={{
      background: "linear-gradient(90deg, #00080D, #011A29, #00080D)"
    }}
  >
    <h1 className="text-center text-3xl font-bold text-[#15BFFD] font-Montserrat mb-3">
      How to Buy Bigod
    </h1>
    <img src={Hbeat} alt="heartbeat" className="mb-10 mx-auto" />

    {/* Use justify-between and set max width */}
    <div className="flex flex-row justify-between items-center w-full max-w-4xl mx-auto">
      {/* Left: Hand with blue glow */}
      <div className="relative flex w-72 justify-center items-center">
        <div className="absolute z-0 w-72 h-72 left-1/2 top-[52%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#15BFFD33] blur-2xl" />
        <img src={hand} alt="robot hand" className="relative z-10 w-56" />
      </div>

      {/* Right: Steps */}
      <div className="flex flex-col items-start ml-10 max-w-lg flex-1">
        {steps.map((text, idx) => (
          <div key={idx} className="flex p-2 items-center mb-5">
            <img src={arrow} alt="arrow" className="w-7 h-7 mr-3" />
            <p className="text-white text-lg font-medium">{text}</p>
          </div>
        ))}
        <div className="text-[#15BFFD] mt-3 text-base font-semibold">
          Minimum investment: $10 | <span className="text-[#2993f7]">KYC Required</span>
        </div>
      </div>
    </div>
  </div>
);

export default Buy;
