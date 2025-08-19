import Hbeat from "../assets/image/Hbeat.png";
import WhyCard from "./WhyCard";

const Why = () => {
  return (
      <div
      className="min-h-screen w-full"
      style={{
        background: "linear-gradient(90deg, #00080D, #011A29, #00080D)",
      }}
    >

    <div
      className="flex py-15  justify-center bg-no-repeat bg-bottom bg-cover"
      style={{ backgroundImage: "url('src/assets/image/Whybg.svg')" }}
    >
      <div>
        {/* Center heading and heartbeat */}
        <div className="flex flex-col items-center mb-6">
          <h1 className="text-center text-3xl font-bold text-[#15BFFD] font-Montserrat mb-4">
            Why Choose BiNGOLD?
          </h1>
          <img src={Hbeat} alt="heartbeat" />
        </div>

        <div className="flex relative">
          <div className="z-10">
            <WhyCard />
          </div>
          <div className="mt-[300px] z-0">
            <WhyCard />
          </div>
          <div className="z-10">
            <WhyCard />
          </div>
        </div>
      </div>
    </div>
    </div>

  );
};

export default Why;
