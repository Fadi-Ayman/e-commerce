import { Box } from "@mui/material";
import StepperMui from "../features/cart/StepperMui";
import { Outlet } from "react-router-dom";
import { RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setCurrentCartPage } from "../store/CartSlice";

function Cart() {
  const currentPage = useSelector(
    (state: RootState) => state.Cart.currentCartPage
  );

  const dispatch = useDispatch();

  // Always Set To current page to  0 on mount , To Protect cart Routs , as also do other Checks in child pages
  useEffect(() => {
    dispatch(setCurrentCartPage(0));
  }, [dispatch]);

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
