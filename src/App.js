import Navbar from "./components/Navbar/Navbar";
import Product from "./components/Product/Product.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./router/NotFound/index.js";
import SingleRoute from "./router/SingleRoute/index.jsx";
import Form from "./router/Form/Form.js";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/product/:id" element={<SingleRoute />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
