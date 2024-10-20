import { Box } from "@mui/material";
import ContactInformationForm from "./ContactInformationForm";
import ShippingAddressForm from "./ShippingAddressForm";
import { theme } from "../../styles/theme";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export type CheckoutFormInputsType = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  governorate: string;
  city: string;
};

const initialValues: CheckoutFormInputsType = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
  governorate: "",
  city: "",
  address: "",
};

function CheckoutForm() {
  const {
    register,
    handleSubmit,
    getValues,
    clearErrors,
    formState: { errors },
  } = useForm<CheckoutFormInputsType>({
    defaultValues: initialValues,
  });

  const navigate = useNavigate();

  function onSubmit(data: CheckoutFormInputsType) {
    console.log(data);
    navigate("/cart/order-complete");
  }

  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      component={"form"}
      id="checkout-form"
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
        "& label": {
          color: theme.palette.grey[300],
          fontWeight: "500",
        },
      }}
    >
      <ContactInformationForm register={register} errors={errors} />
      
      <ShippingAddressForm
        register={register}
        errors={errors}
        getValues={getValues}
        clearErrors={clearErrors}
      />
    </Box>
  );
}

export default CheckoutForm;
