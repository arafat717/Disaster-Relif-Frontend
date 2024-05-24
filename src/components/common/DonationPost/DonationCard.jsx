import { Link } from "react-router-dom";
import Button from "../../../utils/Button";
import Card from "../../Ui/Card";
import ComponentsTitle from "../../shared/ComponentsTitle";
import { useGetAllDonatesPostQuery } from "../../../redux/api/donatinApi";

const DonationCard = () => {
  const { data } = useGetAllDonatesPostQuery("");

  return (
    <div id="donationCard">
      <ComponentsTitle
        topTitle="Disaster Relief"
        boldblackTitle="Donation Posts"
      ></ComponentsTitle>
      <div className="w-5/6 grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5 mx-auto my-5 py-10">
        {data?.slice(0, 8).map((item) => (
          <Card key={item._id} item={item}></Card>
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
