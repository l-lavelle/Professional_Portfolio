import CustomNavBar from "./Navbar/index";
import { Outlet } from "react-router-dom";
import { QueryProvider } from "./Blog/context";

function App() {
  return (
    <>
      <CustomNavBar />
      <QueryProvider>
        <main>
          <Outlet />
        </main>
      </QueryProvider>
    </>
  );
}

export default App;
