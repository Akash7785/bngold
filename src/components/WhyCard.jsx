import React from "react";
// Replace these imports with your actual asset paths
import icon from "../assets/image/gold.png";
import coin from "../assets/image/whybgold.png";

const WhyCard = () => (
  <div className="relative flex max-w-sm">
    {/* Card */}
    <div className="relative w-full rounded-xl border border-white/20 overflow-visible pl-3 pr-4 pt-7 pb-7 bg-white/10 backdrop-blur-xs">
      {/* Gradient Left Border */}
      <div className="absolute top-0 left-0 h-full w-1 rounded-l-xl bg-gradient-to-b from-cyan-400 to-white" />
      {/* Content */}
      <div className="relative z-10 p-5">
        <div className="flex items-center gap-3">
          <img src={icon} alt="" className="mb-2 w-6 h-6 text-[#15BFFD]" />
          <h3 className="text-cyan-400 text-lg font-bold mb-5">
            Binance Smart Chain
          </h3>
        </div>
        <p className="text-white text-base px-10">
          Each token is secured with 250 grams of gold — offering stability
          unlike typical volatile cryptos.
        </p>
      </div>
    </div>

    {/* Coin above card, absolute positioning */}
    <img
      src={coin}
      alt="coin"
      className="absolute -top-18 -right-15 w-44 h-44 rounded-full"
      style={{ zIndex: 20 }}
    />
  </div>
);

export default WhyCard;
