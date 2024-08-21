import { useGetVolunteerQuery } from "../../redux/api/volunteerApi";
import VolunteerCard from "./VolunteerCard";

const VolunteerList = () => {
  const {
    data: volunteerData,
    isLoading,
    isError,
    error,
  } = useGetVolunteerQuery(undefined);

  if (isLoading) return <div className="text-center mt-4">Loading...</div>;
  if (isError)
    return (
      <div className="text-center mt-4">
        Error: {error?.message || "An unexpected error occurred."}
      </div>
    );

  return (
    <div className="my-10">
      <div className="text-center">
        <p className="italic text-black">We Are Fighting For your Rights</p>
        <h1 className="text-5xl font-bold text-gray-950 mt-1">
          Meet Our Volunteer
        </h1>
        <div className="mx-auto w-12 mt-6 mb-5">
          <hr className="my-1 border border-cyan-500" />
          <hr className="border border-cyan-500" />
        </div>
        <p className="text-gray-400">
          Praising pain was born and I will give you a complete accountwill give
          you a complete <br /> account
        </p>
      </div>
      <div className="container mx-auto my-15 p-4">
        <div className="grid grid-cols-2 px-1 sm:grid-cols-3 md:grid-cols-5 mx-auto gap-4 sm:px-0 sm:gap-2 md:px-14 mt-10">
          {volunteerData?.slice(0, 4).map((volunter) => (
            <VolunteerCard key={volunter._id} data={volunter}></VolunteerCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VolunteerList;
