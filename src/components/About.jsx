import React from "react";
import aboutCoin from "../assets/image/aboutCoin.png";
import bgcolor from "../assets/image/bgcolor.png";
import cardBg from "../assets/image/caard.png";
import icon1 from "../assets/image/icons/icon1.png";
import icon2 from "../assets/image/icons/icon2.png";
import icon3 from "../assets/image/icons/icon3.png";
import icon4 from "../assets/image/icons/icon4.png";
import icon5 from "../assets/image/icons/icon5.png";
import icon6 from "../assets/image/icons/icon6.png";

const cards = [
  {
    side: "left",
    top: "20%",
    icon: icon1,
    title: "Ticker",
    value: <span className="text-[#15BFFD] font-bold">Bigod</span>,
    left: "-130px",
  },
  {
    side: "left",
    top: "48%",
    icon: icon2,
    title: "Blockchain",
    value: (
      <span className="text-[#15BFFD] font-bold">
        Binance Smart Chain (BEP-20)
      </span>
    ),
    left: "-130px",
  },
  {
    side: "left",
    top: "78%",
    icon: icon3,
    title: "Blockchain",
    value: (
      <span className="text-[#15BFFD] font-bold">Binance Smart Chain</span>
    ),
    left: "-130px",
  },
  {
    side: "right",
    top: "18%",
    icon: icon4,
    title: "Total Supply",
    value: <span className="text-[#15BFFD] font-bold">2,500,000 tokens</span>,
    right: "calc(-250px + 8vw)", // adjusted: uses calc with viewport width for spacing
  },
  {
    side: "right",
    top: "48%",
    icon: icon5,
    title: "Backed by",
    value: (
      <span className="text-[#15BFFD] font-bold">250g gold per token</span>
    ),
    right: "calc(-250px + 8vw)",
  },
  {
    side: "right",
    top: "78%",
    icon: icon6,
    title: "Utility",
    value: (
      <span className="text-[#15BFFD] font-bold">
        Trading, Staking,
        <br />
        Payments, Hedging
      </span>
    ),
    right: "calc(-250px + 8vw)",
  },
];

const CARD_WIDTH_DESKTOP = 280;


const About = () => (
  <div
    className="min-h-screen w-full px-4" 
    style={{
      background: "linear-gradient(90deg, #00080D, #011A29, #00080D)",
    }}
  >
    <div className="text-center font-medium pt-5 tracking-wider text-xl text-white max-w-3xl mx-auto px-6">
      <h1 className="text-3xl text-[#15BFFD] font-bold mb-4">About BINGOLD</h1>
      <p className="text-xl py-2">(What is BIGOD?)</p>
      <p>
        BiNGOLD (BIGOD) is a revolutionary gold-backed utility token built on
        the Binance Smart Chain (BEP-20).
      </p>
      <p className="py-2">
        Limited ICO live — join the future of stable crypto.
      </p>
    </div>

    <div className="relative w-full flex justify-center mt-8 mx-auto max-w-[1000px] h-[700px]">
      <img
        src={bgcolor}
        alt=""
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] object-cover z-0 pointer-events-none select-none"
        draggable="false"
        style={{ opacity: 0.42 }}
      />
      <img
        src={aboutCoin}
        alt=""
        className="relative max-w-[700px] w-full z-10 object-contain"
        draggable="false"
      />

      {cards.map(({ side, top, icon, title, value, left, right }, index) => (
        <div
          key={index}
          className="absolute flex flex-col items-start z-20"
          style={{
            top,
            ...(side === "left" ? { left } : { right }),
            width: CARD_WIDTH_DESKTOP,
            transform: "translateY(-50%)",
          }}
        >
          <img
            src={icon}
            alt=""
            className={`mb-[2] object-contain ${
              side === "left" ? "ml-2 w-20 h-10" : "mr-2 w-20 h-10 self-end"
            }`}
            draggable="false"
          />
          <div className="relative w-full">
            <img
              src={cardBg}
              alt="card"
              className="w-full h-auto"
              draggable="false"
            />
            <div
              className={`absolute inset-0 flex flex-col justify-center px-6 py-4 ${
                side === "left" ? "text-left" : "text-right"
              }`}
            >
              <div className="text-white text-center text-base font-semibold mb-0">
                {title}
              </div>
              <div className="text-base text-center">{value}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default About;
