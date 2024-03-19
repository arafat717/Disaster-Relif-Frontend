import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";

const MainLayouts = () => {
  const location = useLocation();

  // Check if the current path is '/dashboard'
  const isDashboardPage = location.pathname === "/dashboard";

  return (
    <div>
      {/* Render header only if it's not the dashboard page */}
      {!isDashboardPage && <Header />}

      <Outlet />

      {/* Render footer only if it's not the dashboard page */}
      {!isDashboardPage && <Footer />}
    </div>
  );
};

export default MainLayouts;
