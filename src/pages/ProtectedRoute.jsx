import { Navigate } from "react-router-dom";

const authUser = () => {
  return JSON.parse(localStorage.getItem("user"));
}

export const ProtectedRoute = ({ children }) => {
  const user = authUser();
  if (!user || (!user.email || !user.wallet)) {
    // user is not authenticated
    return <Navigate to="/login" />;
  }
  return children;
};