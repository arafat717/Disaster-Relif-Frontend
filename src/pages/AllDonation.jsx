import Card from "../components/Ui/Card";
import ComponentsTitle from "../components/shared/ComponentsTitle";
import { useGetAllDonatesPostQuery } from "../redux/api/donatinApi";

const AllDonation = () => {
  const { data } = useGetAllDonatesPostQuery("");

  return (
    <div className="bg-slate-100 -mt-8 py-10">
      <ComponentsTitle
        topTitle="donations"
        boldblackTitle="all donations"
      ></ComponentsTitle>
      <div className="w-5/6 grid  grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5 mx-auto my-5 py-10">
        {data?.map((item) => (
          <Card key={item._id} item={item}></Card>
        ))}
      </div>
    </div>
  );
};

export default AllDonation;
