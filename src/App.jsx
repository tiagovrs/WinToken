import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Scan from "./pages/scan/Scan";
import Bets from "./pages/bets/Bets";
import Shop from "./pages/shop/Shop";
import Login from "./pages/login/Login";
import ViewProfile from "./pages/viewProfile/ViewProfile";
import { ProtectedRoute } from "./pages/ProtectedRoute";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>} />
            
          <Route path="/scan" element={
            <ProtectedRoute>
              <Scan />
            </ProtectedRoute>} />

          <Route path="/loja" element={
            <ProtectedRoute>
              <Shop />
            </ProtectedRoute>} />

          <Route path="/apostas" element={
            <ProtectedRoute>
              <Bets />
            </ProtectedRoute>} />

          <Route path="/perfil" element={
            <ProtectedRoute>
              <ViewProfile />
            </ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
