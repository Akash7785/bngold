import React from "react";
import Hbeat from "../assets/image/Hbeat.png";

const faqs = [
  "Which exchanges will list BIGOD Token?",
  "When can BIGOD Token be traded?",
  "How is BIGOD backed?",
  "Why should I invest in BIGOD Token?",
  "What blockchain BIGOD uses?",
  "Is the project legally compliant?",
  "Is there an airdrop program?",
  "What is BIGOD’s market cap and supply?",
  "Is BIGOD a Web2 or Web3 product?",
];

const FaqGrid = () => (
  <div
    className="flex flex-col justify-center pb-10 items-center min-h-screen"
    style={{
      background: "linear-gradient(90deg, #030b16 0%, #112337 100%)",
    }}
  >
    <h1 className="text-center text-3xl font-bold text-[#15BFFD] font-Montserrat mb-3 mt-8">
      FAQ
    </h1>
    <img src={Hbeat} alt="heartbeat" className="mb-8 mx-auto" />
    <div className="rounded-xl border border-blue-100/40 bg-gradient-to-br from-[#183550] via-[#091426] to-[#112337] p-8 w-full max-w-5xl mx-auto shadow-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.map((faq, idx) => (
          <button
            key={idx}
            className="flex items-center justify-between w-full bg-white rounded-lg px-7 py-5 shadow-md hover:shadow-lg transition-colors focus:outline-none"
            style={{
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            <span className="text-[#181d4c] font-semibold text-base md:text-lg">{faq}</span>
            <span className="text-2xl text-[#181d4c] font-bold ml-4">+</span>
          </button>
        ))}
      </div>
    </div>
  </div>
);

export default FaqGrid;
