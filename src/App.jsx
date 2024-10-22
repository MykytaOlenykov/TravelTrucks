import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { lazy } from "react";

const HomePage = lazy(() => import("./pages/HomePage"));
const CatalogPage = lazy(() => import("./pages/CatalogPage"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<>HomePage</>} />
      </Route>
    </Routes>
  );
}

export default App;
