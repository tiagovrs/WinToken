import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Scan from "./pages/scan/Scan";
import Bets from "./pages/bets/Bets";
import Shop from "./pages/shop/Shop";
import Login from "./pages/login/Login";
import ViewProfile from "./pages/viewProfile/ViewProfile";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/scan" element={<Scan />} />
          <Route path="/loja" element={<Shop />} />
          <Route path="/apostas" element={<Bets />} />
          <Route path="/perfil" element={<ViewProfile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
