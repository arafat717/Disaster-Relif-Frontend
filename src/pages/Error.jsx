import { Link } from "react-router-dom";
import img from "../../public/depositphotos_49900661-stock-photo-404-error-page-not-found.jpg";
import Button from "../utils/Button";

const Error = () => {
  return (
    <div className="w-2/3 mx-auto text-center items-center">
      <img className="my-10" src={img} alt="" />
      <Link to="/">
        <Button>Go Back</Button>
      </Link>
    </div>
  );
};

export default Error;
