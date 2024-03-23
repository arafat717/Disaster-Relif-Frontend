import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { logout } from "../../redux/auth/authSlice";
import { toast } from "sonner";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const theme = useSelector((state) => state.toggle.theme);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logout());
    toast.success("Log Out Successful");
    navigate("/");
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    if (sidebarOpen) {
      setSidebarOpen(false);
    }
  };

  return (
    <div className={`flex flex-col min-h-screen black ${theme}`}>
      {/* Sidebar toggle icon for mobile */}
      <div className="md:hidden">
        <button
          onClick={toggleSidebar}
          className="text-black p-2 focus:outline-none"
        >
          {sidebarOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 w-full md:w-64 h-full bg-gray-900 text-white md:block ${
          sidebarOpen ? "block" : "hidden"
        }`}
        onClick={closeSidebar}
      >
        <div className="p-4 border-b border-gray-800">
          <h1 className="text-lg font-semibold">Dashboard</h1>
        </div>
        <div className="p-4">
          {/* Sidebar links */}
          <ul className="space-y-4">
            <li>
              <Link
                to="/dashboard"
                className="block py-2 px-2 text-sm hover:bg-gray-800 rounded-md"
              >
                Dashboard Home
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/donations"
                className="block py-2 px-2 text-sm hover:bg-gray-800 rounded-md"
              >
                All Donations
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/create-donation"
                className="block py-2 px-2 text-sm hover:bg-gray-800 rounded-md"
              >
                Create-Donation
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/create-testimonial"
                className="block py-2 px-2 text-sm hover:bg-gray-800 rounded-md"
              >
                create-testimonial
              </Link>
            </li>
          </ul>
        </div>
        <hr />
        <div className="p-4">
          {/* Sidebar links */}
          <ul className="space-y-4">
            <li>
              <Link
                to="/"
                className="block py-2 px-2 text-sm hover:bg-gray-800 rounded-md"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/donations"
                className="block py-2 px-2 text-sm hover:bg-gray-800 rounded-md"
              >
                All Donation post
              </Link>
            </li>
            <li>
              <Link
                to="/leaderboard"
                className="block py-2 px-2 text-sm hover:bg-gray-800 rounded-md"
              >
                Leaderboard
              </Link>
            </li>
            <li>
              <Link
                to="/community"
                className="block py-2 px-2 text-sm hover:bg-gray-800 rounded-md"
              >
                Community
              </Link>
            </li>
          </ul>
        </div>
        <div className="p-4 border-t border-gray-800">
          <a
            onClick={handleLogOut}
            href="#"
            className="block text-sm text-gray-500 hover:text-white"
          >
            Logout
          </a>
        </div>
      </div>

      {/* Main content */}
      <div className="ml-0 md:ml-64 p-4 flex-grow">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
