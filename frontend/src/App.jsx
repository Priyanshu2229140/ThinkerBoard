import { useEffect } from "react";
import { Route, Routes } from "react-router";
import CreatePage from "./pages/CreatePage";
import DetailsPage from "./pages/DetailsPage";
import HomePage from "./pages/HomePage";

const App = () => {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "forest");
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<DetailsPage />} />
      </Routes>
    </div>
  );
};

export default App;
