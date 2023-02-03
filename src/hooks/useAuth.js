import { useContext } from "react";
import { authContext } from "../context/AuthContext";

export default function useAuth() {
  return useContext(authContext);
}
