import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { Box, Button, Typography } from "@mui/material";

export default function AuthStatus() {
  const auth = useAuth();
  const navigate = useNavigate();

  if (!auth.user) {
    return (
      <Typography sx={{ fontFamily: "monospace", paddingRight: 2 }}>
        Not Logged In!
      </Typography>
    );
  }
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Button
          type="submit"
          onClick={() => {
            auth.logout(() => navigate("/login"));
          }}
          variant="contained"
          sx={{
            fontFamily: "monospace",
            fontSize: "1em",
            bgcolor: "#9ACCE3",
            "&:hover": { bgcolor: "#E5E8ED" },
            maxHeight: "2em",
            maxWidth: "7em",
          }}
        >
          Log Out
        </Button>
      </Box>
    </>
  );
}
