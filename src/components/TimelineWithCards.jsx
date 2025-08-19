import React from "react";
import timelineImg from "../assets/image/timelineImg.png"; // The vertical timeline image
import cardFrame from "../assets/image/timelineCard.png"; // The image with coin on top
import Hbeat from "../assets/image/Hbeat.png";

// Example card data--adjust text and positions as needed
const cards = [
  {
    side: "left",
    top: "23%",
    title: "Digital Gold Integration",

    content:
      "Enable Users to Buy, Store and Manage Gold Backed Products on the App",
  },
  {
    side: "right",
    top: "35%",
    title: "Enhanced Security Implementation",

    content:
      "Rolled Out Recurring Investment Plans (Daily / Monthly / Quarterly) For Long Term Wealth Creation",
  },
  {
    side: "left",
    top: "55%",
    title: "Token Pre Sale",

    content: "Users Gained Early Access to Procure Bingold Tokens",
  },
  {
    side: "right",
    top: "66%",
    title: "Card 4",
    content: "Fourth event description",
  },
  {
    side: "left",
    top: "88%",
    title: "Digital Gold Integration",

    content:
      "Enable Users to Buy, Store and Manage Gold Backed Products on the App",
  },
  {
    side: "right",
    top: "99%",
    title: "Enhanced Security Implementation",

    content:
      "Rolled Out Recurring Investment Plans (Daily / Monthly / Quarterly) For Long Term Wealth Creation",
  },
];

const CARD_WIDTH = 320;
const CARD_HEIGHT = 180;

const TimelineWithCards = () => (
  <div
    className="relative w-full min-h-[900px]  flex justify-center bg-white py-10"
    style={{
      background: "linear-gradient(90deg, #00080D, #011A29, #00080D)",
    }}
  >
    <div className="flex flex-col items-center mb-6">
      <h1 className="text-center text-3xl font-bold text-[#15BFFD] font-Montserrat mb-4">
        Roadmap
      </h1>
      <img src={Hbeat} alt="heartbeat" />
    </div>

    {/* Centered timeline image */}
    <img
      src={timelineImg}
      alt="Timeline"
      className="absolute left-1/2 top-52 -translate-x-1/2 h-full z-0 mb-20"
      style={{ height: "100vh" }}
      
      draggable="false"
    />

    {/* Timeline Cards */}
    {cards.map((card, idx) => (
      <div
        key={idx}
        className={`absolute z-50 ${
          card.side === "left" ? "right-1/2 mr-24" : "left-1/2 ml-24"
        }`}
        style={{
          top: card.top,
          width: CARD_WIDTH,
          height: CARD_HEIGHT,
          transform: `translateY(-50%)`,
        }}
      >
        {/* Frame image */}
        <img
          src={cardFrame}
          alt="Card frame"
          className="absolute w-full h-full object-contain z-0"
          draggable="false"
        />
        {/* Content inside the frame */}
        <div className="relative z-10 w-[90%] h-[70%] mt-9 mx-auto flex flex-col items-center justify-center text-center">
          <div className="text-white text-lg font-bold mb-1">{card.title}</div>
          <div className="text-slate-100 text-base font-medium">
            {card.content}
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default TimelineWithCards;
