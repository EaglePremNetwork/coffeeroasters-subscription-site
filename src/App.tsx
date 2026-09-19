import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Layout from "./Layout";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
