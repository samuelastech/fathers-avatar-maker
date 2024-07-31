import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FormAvatar } from "./pages/FormAvatar/FormAvatar";
import { FinalProduct } from "./pages/FinalProduct/FinalProduct";
import { NotFound } from "./pages/NotFound/NotFound";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormAvatar />} />
        <Route path="/product" element={<FinalProduct />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
