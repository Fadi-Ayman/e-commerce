import { Box } from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";
import UserSettingsSideBar from "../features/settings/UserSettingsSideBar";
import { useAuth } from "../context/AuthContext";

function UserSettings() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate replace to="/login" />;
  }

  return (
    <Box
      sx={{
        margin: { xs: "2rem 1rem", md: "2rem" },
        height: "100%",
        overflow: "hidden",
        display: "grid",
        justifyContent: "start",
        gap: "1rem",
        gridTemplateColumns: { xs: "1fr", md: "1fr 3fr" },
      }}
    >
      <UserSettingsSideBar />

      <Box
        component={"main"}
        sx={{
          width: "100%",
          height: "100%",
          padding: { xs: "0rem", md: "1rem 2rem" },
          minHeight: "80vh",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}

export default UserSettings;
