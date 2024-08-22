/* eslint-disable react/prop-types */
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const VolunteerCard = ({ data }) => {
  console.log(data);
  return (
    <div className="relative">
      <img className="h-44 " src={data?.image} alt="" />
      <div className="text-center bg-cyan-500 py-4">
        <h1 className="text-2xl font-bold text-white">{data?.name}</h1>
        <p className="text-white text-xl font-semibold">Volunteer</p>
        <p className="text-white my-2">Lorem Ipsum is simpl</p>
        <div className="flex justify-center items-center gap-3 text-white">
          <p>
            <FaFacebookF className="size-4 font-bold hover:cursor-pointer"></FaFacebookF>
          </p>
          <p>
            <FaTwitter className="size-4 font-bold hover:cursor-pointer"></FaTwitter>
          </p>
          <p>
            <FaSquareInstagram className="size-4 font-bold hover:cursor-pointer"></FaSquareInstagram>
          </p>
          <p>
            <FaLinkedinIn className="size-4 font-bold hover:cursor-pointer"></FaLinkedinIn>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VolunteerCard;
