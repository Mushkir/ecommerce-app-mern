import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import TheNavBar from "./components/TheNavBar";
import TheFooter from "./components/TheFooter";
import apiEndPointObj from "./common/api_uri";

const App = () => {
  // const [userData, setUserData] = useState("");
  const navigate = useNavigate();

  // JWT Token debugging method
  useEffect(() => {
    const getUserDetail = async () => {
      const response = await fetch(apiEndPointObj.getCurrentUserDetail.url, {
        method: apiEndPointObj.getCurrentUserDetail.method,
        credentials: "include",
      });

      const userData = await response.json();
      // console.log(userData);

      if (userData.message === "Unauthorized") {
        navigate("/login");
      }
    };

    getUserDetail();
  }, []);

  return (
    <>
      <TheNavBar />
      <main className="min-h-[calc(100vh-120px)]">
        <Outlet />
      </main>
      <TheFooter />
    </>
  );
};

export default App;
