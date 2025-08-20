import React from "react";
import Hbeat from "../assets/image/Hbeat.png";
import pieChart from "../assets/image/pieChart.png";
import TokenomicsBox from "../assets/image/TokenomicsBox.png";
import tokenVector from "../assets/image/tokenVector.png";

const UseCase = () => {
  return (
    <div
      className="flex py-16 bg-black justify-center"
      style={{
        backgroundImage: `url(${tokenVector})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right center",
        backgroundSize: "auto",
      }}
    >
      {/* Inner container without opaque bg-black to show tokenVector */}
      <div className="flex py-16 justify-center">
        <div>
          {/* Heading and heartbeat */}
          <div className="flex flex-col items-center mb-6">
            <h1 className="text-center text-3xl font-bold text-[#15BFFD] font-Montserrat mb-4">
              Tokenomics
            </h1>
            <img src={Hbeat} alt="heartbeat" />
          </div>

          {/* Container for image and overlay centered */}
          <div className="relative w-[80vw] mx-auto min-h-[460px] flex justify-center">
            <div className="relative w-full">
              {/* TokenomicsBox image */}
              <img
                src={TokenomicsBox}
                alt="Tokenomics Box"
                className="w-full h-auto rounded-2xl"
                draggable="false"
              />
              {/* Overlay container absolutely centered */}
              <div className="absolute inset-0 flex items-center justify-center px-12 py-10">
                <div className="flex items-center justify-between w-full max-w-[900px] gap-6">
                  {/* Key Metrics */}
                  <div
                    className="w-[380px] mx-10 bg-transparent rounded-2xl border border-white/20 p-6 flex-shrink-0 min-h-[320px] flex flex-col justify-center shadow-inner z-10 backdrop-blur-sm"
                    style={{
                      background:
                        "linear-gradient(135deg,rgba(10,30,55,0.74),rgba(14,47,95,0.16))",
                    }}
                  >
                    <h2 className="text-lg font-bold text-[#15BFFD] mb-8">
                      Key Metrics
                    </h2>
                    <div className="grid grid-cols-2 gap-y-5 items-center text-[15px]">
                      <span className="text-white">Token Name</span>
                      <span className="bg-[#15BFFD] text-[#0b1725] font-semibold rounded-lg px-3 py-1.5 text-center">
                        BINGOLD (BIGOD)
                      </span>
                      <span className="text-white">Total Supply</span>
                      <span className="text-[#15BFFD] font-semibold">
                        1,000,000 BIGOD
                      </span>
                      <span className="text-white">Current Supply</span>
                      <span className="text-[#15BFFD] font-semibold">
                        6,000 (PRE - ICO )
                      </span>
                      <span className="text-white">Backing</span>
                      <span className="text-[#15BFFD] font-semibold">
                        250g LBMA GOLD / TOKEN
                      </span>
                      <span className="text-white">Blockchain</span>
                      <span className="text-[#15BFFD] font-semibold">
                        ETHERIUM (ERC 20)
                      </span>
                    </div>
                  </div>

                  {/* Pie Chart and Legend */}
                  <div className="flex flex-col items-center flex-1 ml-10 mr-6">
                    <img
                      src={pieChart}
                      alt="Pie Chart"
                      className="w-[270px] max-w-[270px] mb-4"
                      draggable="false"
                    />
                    <div className="flex flex-row items-center justify-center gap-5 mt-2">
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
                </div>
              </div>{" "}
              {/* end Overlay */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCase;
