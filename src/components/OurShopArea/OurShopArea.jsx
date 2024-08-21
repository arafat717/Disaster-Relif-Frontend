import img1 from "../../../public/03-300x300.jpg";
import img2 from "../../../public/04-300x300.jpg";
import img3 from "../../../public/06-300x300.jpg";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const OurShopArea = () => {
  return (
    <div className="mt-12">
      <div className="text-center">
        <p className="italic text-black">We Are Fighting For your Rights</p>
        <h1 className="text-5xl font-bold text-gray-950 mt-1">Shop Area</h1>
        <div className="mx-auto w-12 mt-6 mb-5">
          <hr className="my-1 border border-cyan-500" />
          <hr className="border border-cyan-500" />
        </div>
        <p className="text-gray-400">
          Praising pain was born and I will give you a complete accountwill give
          you a complete <br /> account
        </p>
      </div>
      <div className="my-10 grid grid-cols-1 md:grid-cols-3">
        <div className="w-96 border border-gray-300">
          <img className="w-96" src={img1} alt="" />
          <div className="flex flex-col mt-5">
            <h1 className="mx-auto text-2xl font-bold text-gray-800">
              Hoodies & Sweatshirts
            </h1>
            <div className="mx-auto w-12 my-4">
              <hr className="my-1 border border-cyan-500" />
              <hr className="border border-cyan-500" />
            </div>
            <div className="flex justify-center items-center gap-4 mt-3 mb-6">
              <p className="border border-gray-600 p-2 text-gray-700 transition-all hover:bg-cyan-500 hover:text-white cursor-pointer">
                <FaShoppingCart className="size-5 "></FaShoppingCart>
              </p>
              <p className="border border-gray-600 p-2 text-gray-700 transition-all hover:bg-cyan-500 hover:text-white cursor-pointer">
                <FaRegEye className="size-5 "></FaRegEye>
              </p>
              <p className="border border-gray-600 p-2 text-gray-700 transition-all hover:bg-cyan-500 hover:text-white cursor-pointer">
                <FaHeart className="size-5  "></FaHeart>
              </p>
            </div>
          </div>
        </div>
        <div className="w-96 border border-gray-300">
          <img className="w-96" src={img2} alt="" />
          <div className="flex flex-col mt-5">
            <h1 className="mx-auto text-2xl font-bold text-gray-800">
              White Hoodies
            </h1>
            <div className="mx-auto w-12 my-4">
              <hr className="my-1 border border-cyan-500" />
              <hr className="border border-cyan-500" />
            </div>
            <div className="flex justify-center items-center gap-4 mt-3 mb-6">
              <p className="border border-gray-600 p-2 text-gray-700 transition-all hover:bg-cyan-500 hover:text-white cursor-pointer">
                <FaShoppingCart className="size-5 "></FaShoppingCart>
              </p>
              <p className="border border-gray-600 p-2 text-gray-700 transition-all hover:bg-cyan-500 hover:text-white cursor-pointer">
                <FaRegEye className="size-5 "></FaRegEye>
              </p>
              <p className="border border-gray-600 p-2 text-gray-700 transition-all hover:bg-cyan-500 hover:text-white cursor-pointer">
                <FaHeart className="size-5  "></FaHeart>
              </p>
            </div>
          </div>
        </div>
        <div className="w-96 border border-gray-300">
          <img className="w-96" src={img3} alt="" />
          <div className="flex flex-col mt-5">
            <h1 className="mx-auto text-2xl font-bold text-gray-800">
              Red T Shirts
            </h1>
            <div className="mx-auto w-12 my-4">
              <hr className="my-1 border border-cyan-500" />
              <hr className="border border-cyan-500" />
            </div>
            <div className="flex justify-center items-center gap-4 mt-3 mb-6">
              <p className="border border-gray-600 p-2 text-gray-700 transition-all hover:bg-cyan-500 hover:text-white cursor-pointer">
                <FaShoppingCart className="size-5 "></FaShoppingCart>
              </p>
              <p className="border border-gray-600 p-2 text-gray-700 transition-all hover:bg-cyan-500 hover:text-white cursor-pointer">
                <FaRegEye className="size-5 "></FaRegEye>
              </p>
              <p className="border border-gray-600 p-2 text-gray-700 transition-all hover:bg-cyan-500 hover:text-white cursor-pointer">
                <FaHeart className="size-5  "></FaHeart>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurShopArea;
