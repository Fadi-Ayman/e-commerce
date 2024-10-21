import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Box } from "@mui/material";
import { PaymentMethods as PaymentMethodsType } from "../../Types/ApiTypes";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { setPaymentMethod } from "../../store/CartSlice";

function PaymentMethods() {
  const dispatch = useDispatch();
  const paymentMethod = useSelector((state: RootState) => state.Cart.paymentMethod);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setPaymentMethod(event.target.value as PaymentMethodsType));
  };


  return (
    <FormControl
      sx={{
        width: "100%",
      }}
    >
      <RadioGroup
        value={paymentMethod}
        onChange={handleChange}
        sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <PaymentRadioContainer isDisabled={false}>
          <FormControlLabel
            sx={{textTransform:"capitalize"}}
            value={"pay-on-delivery"}
            control={
              <Radio
                sx={{ color: "black", "&.Mui-checked": { color: "black" }  }}
              />
            }
            label={"pay-on-delivery".split("-").join(" ")}
          />
        </PaymentRadioContainer>

        <PaymentRadioContainer isDisabled={true}>
          <FormControlLabel
            sx={{textTransform:"capitalize"}}
            value={"credit-card"}
            control={
              <Radio
                sx={{ color: "black", "&.Mui-checked": { color: "black" }  }}
              />
            }
            label={"credit-card".split("-").join(" ")}
            disabled={true}
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
