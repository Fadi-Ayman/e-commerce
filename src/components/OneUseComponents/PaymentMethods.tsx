import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Box } from "@mui/material";

function PaymentMethods() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState("Pay On Delivery");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPaymentMethod(event.target.value);
  };


  return (
    <FormControl
      sx={{
        width: "100%",
      }}
    >
      <RadioGroup
        value={selectedPaymentMethod}
        name="radio-buttons-group"
        onChange={handleChange}
        sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <PaymentRadioContainer isDisabled={false}>
          <FormControlLabel
            value="Pay On Delivery"
            control={
              <Radio
                sx={{ color: "black", "&.Mui-checked": { color: "black" } }}
              />
            }
            label="Pay On Delivery"
          />
        </PaymentRadioContainer>

        <PaymentRadioContainer isDisabled={true}>
          <FormControlLabel
            value="Credit Card"
            control={
              <Radio
                sx={{ color: "black", "&.Mui-checked": { color: "black" } }}
              />
            }
            label="Credit Card"
            disabled
          />
        </PaymentRadioContainer>
      </RadioGroup>
    </FormControl>
  );
}

export default PaymentMethods;

function PaymentRadioContainer({
  children,
  isDisabled,
}: {
  children: React.ReactNode;
  isDisabled: boolean;
}) {
  return (
    <Box
      sx={{
        border: `1px solid `, // Use grey for disabled
        borderColor: isDisabled ? "grey.300" : "black",
        bgcolor: isDisabled ? "white" : "grey.200",
        width: "100%",
        height: "3rem",
        borderRadius: "5px",
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        padding: "0 1rem",
      }}
    >
      {children}
    </Box>
  );
}
