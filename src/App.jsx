import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Scan from "./pages/scan/Scan";
import Roullete from "./pages/roullete/Roullete";
import Shop from "./pages/shop/Shop";
import Login from "./pages/login/Login";
import ViewProfile from "./pages/viewProfile/ViewProfile";
import Album from "./pages/album/Album";
import { ProtectedRoute } from "./pages/ProtectedRoute";
import SignUpPage from "./pages/login/SignUpPage/SignUpPage";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUpPage />} />
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

          <Route path="/roleta" element={
            <ProtectedRoute>
              <Roullete />
            </ProtectedRoute>} />

          <Route path="/perfil" element={
            <ProtectedRoute>
              <ViewProfile />
            </ProtectedRoute>} />

          <Route path="/album" element={
            <ProtectedRoute>
              <Album />
            </ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
