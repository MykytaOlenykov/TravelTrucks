import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<>HomePage</>} />
        <Route path="/catalog" element={<>HomePage</>} />
        <Route path="/catalog/:id" element={<>HomePage</>} />
      </Route>
    </Routes>
  );
}

export default App;
