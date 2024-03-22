import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const SlideCard = ({ item }) => {
  const theme = useSelector((state) => state.toggle.theme);

  return (
    <div
      className={`w-60 card ${theme} p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl`}
    >
      <img
        className="h-40 w-full object-cover rounded-xl rounded-x"
        src={item.img}
        alt=""
      />
      <div className={`p-2 white ${theme}`}>
        <h2 className="font-bold text-lg mb-2 ">{item.name} ...</h2>
        <p className="text-md ">
          Amount: <span className="text-orange-600">{item.amount}</span>
        </p>
        <p className="text-md ">
          <span>{item.review.slice(0, 30)}</span>
        </p>
      </div>
      <div className="m-2 ">
        <Link className="text-white bg-cyan-500 px-3 py-1 rounded-md hover:bg-cyan-400">
          View Deatils
        </Link>
      </div>
    </div>
  );
};

export default SlideCard;
