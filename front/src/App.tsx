import { Outlet } from "react-router-dom";
import Header from "./components/header";

function App() {
  return (
    <main className="bg-background h-screen">
      <Header />
      <section className="flex justify-center">
        <div className="w-full max-w-5xl">
          <Outlet />
        </div>
      </section>
    </main>
  );
}

export default App;
