import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About/About";
import Terms from "./pages/About/Terms";
import Return from "./pages/Policy/Return";
import Refund from "./pages/Policy/Refund";
import Privacy from "./pages/Policy/Privacy";
import Shipping from "./pages/Policy/Shipping";
import Default from "./layouts/Default";
import Aim from "./pages/About/Aim";
import Work from "./pages/About/Work";
import Values from "./pages/About/Values";
import { CustomerContext } from "./CustomerContext";

const App = () => {
  const [isCustomer, setIsCustomer] = useState(true);
  return (
    <CustomerContext.Provider value={{ isCustomer, setIsCustomer }}>
      <Routes>
        <Route path="/" element={<Default />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/aim" element={<Aim />} />
          <Route path="/work" element={<Work />} />
          <Route path="/values" element={<Values />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/return" element={<Return />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/shipping" element={<Shipping />} />
        </Route>
      </Routes>
    </CustomerContext.Provider>
  );
};

export default App;
