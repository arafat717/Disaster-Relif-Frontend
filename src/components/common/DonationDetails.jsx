import { useParams } from "react-router-dom";
import DetailPage from "./DetailPage";
import { useGetSingleDonatesPostQuery } from "../../redux/api/donatinApi";

const DonationDetails = () => {
  const { id } = useParams();
  const { data: item, error, isLoading } = useGetSingleDonatesPostQuery(id);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <div className="my-20">{item && <DetailPage data={item} />}</div>;
};

export default DonationDetails;
