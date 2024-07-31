import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FormAvatar } from "./pages/FormAvatar/FormAvatar";
import { FinalProduct } from "./pages/FinalProduct/FinalProduct";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormAvatar />} />
        <Route path="/product" element={<FinalProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
