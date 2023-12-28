import React, { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import Tabs from "../../components/mui/Tabs";

const AppScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/currentmatches");
  }, []);
  return (
    <div>
      <Tabs />
      <Outlet />
    </div>
  );
};

export default AppScreen;
