import React, { useState } from "react";
import Hbeat from "../assets/image/Hbeat.png";

const faqs = [
  { question: "Which exchanges will list BIGOD Token?", answer: "BIGOD Token will be listed on major exchanges including Binance, Coinbase, and others." },
  { question: "When can BIGOD Token be traded?", answer: "Trading of BIGOD Token will start immediately after the ICO phase is complete." },
  { question: "How is BIGOD backed?", answer: "Each BIGOD Token is backed by 250g of LBMA registered gold." },
  { question: "Why should I invest in BIGOD Token?", answer: "Investing in BIGOD offers a stable, gold-backed crypto alternative with promising growth." },
  { question: "What blockchain BIGOD uses?", answer: "BIGOD is an ERC-20 token built on the Ethereum blockchain." },
  { question: "Is the project legally compliant?", answer: "Yes, BIGOD complies with all applicable laws and regulations in jurisdictions it operates." },
  { question: "Is there an airdrop program?", answer: "Yes, details on the airdrop program will be announced close to launch." },
  { question: "What is BIGOD’s market cap and supply?", answer: "The total supply is 1,000,000 BIGOD with market cap based on active trading." },
  { question: "Is BIGOD a Web2 or Web3 product?", answer: "BIGOD leverages Web3 blockchain technology backed by tangible gold assets." },
];

const FaqGrid = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleFaq = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div
      className="flex flex-col justify-center pb-10 items-center min-h-screen"
      style={{ background: "linear-gradient(90deg, #030b16 0%, #112337 100%)" }}
    >
      <h1 className="text-center text-3xl font-bold text-[#15BFFD] font-Montserrat mb-3 mt-8">FAQ</h1>
      <img src={Hbeat} alt="heartbeat" className="mb-8 mx-auto" />
      <div className="rounded-xl border border-blue-100/40 bg-gradient-to-br from-[#183550] via-[#091426] to-[#112337] p-8 w-full max-w-5xl mx-auto shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map(({ question, answer }, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md">
              <button
                onClick={() => toggleFaq(idx)}
                className="flex items-center justify-between w-full px-7 py-5 focus:outline-none"
                style={{ fontFamily: "Montserrat, sans-serif" }}
                aria-expanded={expandedIndex === idx}
              >
                <span className="text-[#181d4c] font-semibold text-base md:text-lg">{question}</span>
                <span className="text-2xl text-[#181d4c] font-bold ml-4">{expandedIndex === idx ? "-" : "+"}</span>
              </button>
              {expandedIndex === idx && (
                <div className="px-7 pb-5 text-[#181d4c] text-sm md:text-base">
                  {answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqGrid;
