/* eslint-disable react/prop-types */

const DetailPage = ({ data }) => {
  return (
    <div className="mx-auto mt-8 px-4 h-full">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-96 object-cover object-center"
        />
        <div className="p-6">
          <h2 className="text-3xl font-bold mb-4">{data.title}</h2>
          <p className="text-gray-600 mb-2">Category: {data.category}</p>
          <p className="text-gray-700 text-xl mb-4">Amount: {data.amount}</p>
          <p className="text-gray-700 mb-6">{data.description}</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-md shadow-md">
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
