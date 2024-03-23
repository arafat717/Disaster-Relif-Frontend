import { useGetAllDonerQuery } from "../redux/api/baseApi";

const Leaderboard = () => {
  const {
    data: doners = [],
    isLoading,
    isError,
  } = useGetAllDonerQuery(undefined);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <div className="container min-h-screen mx-auto my-10 ">
      <h1 className="text-3xl font-semibold mb-5 text-center">
        Doner Leaderboard
      </h1>
      <hr />
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-md font-medium text-gray-500 uppercase tracking-wider">
                Rank
              </th>
              <th className="px-6 py-3 text-left text-md font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-md font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-md font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-md font-medium text-gray-500 uppercase tracking-wider">
                Image
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {doners?.map((doner, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                <td className="px-6 py-4 whitespace-nowrap">{doner.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">${doner.amount}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {doner.category}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <img
                    src={doner.image}
                    alt={doner.name}
                    className="w-10 h-10 rounded-full"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
