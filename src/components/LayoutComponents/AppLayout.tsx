import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Box } from "@mui/material";

function AppLayout() {
  return (
    <Box sx={{ width: "100%" }}>
      <Header />

      <Box
        component={"main"}
        sx={{ width: "100%",minHeight: "88vh", overflow: "clip" }}
      >
        <Outlet />
      </Box>

      <Footer />
    </Box>
  );
}

export default AppLayout;
