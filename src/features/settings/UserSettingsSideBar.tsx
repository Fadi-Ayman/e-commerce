import { Box } from "@mui/material";
import { theme } from "../../styles/theme";
import UserSettingsImageAndName from "./UserSettingsImageAndName";
import SettingsAsideLinks from "./SettingsAsideLinks";

function UserSettingsSideBar() {
  return (
    <Box
      component={"aside"}
      sx={{
        width: " 100%",
        height: { xs: "100%", md: "fit-content" },
        bgcolor: theme.palette.grey[100],
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        gap: "2rem",
        padding: "4rem 2rem",
        mx: "auto",
        borderRadius: "10px",
      }}
    >

      {/* user Image & Name */}
      <UserSettingsImageAndName />

      {/* Settings Links */}
      <SettingsAsideLinks />
    </Box>
  );
}

export default UserSettingsSideBar;
