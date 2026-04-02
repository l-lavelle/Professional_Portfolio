import CustomNavBar from "./navbar/index";
import { Outlet } from "react-router-dom";
import { GlobalProvider } from "./globalContext";

function App() {
  return (
    <>
      <CustomNavBar />
      <GlobalProvider>
        <Outlet />
      </GlobalProvider>
    </>
  );
}

export default App;
