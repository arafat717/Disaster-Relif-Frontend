import { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom"; // Import NavLink
import { useDispatch, useSelector } from "react-redux";
import { logout, useCurrentToken } from "../../redux/auth/authSlice";
import { toast } from "sonner";
import Button from "../../utils/Button";
import { FiMenu } from "react-icons/fi";
import img from "../../../public/charity-logo.png";

const Header = () => {
  const navigate = useNavigate();
  const token = useSelector(useCurrentToken);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logout());
    toast.success("Log Out Successful");
    navigate("/");
  };

  let Links = [
    { name: "HOME", link: "/" },
    { name: "Donations", link: "/donations" },
    ...(token ? [{ name: "Dashboard", link: "/dashboard" }] : []),
    // { name: "ABOUT", link: "/" },
    // { name: "BLOG'S", link: "/" },
    // { name: "CONTACT", link: "/" },
  ];
  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full left-0 top-0 z-10 sticky">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800">
          <span className="text-3xl text-indigo-600 mr-1 pt-2">
            <FiMenu className="hidden" name="logo-ionic"></FiMenu>
          </span>
          <img className="w-30" src={img} alt="" />
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <FiMenu name={open ? "close" : "menu"}></FiMenu>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-15 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
              <NavLink
                to={link.link}
                className="text-gray-800 hover:text-gray-400 duration-500"
                activeClassName="text-indigo-600"
                activeStyle={{
                  color: "red",
                }}
                exact
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          {token ? (
            <Link onClick={handleLogOut} to="/register">
              {" "}
              <Button>logOut</Button>
            </Link>
          ) : (
            <Link to="/register">
              {" "}
              <Button>Sign Up</Button>
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
