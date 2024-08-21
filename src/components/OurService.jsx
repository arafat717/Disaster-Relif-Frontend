import { MdOutlineEmergencyShare } from "react-icons/md";
import { ImAidKit } from "react-icons/im";
import { GiLovers } from "react-icons/gi";
import { FaHandsHolding } from "react-icons/fa6";

const OurService = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 bg-gray-900 text-white ">
      <div className="flex flex-col justify-start items-start transition-all hover:bg-cyan-600 hover:text-white  p-14">
        <MdOutlineEmergencyShare className="size-14 text-white"></MdOutlineEmergencyShare>
        <h1 className="my-3 text-2xl font-bold text-gray-300">
          Emergency Response
        </h1>
        <p className="text-gray-500">
          Lorem Ipsum is simply dummy text of the printing and typesting
          industry.
        </p>
      </div>

      <div className="flex flex-col justify-start items-start transition-all hover:bg-cyan-600  p-14">
        <ImAidKit className="size-14 text-white"></ImAidKit>
        <h1 className="my-3 text-2xl font-bold text-gray-300">Medical Aid</h1>
        <p className="text-gray-500">
          Lorem Ipsum is simply dummy text of the printing and typesting
          industry.
        </p>
      </div>
      <div className="flex flex-col justify-start items-start transition-all hover:bg-cyan-600  p-14">
        <GiLovers className="size-14 text-white"></GiLovers>
        <h1 className="my-3 text-2xl font-bold text-gray-300">
          Love For Humanity
        </h1>
        <p className="text-gray-500">
          Lorem Ipsum is simply dummy text of the printing and typesting
          industry.
        </p>
      </div>
      <div className="flex flex-col justify-start items-start transition-all hover:bg-cyan-600  p-14">
        <FaHandsHolding className="size-14 text-white"></FaHandsHolding>
        <h1 className="my-3 text-2xl font-bold text-gray-300">Join Hands</h1>
        <p className="text-gray-500">
          Lorem Ipsum is simply dummy text of the printing and typesting
          industry.
        </p>
      </div>
    </div>
  );
};

export default OurService;
