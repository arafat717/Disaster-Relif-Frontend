/* eslint-disable react/prop-types */

import { useSelector } from "react-redux";

const DetailPage = ({ data }) => {
  const theme = useSelector((state) => state.toggle.theme);
  return (
    <div className="mx-auto mt-8 px-4 h-full">
      <div
        className={`bg-white card ${theme} white ${theme} rounded-lg overflow-hidden shadow-lg`}
      >
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-96 object-cover object-center"
        />
        <div className="p-6">
          <h2 className="text-3xl white ${theme} font-bold mb-4">
            {data.title}
          </h2>
          <p className={`white ${theme} mb-2`}>Category: {data.category}</p>
          <p className={`white ${theme} text-xl mb-4`}>Amount: {data.amount}</p>
          <p className={`white ${theme} mb-6`}>{data.description}</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-md shadow-md">
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
