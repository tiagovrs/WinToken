import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Scan from "./pages/scan/Scan";
import Apostas from "./pages/apostas/Apostas";
import Historico from "./pages/historico/Historico";
import Login from "./pages/login/Login";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/scan" element={<Scan />} />
          <Route path="/apostas" element={<Apostas />} />
          <Route path="/historico" element={<Historico />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
