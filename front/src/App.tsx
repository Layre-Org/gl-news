import { Outlet } from "react-router-dom";
import Header from "./components/header";

function App() {
  return (
    <main className="bg-background h-screen">
      <Header />
      <Outlet />
    </main>
  );
}

export default App;
