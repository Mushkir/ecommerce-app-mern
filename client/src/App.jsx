import { Outlet } from "react-router-dom";
import TheNavBar from "./components/TheNavBar";

function App() {
  return (
    <>
      <TheNavBar />
      <Outlet />
    </>
  );
}

export default App;
