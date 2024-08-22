import { Link } from "react-router-dom";
import Card from "../../Ui/Card";
import { useGetAllDonatesPostQuery } from "../../../redux/api/donatinApi";

const DonationCard = () => {
  const { data } = useGetAllDonatesPostQuery("");

  return (
    <div id="donationCard" className="bg-slate-100 w-full h-full py-10">
      <div className="text-center mt-10">
        <p className="italic text-black">We Are Fighting For your Rights</p>
        <h1 className="text-5xl font-bold text-gray-950 mt-1">
          Latest Campaigns
        </h1>
        <div className="mx-auto w-12 mt-3 mb-3">
          <hr className="my-1 border border-cyan-500" />
          <hr className="border border-cyan-500" />
        </div>
        <p className="text-gray-400">
          Praising pain was born and I will give you a complete accountwill give
          you a complete <br /> account
        </p>
      </div>
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
