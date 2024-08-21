import { TiWorld } from "react-icons/ti";
import { PiHandFistFill } from "react-icons/pi";
import { BsDropletFill } from "react-icons/bs";
import { GiSelfLove } from "react-icons/gi";

const OurStatistic = () => {
  return (
    <div className="bg-cyan-500">
      <div className="max-w-[1250px]  mx-auto pl-10 text-white grid grid-cols-1 text-center md:grid-cols-4 md:gap-x-36">
        <div className="py-16 flex flex-col items-center">
          <TiWorld className="size-20 "></TiWorld>
          <h1 className="text-5xl font-bold mt-2 mb-1">128</h1>
          <h1 className="text-xl font-bold">Countries</h1>
        </div>
        <div className="py-16 flex flex-col items-center">
          <PiHandFistFill className="size-20 "></PiHandFistFill>
          <h1 className="text-5xl font-bold mt-2 mb-1">1055</h1>
          <h1 className="text-xl font-bold">Campaign</h1>
        </div>
        <div className="py-16 flex flex-col items-center">
          <BsDropletFill className="size-20 "></BsDropletFill>
          <h1 className="text-5xl font-bold mt-2 mb-1">685012</h1>
          <h1 className="text-xl font-bold">Donation</h1>
        </div>
        <div className="py-16 flex flex-col items-center">
          <GiSelfLove className="size-20 "></GiSelfLove>
          <h1 className="text-5xl font-bold mt-2 mb-1">60875</h1>
          <h1 className="text-xl font-bold">Volunteers</h1>
        </div>
      </div>
    </div>
  );
};

export default OurStatistic;
