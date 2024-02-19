import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Terms from "./pages/Terms";
import Return from "./pages/Return";
import Refund from "./pages/Refund";
import Privacy from "./pages/Privacy";
import Shipping from "./pages/Shipping";
import Default from "./layouts/Default";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Default />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/return" element={<Return />} />
        <Route path="/refund" element={<Refund />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/shipping" element={<Shipping />} />
      </Route>
    </Routes>
  );
};

export default App;
