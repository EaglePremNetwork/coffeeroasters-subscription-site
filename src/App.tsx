import { Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Plan from "./pages/plan/Plan";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/subscribe" element={<Plan />} />
      </Route>
    </Routes>
  );
}

export default App;
