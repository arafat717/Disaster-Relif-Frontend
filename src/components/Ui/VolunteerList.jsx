import { useGetVolunteerQuery } from "../../redux/api/baseApi";
import ComponentsTitle from "../shared/ComponentsTitle";

const VolunteerList = () => {
  const {
    data: volunteerData,
    isLoading,
    isError,
    error,
  } = useGetVolunteerQuery(undefined);

  if (isLoading) return <div className="text-center mt-4">Loading...</div>;
  if (isError) return <div className="text-center mt-4">Error: {error}</div>;

  return (
    <div className="my-10">
      <ComponentsTitle
        topTitle="donations"
        boldblackTitle="Our Volunteers"
      ></ComponentsTitle>
      <div className="container mx-auto my-15 p-4">
        <div className="grid grid-cols-2 px-1 sm:grid-cols-3 md:grid-cols-5 mx-auto gap-4 sm:px-0 sm:gap-2 md:px-14 mt-10">
          {volunteerData &&
            volunteerData?.map((volunteer) => (
              <div
                key={volunteer.id}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 inline-block max-w-min"
              >
                {volunteer.image && (
                  <img
                    src={volunteer.image}
                    alt={volunteer.name}
                    className="h-24 object-cover object-center w-full"
                  />
                )}
                <div className="p-2">
                  <h3 className="text-sm font-bold mb-1">{volunteer.name}</h3>
                  <p className="text-gray-700 text-xs mb-1">
                    Email: {volunteer.email}
                  </p>
                  <p className="text-gray-700 text-xs mb-1">
                    Phone: {volunteer.phone}
                  </p>
                  <p className="text-gray-700 text-xs mb-1">
                    Location: {volunteer.location}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default VolunteerList;
