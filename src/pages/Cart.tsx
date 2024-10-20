import { Box } from "@mui/material";
import StepperMui from "../features/cart/StepperMui";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function Cart() {
  const [stepCount, setStepCount] = useState<0 | 1 | 2>(0);
  const pathName = useLocation().pathname;

  useEffect(() => {
    if (pathName === "/cart/table") {
      setStepCount(0);
    } else if (pathName === "/cart/checkout") {
      setStepCount(1);
    } else if (pathName === "/cart/order-complete") {
      setStepCount(2);
    }
  }, [pathName]);

  return (
    <>
      <StepperMui stepCount={stepCount} />

      <Box component={"main"} sx={{ width: "100%" , height: "100%",mx:"auto",py:{xs:"0.5rem",md:"2rem"}}}>
        <Outlet />
      </Box>
    </>
  );
}

export default Cart;
