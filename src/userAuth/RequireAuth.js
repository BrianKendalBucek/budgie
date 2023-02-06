import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function RequireAuth({ children }) {
  const auth = useAuth();
  const location = useLocation();
  console.log(location);

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
}
