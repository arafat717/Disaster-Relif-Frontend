import img1 from "../../../public/blog1-350x350.jpg";
import img2 from "../../../public/blog2-350x350.jpg";
import img3 from "../../../public/blog3-350x350.jpg";
import { IoPerson } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { GoPersonFill } from "react-icons/go";

const DisasterNews = () => {
  return (
    <div className="my-20">
      <div className="text-center">
        <p className="italic text-black">We Are Fighting For your Rights</p>
        <h1 className="text-5xl font-bold text-gray-950 mt-1">Disaster News</h1>
        <div className="mx-auto w-12 mt-3 mb-3">
          <hr className="my-1 border border-cyan-500" />
          <hr className="border border-cyan-500" />
        </div>
        <p className="text-gray-400">
          Praising pain was born and I will give you a complete accountwill give
          you a complete <br /> account
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 mx-auto mt-4">
        <div className="w-96">
          <img className="w-96" src={img1} alt="" />
          <div>
            <h1 className="text-2xl mt-6 text-gray-500">Environment</h1>
            <div className="flex items-center gap-5 text-gray-400 my-3">
              <div className="flex items-center gap-2">
                <IoPerson></IoPerson>
                <p>By Admin</p>
              </div>
              <FaRegClock></FaRegClock>
              <div className="flex items-center gap-2">
                <FaComment></FaComment>
                <p>Comments</p>
              </div>
            </div>
            <p className="text-gray-400 mb-5">Lorem Ipsum. Proin gravid</p>
            <div className="flex items-center justify-between mb-10">
              <button className="px-7 border border-gray-400 text-sm py-2 transition-all bg-white text-gray-400 hover:border-gray-900 hover:bg-cyan-400 hover:text-white">
                See More
              </button>
              <div className="flex items-center gap-2 text-gray-400">
                <p className="bg-gray-400 p-1 rounded-full">
                  <GoPersonFill className="text-white size-7"></GoPersonFill>
                </p>
                <p>Posted By admin</p>
              </div>
            </div>
          </div>
          <hr className="border border-gray-300" />
        </div>
        <div className="w-96">
          <img className="w-96" src={img2} alt="" />
          <div>
            <h1 className="text-2xl mt-6 text-gray-500">Environment</h1>
            <div className="flex items-center gap-5 text-gray-400 my-3">
              <div className="flex items-center gap-2">
                <IoPerson></IoPerson>
                <p>By Admin</p>
              </div>
              <FaRegClock></FaRegClock>
              <div className="flex items-center gap-2">
                <FaComment></FaComment>
                <p>Comments</p>
              </div>
            </div>
            <p className="text-gray-400 mb-5">Lorem Ipsum. Proin gravid</p>
            <div className="flex items-center justify-between mb-10">
              <button className="px-7 border border-gray-400 text-sm py-2 transition-all bg-white text-gray-400 hover:border-gray-900 hover:bg-cyan-400 hover:text-white">
                See More
              </button>
              <div className="flex items-center gap-2 text-gray-400">
                <p className="bg-gray-400 p-1 rounded-full">
                  <GoPersonFill className="text-white size-7"></GoPersonFill>
                </p>
                <p>Posted By admin</p>
              </div>
            </div>
          </div>
          <hr className="border border-gray-300" />
        </div>
        <div className="w-96">
          <img className="w-96" src={img3} alt="" />
          <div>
            <h1 className="text-2xl mt-6 text-gray-500">Environment</h1>
            <div className="flex items-center gap-5 text-gray-400 my-3">
              <div className="flex items-center gap-2">
                <IoPerson></IoPerson>
                <p>By Admin</p>
              </div>
              <FaRegClock></FaRegClock>
              <div className="flex items-center gap-2">
                <FaComment></FaComment>
                <p>Comments</p>
              </div>
            </div>
            <p className="text-gray-400 mb-5">Lorem Ipsum. Proin gravid</p>
            <div className="flex items-center justify-between mb-10">
              <button className="px-7 border border-gray-400 text-sm py-2 transition-all bg-white text-gray-400 hover:border-gray-900 hover:bg-cyan-400 hover:text-white">
                See More
              </button>
              <div className="flex items-center gap-2 text-gray-400">
                <p className="bg-gray-400 p-1 rounded-full">
                  <GoPersonFill className="text-white size-7"></GoPersonFill>
                </p>
                <p>Posted By admin</p>
              </div>
            </div>
          </div>
          <hr className="border border-gray-300" />
        </div>
      </div>
    </div>
  );
};

export default DisasterNews;
