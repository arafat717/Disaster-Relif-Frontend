import { Link } from "react-router-dom";
import Card from "../../Ui/Card";
import ComponentsTitle from "../../shared/ComponentsTitle";
import { useGetAllDonatesPostQuery } from "../../../redux/api/donatinApi";

const DonationCard = () => {
  const { data } = useGetAllDonatesPostQuery("");

  return (
    <div id="donationCard" className="bg-slate-100 w-full h-full py-10">
      <ComponentsTitle
        topTitle="Disaster Relief"
        boldblackTitle="Donation Posts"
      ></ComponentsTitle>
      <div className="max-w-[1250px] mx-auto">
        <div className="w-5/6 grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 mx-auto my-5 py-10 ">
          {data?.slice(0, 3).map((item) => (
            <Card key={item._id} item={item}></Card>
          ))}
        </div>
      </div>
      <div className="text-center mb-16">
        <Link to="/donations">
          <button className="px-7 border border-gray-400 text-sm py-2 transition-all bg-white text-gray-400 hover:border-gray-900 hover:bg-cyan-400 hover:text-white">
            View All Campaign{" "}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DonationCard;
