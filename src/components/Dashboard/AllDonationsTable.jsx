import { useGetAllDonatesPostQuery } from "../../redux/api/baseApi";
import DonationTable from "../Ui/DonationTable ";

const AllDonationsTable = () => {
  const { data } = useGetAllDonatesPostQuery("");

  return (
    <div>
      <DonationTable data={data}></DonationTable>
    </div>
  );
};

export default AllDonationsTable;
