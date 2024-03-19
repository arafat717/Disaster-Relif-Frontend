import { motion } from "framer-motion";
import Button from "../../utils/Button";

const Banner = () => {
  return (
    <div className="relative h-[600px]">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://www.undp.org/sites/g/files/zskgke326/files/styles/full_hero_1392x940/public/2023-03/Turkiye_Earthquake_-_Photo_by_Levent_Kulu_-_21.jpg?h=2f7900b4&itok=B_dRAEe4"
          alt="Background"
        />
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white">
          <motion.h1
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl w-4/5 mx-auto lg:text-6xl leading-tight mb-10"
          >
            <span className="inline-block">Hope Renewed</span>
            <span className="inline-block">Disaster Relief Hub</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="mt-6 text-md sm:text-xl md:text-xl w-3/5 mx-auto"
          >
            Welcome to Hope Renewed, your trusted disaster relief hub dedicated
            to providing immediate aid and long-term support to communities in
            crisis. With a commitment to transparency and accountability, and
            compelling stories of resilience. Together, we can make a difference
            and bring hope to those in need.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
