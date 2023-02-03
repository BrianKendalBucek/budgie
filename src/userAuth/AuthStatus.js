import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function AuthStatus() {
  const auth = useAuth();
  const navigate = useNavigate();

  if (!auth.user) {
    return <p>Not logged in!</p>;
  }
  return (
    <>
      <span>{auth.user}</span>
      <button
        onClick={() => {
          auth.logout(() => navigate("/"));
        }}
      ></button>
    </>
  );
}
