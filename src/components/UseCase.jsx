import Hbeat from "../assets/image/Hbeat.png";
import UseCard from "./UseCard";

const UseCase = () => {
  return (
    <div className="flex py-15 bg-black justify-center ">
      <div>
        {/* Center heading and heartbeat */}
        <div className="flex flex-col items-center mb-6">
          <h1 className="text-center text-3xl font-bold text-[#15BFFD] font-Montserrat mb-4">
            Use Cases
          </h1>
          <img src={Hbeat} alt="heartbeat" />
        </div>
        <div
          className="flex flex-wrap justify-center items-center gap-15 bg-no-repeat bg-right "
          style={{ backgroundImage: "url('src/assets/image/Vector.png')" }}
        >
          <UseCard />
          <UseCard />
          <UseCard />
          <UseCard />
          <UseCard />
        </div>
      </div>
    </div>
  );
};

export default UseCase;
