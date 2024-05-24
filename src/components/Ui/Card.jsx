import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

/* eslint-disable react/prop-types */
const Card = ({ item }) => {
  const theme = useSelector((state) => state.toggle.theme);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const top = window.pageYOffset + window.innerHeight;
      const target = document.getElementById("donationCard");
      if (target) {
        const offsetTop = target.offsetTop;
        if (top > offsetTop) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      key={item._id}
      initial={{ scale: 0, opacity: 0 }}
      animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
      transition={{ duration: 1, delay: 0.8 }}
    >
      <div
        className={`w-60 black card ${theme} p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl`}
      >
        <img
          className="h-40 w-full object-cover rounded-xl rounded-x"
          src={item.image}
          alt=""
        />
        <div className="p-2">
          <h2 className="font-bold text-lg mb-2 ">
            {item?.title?.slice(0, 30)} ...
          </h2>
          <h2 className={`font-semibold text-lg mb-2 `}>
            Category: {item.category}
          </h2>

          <p className="text-md text-gray-600">
            Amount: <span className="text-orange-600">{item.amount}</span>
          </p>
        </div>
        <div className="m-2 ">
          <Link
            to={`/donations/${item._id}`}
            className="text-white bg-cyan-700 px-3 py-1 rounded-md hover:bg-cyan-600"
          >
            View Deatils
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
