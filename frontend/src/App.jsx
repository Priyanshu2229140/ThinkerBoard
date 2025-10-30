import { useEffect } from "react";
import { Route, Routes } from "react-router";
import CreatePage from "./pages/CreatePage";
import DetailsPage from "./pages/DetailsPage";
import HomePage from "./pages/HomePage";

const App = () => {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "valentine");
  }, []);

  return (
    <div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,_#fff_40%,_#f9a8d4_100%)]"></div>


      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<DetailsPage />} />
      </Routes>
    </div>
  );
};

export default App;
