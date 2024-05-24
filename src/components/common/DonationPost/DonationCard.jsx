import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../../../utils/Button";
import Card from "../../Ui/Card";
import ComponentsTitle from "../../shared/ComponentsTitle";
import { useGetAllDonatesPostQuery } from "../../../redux/api/donatinApi";

const DonationCard = () => {
  const { data } = useGetAllDonatesPostQuery("");
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
    <div id="donationCard">
      <ComponentsTitle
        topTitle="Disaster Relief"
        boldblackTitle="Donation Posts"
      ></ComponentsTitle>
      <div className="w-5/6 grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5 mx-auto my-5 py-10">
        {data?.slice(0, 8).map((item, index) => (
          <motion.div
            key={item._id}
            initial={{ scale: 0, opacity: 0 }}
            animate={
              isVisible ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
            }
            transition={{ duration: 1, delay: index * 0.2 }}
          >
            <Card item={item}></Card>
          </motion.div>
        ))}
      </div>
      <div className="text-center mb-16">
        <Link to="/donations">
          <Button>View All Post</Button>
        </Link>
      </div>
    </div>
  );
};

export default DonationCard;
