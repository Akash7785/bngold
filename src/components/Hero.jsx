import React from "react";
import leftGroup from "../assets/image/leftGroup.svg";
import rightGroup from "../assets/image/rightGroup.svg";
import coinBg from "../assets/image/coinBg.png";
import coin from "../assets/image/coin.png";
import Hbeat from "../assets/image/Hbeat.png"; // Import heartbeat image

const Hero = () => {
  return (
    <div
      className="min-h-screen w-full"
      style={{
        background: "linear-gradient(90deg, #00080D, #011A29, #00080D)",
      }}
    >
      <div className="relative flex items-center justify-center min-h-screen overflow-hidden">
        {/* Left Circuit */}
        <img
          src={leftGroup}
          alt=""
          className="absolute left-0 top-5/12 -translate-y-1/2 w-[520px] max-h-[80vh] z-0 hidden md:block"
          draggable="false"
        />

        {/* Right Circuit */}
        <img
          src={rightGroup}
          alt=""
          className="absolute right-0 top-5/12 -translate-y-1/2 w-[450px] max-h-[80vh] z-0 hidden md:block"
          draggable="false"
        />

        {/* Center Coin and Content */}
        <div className="relative mt-10 z-10 w-full flex flex-col items-center">
          <div className="relative flex items-center justify-center mb-8">
            <img
              src={coinBg}
              alt="Coin background"
              className="w-[370px] md:w-[440px] drop-shadow-xl"
              draggable="false"
            />
            <img
              src={coin}
              alt="BIGOD coin"
              className="absolute top-1/2 left-1/2 w-[200px] md:w-[372px] mx-2 -translate-x-1/2 -translate-y-1/2 drop-shadow-lg"
              draggable="false"
            />
          </div>
          {/* Headline */}
          <h1 className="text-[#15BFFD] text-xl md:text-3xl font-bold mb-4">
            Invest in Real Gold. Powered by Blockchain
          </h1>
          {/* Info Text */}
          <div className="text-white text-base md:text-xl font-medium text-center leading-relaxed mb-6">
            <span className="block">
              BINGOLD (BIGOD): 250g gold-backed token.
            </span>
            <span className="block">
              Limited ICO live — join the future of stable crypto.
            </span>
          </div>

          {/* Heartbeat Image */}

          <img src={Hbeat} alt="heartbeat" className="mb-6" />

          {/* Join Today Button with gradient border */}
          <button className="text-white font-medium border-2 px-14 py-3 my-5">Join Today</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
