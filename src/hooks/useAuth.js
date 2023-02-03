import { useContext } from "react";
import { authContext } from "../context/AuthContext";

export function useAuth() {
  return useContext(authContext);
}
