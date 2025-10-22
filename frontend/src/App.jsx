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
    <div className="min-h-screen bg-base-100 text-base-content p-6">
      <button className="btn btn-outline m-1">Default</button>
      <button className="btn btn-outline btn-primary m-1">Primary</button>
      <button className="btn btn-outline btn-secondary m-1">Secondary</button>
      <button className="btn btn-outline btn-accent m-1">Accent</button>
      <button className="btn btn-outline btn-info m-1">Info</button>
      <button className="btn btn-outline btn-success m-1">Success</button>
      <button className="btn btn-outline btn-warning m-1">Warning</button>
      <button className="btn btn-outline btn-error m-1">Error</button>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<DetailsPage />} />
      </Routes>
    </div>
  );
};

export default App;
