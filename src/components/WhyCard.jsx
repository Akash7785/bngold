import React from "react";
import icon from "../assets/image/gold.png";
import coin from "../assets/image/whybgold.png";
import whyBox from "../assets/image/whyBox.png";
import whygradient from "../assets/image/whygradient.png";

const WhyCard = () => (
  <div className="relative flex w-sm">  {/* Increased width here */}
    {/* Gradient attached to left side */}
    <img
      src={whygradient}
      alt="gradient"
      className="absolute left-3 top-5 h-[80%] w-17 z-20"
      style={{ borderTopLeftRadius: "0.75rem", borderBottomLeftRadius: "0.75rem" }} // rounded-l-xl
    />
    {/* Card with whyBox as background */}
    <div
      className="relative w-full rounded-xl overflow-visible pl-3 pr-4 pt-7 pb-7"
      style={{
        backgroundImage: `url(${whyBox})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Content overlays directly on the image */}
      <div className="relative z-30 p-5"> {/* z-index to keep content above gradient */}
        <div className="flex items-center gap-3">
          <img src={icon} alt="" className="mb-2 w-6 h-6" />
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
      className="absolute -top-15 -right-2 w-44 h-44 rounded-full"
      style={{ zIndex: 40 }}
    />
  </div>
);

export default WhyCard;
