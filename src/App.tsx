import CustomNavBar from "./navbar/index";
import { Outlet } from "react-router-dom";
import { QueryProvider } from "./Blog/context";

function App() {
  return (
    <>
      <CustomNavBar />
      <QueryProvider>
        <Outlet />
      </QueryProvider>
    </>
  );
}

export default App;
