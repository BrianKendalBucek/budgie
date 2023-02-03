import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function AuthStatus() {
  const auth = useAuth();
  const navigate = useNavigate();

  if (!auth.user) {
    return <span>Not logged in!</span>;
  }
  return (
    <>
      <span>{auth.user}</span>
      <button
        onClick={() => {
          auth.logout(() => navigate("/login"));
        }}
      >
        Logout
      </button>
    </>
  );
}
