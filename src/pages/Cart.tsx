import { Box } from "@mui/material";
import StepperMui from "../features/cart/StepperMui";
import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../store/store";
import { useSelector } from "react-redux";

import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import toast from "react-hot-toast";

function Cart() {
  const { isAuthenticated } = useAuth();
  const currentPage = useSelector(
    (state: RootState) => state.Cart.currentCartPage
  );




  useEffect(() => {
    if (!isAuthenticated) {
      toast.error("Please Login First");
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return <Navigate replace to="/login" />;
  }


  return (
    <>
      <StepperMui stepCount={currentPage} />

      <Box
        component={"main"}
        sx={{
          width: "100%",
          height: "100%",
          mx: "auto",
          py: { xs: "0.5rem", md: "2rem" },
        }}
      >
        <Outlet />
      </Box>
    </>
  );
}

export default Cart;
