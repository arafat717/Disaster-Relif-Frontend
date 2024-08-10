import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Card = ({ item }) => {
  const theme = useSelector((state) => state.toggle.theme);

  const goalAmount = 60000 || 0;
  const raisedAmount = 40000 || 0;

  const percentageRaised = Math.min((raisedAmount / goalAmount) * 100, 100);

  return (
    <div className={`p-3 bg-white shadow-sm ${theme}`}>
      <div>
        <img src={item.image} alt={item.title} />
      </div>
      <div className="text-center mt-6 mb-2 px-2">
        <h1 className="font-bold text-gray-800 text-2xl">{item.category}</h1>
        <h3 className="my-6 text-gray-400">{item?.title?.slice(0, 30)}...</h3>
        <p className="text-sm text-gray-700 mb-4">
          {percentageRaised.toFixed(2)}% Raised
        </p>

        <div className="w-full bg-gray-200  h-2 mb-4">
          <div
            className="bg-cyan-500 h-2 "
            style={{ width: `${percentageRaised}%` }}
          ></div>
        </div>

        <div className="flex justify-between items-center mb-2">
          <p>Goal ${goalAmount.toLocaleString()}</p>
          <p>Raised ${raisedAmount.toLocaleString()}</p>
        </div>
        <Link to={`/donations/${item._id}`}>
          <button className="bg-cyan-500 px-8 border border-gray-400 py-2 text-sm transition-all text-white mt-5 hover:border-black">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
