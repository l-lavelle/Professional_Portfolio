import CustomNavBar from "./Navbar/index";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <CustomNavBar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
