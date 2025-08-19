import React from "react";
import Hbeat from "../assets/image/Hbeat.png";
import pieChart from "../assets/image/pieChart.png";
import coin from "../assets/image/coin.png"; // Use your coin image

const UseCase = () => {
  return (
    <div
      className="flex py-16 bg-black justify-center  bg-no-repeat bg-right "
      style={{ backgroundImage: "url('src/assets/image/tokenVector.png')" }}
    >
      <div>
        {/* Center heading and heartbeat */}
        <div className="flex flex-col items-center mb-6">
          <h1 className="text-center text-3xl font-bold text-[#15BFFD] font-Montserrat mb-4">
            Tokenomics
          </h1>
          <img src={Hbeat} alt="heartbeat" />
        </div>

        <div>
          <div className="relative w-[90vw] max-w-[1100px] mx-auto rounded-2xl border border-white/20 bg-gradient-to-br from-blue-500/40 to-black/0 backdrop-blur-xs p-8 flex items-center overflow-visible min-h-[520px]">
            {/* Key Metrics (increased width) */}
            <div className="relative w-[440px] bg-transparent rounded-2xl border border-white/20 p-7 mx-2 flex-shrink-0 min-h-[380px] flex flex-col justify-center shadow-inner z-10">
              <h2 className="text-xl font-bold text-[#15BFFD] mb-9 text-left">
                Key Metrics
              </h2>
              <div className="grid grid-cols-2 gap-y-6 items-center">
                <span className="text-white text-base md:text-lg">
                  Token Name
                </span>
                <span className="bg-[#15BFFD]  text-[#0b1725] font-semibold rounded-lg px-4 py-2 text-center">
                  BINGOLD (BIGOD)
                </span>
                <span className="text-white text-base md:text-lg">
                  Total Supply
                </span>
                <span className="text-[#15BFFD] font-semibold text-base md:text-lg">
                  1,000,000 BIGOD
                </span>
                <span className="text-white text-base md:text-lg">
                  Current Supply
                </span>
                <span className="text-[#15BFFD] font-semibold text-base md:text-lg">
                  6,000 (PRE - ICO )
                </span>
                <span className="text-white text-base md:text-lg">Backing</span>
                <span className="text-[#15BFFD] font-semibold text-base md:text-lg">
                  250g LBMA GOLD / TOKEN
                </span>
                <span className="text-white text-base md:text-lg">
                  Blockchain
                </span>
                <span className="text-[#15BFFD] font-semibold text-base md:text-lg">
                  ETHERIUM (ERC 20)
                </span>
              </div>
            </div>

            {/* Pie Chart + Legend */}
            <div className="flex flex-col items-center justify-center flex-1 z-10">
              <img
                src={pieChart}
                alt="Pie Chart"
                className="w-[320px] max-w-xs md:max-w-md"
              />
              {/* Legend below pie chart */}

              <div className="flex flex-row items-center justify-center gap-4 mt-4">
                <div className="flex items-center">
                  <span className="inline-block w-3 h-3 rounded-full bg-[#15BFFD] mr-2"></span>
                  <span className="text-white text-sm font-medium">
                    Reserve
                  </span>
                  <span className="text-[#15BFFD] ml-1 text-sm font-semibold">
                    60%
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="inline-block w-3 h-3 rounded-full bg-blue-900 mr-2"></span>
                  <span className="text-white text-sm font-medium">
                    Option B
                  </span>
                  <span className="text-[#15BFFD] ml-1 text-sm font-semibold">
                    30%
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="inline-block w-3 h-3 rounded-full bg-white mr-2"></span>
                  <span className="text-white text-sm font-medium">
                    Option C
                  </span>
                  <span className="text-[#15BFFD] ml-1 text-sm font-semibold">
                    10%
                  </span>
                </div>
              </div>
            </div>

            {/* Coins behind content with low z-index */}
            <img
              src={coin}
              alt="coin"
              className="absolute -top-20 -right-5 w-44 h-44 z-0 rotate-[28deg]"
              draggable="false"
            />
            <img
              src={coin}
              alt="coin"
              className="absolute -bottom-22 -left-15 w-44 h-44 z-0 -rotate-[50deg]"
              draggable="false"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCase;
