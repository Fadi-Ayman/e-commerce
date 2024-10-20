import { Box, Typography } from "@mui/material";
import DrawerNav from "./DrawerNav";
import { brandName } from "../../utils/constants";
import { useNavigate } from "react-router-dom";

function IconAndLogo() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <DrawerNav />

      <Typography
        role="button"
        onClick={() => navigate("/")}
        sx={{ cursor: "pointer" }}
        variant="h6"
        component={"h6"}
      >
        {brandName}
      </Typography>
    </Box>
  );
}

export default IconAndLogo;
