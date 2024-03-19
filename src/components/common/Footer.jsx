/* eslint-disable react/no-unescaped-entities */
import ItemsContainer from "./footerUi/ItemsContainer ";
import { Icons } from "./footerUi/Menu";
import SocialIcons from "./footerUi/SocialIcons ";
import img from "../../../public/ft-logo.png";
import Button from "../../utils/Button";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white static bottom-0">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
        <h1
          className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5"
        >
          <img src={img} alt="" />
        </h1>
        <div className="flex flex-row space-x-0">
          <input
            type="text"
            placeholder="Enter Your ph.no"
            className="text-gray-800
           sm:w-72 w-full sm:mr-5 mr-1 lg:mb-0 mb-4 py-2.5 rounded px-2 focus:outline-none"
          />
          <Button>Contact</Button>
        </div>
      </div>
      <ItemsContainer />
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span>© 2020 Appy. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <SocialIcons Icons={Icons} />
      </div>
    </footer>
  );
};

export default Footer;
