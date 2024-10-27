import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import NotFound from "./components/NotFound";

const HomePage = lazy(() => import("./pages/HomePage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage"));
const CamperDetailsPage = lazy(() => import("./pages/CamperDetailsPage"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<CamperDetailsPage />} />
        <Route
          path="*"
          element={
            <div style={{ display: "flex", justifyContent: "center" }}>
              <NotFound />
            </div>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
