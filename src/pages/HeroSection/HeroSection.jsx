/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";

const HeroSection = () => {
  const intro = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.25,
        delayChildren: 1,
      },
    },
  };

  const introChildren = {
    hidden: { opacity: 0, y: -200 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, type: "spring", bounce: 0.5 },
    },
  };

  const donate = {
    initial: { y: 0, rotate: 0, scale: 5 },
    animate: {
      y: 20,
      scale: 1,
      transition: {
        duration: 1,
        y: {
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        },
      },
    },
  };

  return (
    <div className="overflow-hidden mb-10 mt-10">
      <div className="px-10 pt-16 grid grid-cols-1 lg:grid-cols-2 place-content-center">
        <motion.div variants={intro} initial="hidden" animate="visible">
          <motion.h1
            className="text-5xl lg:text-8xl font-bold text-nowrap"
            variants={introChildren}
          >
            <span className="text-gray">Don't worry,</span>
            <br />
            <span>We'll fix it.</span>
          </motion.h1>
          <motion.p
            className="text-dark-gray max-w-[50ch] mt-10 mb-5 text-lg"
            variants={introChildren}
          >
            Welcome to{" "}
            <span className="text-primary-foreground font-semibold">
              Desaster Relif
            </span>{" "}
            , Your donation isn't just a gift; it's a beacon of hope
            illuminating the darkest corners of someone's life.{" "}
          </motion.p>
          <motion.div variants={introChildren}>
            <button className="text-white py-3 bg-cyan-700 px-3 rounded-md hover:bg-cyan-600">
              Donate Now
            </button>
          </motion.div>
        </motion.div>
        <motion.div
          className="mt-10 w-3/4 lg:w-full mx-auto"
          variants={donate}
          initial="initial"
          animate="animate"
        >
          <img
            className="h-full lg:h-[70%] w-full object-contain"
            src="https://img.freepik.com/free-photo/hopeless-refugee-refugee-camp_23-2151446312.jpg?t=st=1716541521~exp=1716545121~hmac=589bf526a50be8a23d025b57ca41435224e491f49b197146f6c1e515a7338dc4&w=740"
            alt=""
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
