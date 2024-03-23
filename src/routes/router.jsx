import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Error from "../pages/Error";
import AllDonation from "../pages/AllDonation";
import DonationDetails from "../components/common/DonationDetails";
import Dashboard from "../components/Dashboard/Dashboard";
import Register from "../components/common/Resigter";
import Login from "../components/common/Login";
import ProtectedRoute from "../layouts/ProtectedRoute";
import AllDonationsTable from "../components/Dashboard/AllDonationsTable";
import DashboardHome from "../components/Dashboard/DashboardHome";
import CreateDonations from "../components/Dashboard/CreateDonations";
import LeaderBoard from "../pages/LeaderBoard";
import Community from "../pages/Community/Community";
import Volunteer from "../pages/Volunteer/Volunteer";
import CreateTestominal from "../components/Dashboard/CreateTestominal";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "donations",
        element: <AllDonation></AllDonation>,
      },
      {
        path: "leaderboard",
        element: <LeaderBoard></LeaderBoard>,
      },
      {
        path: "community",
        element: <Community></Community>,
      },
      {
        path: "volunteer",
        element: <Volunteer></Volunteer>,
      },
      {
        path: "donations/:id",
        element: <DonationDetails></DonationDetails>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard></Dashboard>
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <DashboardHome></DashboardHome>,
      },
      {
        path: "/dashboard/donations",
        element: <AllDonationsTable></AllDonationsTable>,
      },
      {
        path: "/dashboard/create-donation",
        element: <CreateDonations></CreateDonations>,
      },
      {
        path: "/dashboard/create-testimonial",
        element: <CreateTestominal></CreateTestominal>,
      },
    ],
  },
]);

export default router;
