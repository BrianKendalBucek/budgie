import React, { useState } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import AssessmentIcon from "@mui/icons-material/Assessment";
import CalculateIcon from "@mui/icons-material/Calculate";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import CategoryIcon from "@mui/icons-material/Category";
import { Link } from "react-router-dom";
import { Settings } from "@mui/icons-material";

export default function BottomNav() {
  const pathname = window.location.pathname;
  const [value, setValue] = useState(pathname);

  return (
    <Box sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation
        sx={{
          bgcolor: "#6d89ae6e",
          borderRadius: ".5em",
          my: "0.5em",
          mx: "0.2em",
        }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Statistics"
          value="/stats"
          icon={<AssessmentIcon />}
          component={Link}
          to="/stats"
        />
        <BottomNavigationAction
          label="Category"
          value="/category"
          icon={<CategoryIcon />}
          component={Link}
          to="/category"
        />
        <BottomNavigationAction
          label="Expenses"
          value="/expenses"
          icon={<AccountBalanceWalletIcon />}
          component={Link}
          to="/expenses"
        />
        <BottomNavigationAction
          label="Converter"
          value="/converter"
          icon={<CalculateIcon />}
          component={Link}
          to="/converter"
        />
        <BottomNavigationAction
          label="Settings"
          value="/settings"
          icon={<Settings />}
          component={Link}
          to="/settings"
        />
      </BottomNavigation>
    </Box>
  );
}
