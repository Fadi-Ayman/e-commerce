import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Box } from "@mui/material";
import { Suspense } from "react";
import PageLoadingSpinner from "../PageLoadingSpinner";

function AppLayout() {
  return (
    <Box sx={{ width: "100%" }}>
      <Header />

      <Box
        component={"main"}
        sx={{ width: "100%", minHeight: "95vh", overflow: "clip" }}
      >
        <Suspense fallback={<PageLoadingSpinner height="80vh" />}>
          <Outlet />
        </Suspense>
      </Box>

      <Footer />
    </Box>
  );
}

export default AppLayout;
