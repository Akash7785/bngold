// UseCase.js
import Hbeat from "../assets/image/Hbeat.png";
import UseCard from "./UseCard";
import icon from "../assets/image/useCase.png"; // Use the correct icon for each card as needed

const useCases = [
  {
    title: "Cross-Border Commodity Trade",
    description: "Instantly settle international trades using gold-backed tokens.",
    icon,
  },
  {
    title: "Invoice & B2B Payments",
    description: "Pay or receive payments in digital gold — hedge against currency fluctuation.",
    icon,
  },
  {
    title: "Marketplace Integration",
    description: "Buy/Sell goods using BIGOD on future integrated marketplaces.",
    icon,
  },
  {
    title: "Hedging & Collateralization",
    description: "Use BIGOD as DeFi collateral or hedge against inflation.",
    icon,
  },
  {
    title: "Staking & Passive Income",
    description: "Stake BIGOD for attractive returns at flexible tenures.",
    icon,
  },
];
const UseCase = () => {
  return (
    <div className="flex py-15 bg-black justify-center">
      <div>
        <div className="flex flex-col items-center mb-6">
          <h1 className="text-center text-3xl font-bold text-[#15BFFD] font-Montserrat mb-4">
            Use Cases
          </h1>
          <img src={Hbeat} alt="heartbeat" />
        </div>
        <div
          className="flex flex-wrap justify-center items-center gap-15 bg-no-repeat bg-right"
          style={{ backgroundImage: "url('src/assets/image/Vector.png')" }}
        >
          {useCases.map((item, idx) => (
            <UseCard
              key={idx}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UseCase;
