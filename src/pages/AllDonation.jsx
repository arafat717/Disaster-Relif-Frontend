import { useState, useEffect } from "react";
import Card from "../components/Ui/Card";
import { motion } from "framer-motion";
import ComponentsTitle from "../components/shared/ComponentsTitle";
import { useGetAllDonatesPostQuery } from "../redux/api/donatinApi";

const AllDonation = () => {
  const { data } = useGetAllDonatesPostQuery("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div>
      <ComponentsTitle
        topTitle="donations"
        boldblackTitle="all donations"
      ></ComponentsTitle>
      <div className="w-5/6 grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5 mx-auto my-5 py-10">
        {data?.map((item, index) => (
          <motion.div
            key={item._id}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: isVisible ? 1 : 0, opacity: isVisible ? 1 : 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card item={item}></Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AllDonation;
