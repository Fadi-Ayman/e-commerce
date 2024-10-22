import { Box } from "@mui/material";
import DrawerNav from "./DrawerNav";
import Logo from "../Logo";

function IconAndLogo() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        justifySelf: "start",
      }}
    >
      <DrawerNav />

      <Logo color="black" />
    </Box>
  );
}

export default IconAndLogo;
