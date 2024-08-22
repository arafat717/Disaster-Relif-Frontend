/* eslint-disable react/no-unescaped-entities */
import img from "../../../public/child-img.png";

const OurChildrenSection = () => {
  return (
    <div className="relative bg-[url('https://img.freepik.com/premium-photo/car-accident-scene-with-fire-truck-police-car_41097-9918.jpg?w=740')] bg-cover bg-center h-[436px] w-full my-10">
      <div className="absolute inset-0 bg-black opacity-90"></div>
      <div className="flex items-center gap-10 max-w-[1250px] mx-auto relative z-10 text-white p-4">
        <div>
          <img className="h-[420px]" src={img} alt="" />
        </div>
        <div>
          <p className="italic">The Crisis in Syria Continues</p>
          <h1 className="text-3xl font-bold">Syria Emergency Appeal</h1>
          <div className="w-12 my-4">
            <hr className="my-1 border border-cyan-500" />
            <hr className="border border-cyan-500" />
          </div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesting
            industry. Lorem Ipsum has been the industry's <br /> standard dummy
            text ever since
          </p>
          <button className="px-7 mt-6 border border-gray-400 text-sm py-2 transition-all   hover:border-gray-900 bg-cyan-400 text-white">
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurChildrenSection;
