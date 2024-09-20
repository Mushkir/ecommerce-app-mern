import { Outlet } from "react-router-dom";
import TheNavBar from "./components/TheNavBar";
import TheFooter from "./components/TheFooter";

const App = () => {
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
