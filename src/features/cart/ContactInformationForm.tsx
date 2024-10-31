import { Box, TextField, Typography } from "@mui/material";
import { useId } from "react";
import {
  FieldErrors,
  UseFormRegister,
} from "react-hook-form";
import { CheckoutFormInputsType } from "./CheckoutForm";
import useOrders from "../../hooks/ordersHooks/useOrders";

type ContactInformationFormProps = {
  register: UseFormRegister<CheckoutFormInputsType>;
  errors: FieldErrors<CheckoutFormInputsType>;
};

function ContactInformationForm({
  register,
  errors,
}: ContactInformationFormProps) {
  const id = useId();
  const { addOrderLoading } = useOrders();


  return (
    <Box
      sx={{
        width: "100%",
        height: "fit-content",
        padding: "2.5rem 1.5rem",
        overflow: "hidden",
        border: "1.1px solid black",
        bgcolor: "grey.50",
        borderRadius: "5px",
        display: "grid",
        rowGap: "1rem",
        columnGap: "1.5rem",
        gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
      }}
    >
      <Typography
        variant="h5"
        component={"h5"}
        sx={{ gridColumn: "1/3", height: "fit-content" }}
      >
        Contact Information
      </Typography>

      {/* FirstName Input */}
      <Box
        component="div"
        sx={{ width: "100%", gridColumn: { xs: "1/3", lg: "1/2" } }}
      >
        <label htmlFor={id + "firstName"}>First Name *</label>
        <TextField
          {...register("firstName", {
            required: { value: true, message: "First Name is Required" },
            minLength: { value: 3, message: "Minimum length should be 3" },
            maxLength: { value: 10, message: "Maximum length should be 10" },
            pattern: {value:/^[A-Za-z]+$/,message:"Only letters are allowed"}
          })}
          helperText={errors.firstName?.message}
          error={errors.firstName ? true : false}
          fullWidth
          disabled
          id={id + "firstName"}
          placeholder={"First Name"}
          variant="outlined"
          autoComplete="on"

        />
      </Box>

      {/* LastName Input */}
      <Box
        component="div"
        sx={{ width: "100%", gridColumn: { xs: "1/3", lg: "2/3" } }}
      >
        <label htmlFor={id + "lastName"}>Last Name *</label>
        <TextField
          {...register("lastName", {
            required: { value: true, message: "Last Name is Required" },
            minLength: { value: 3, message: "Minimum length should be 3" },
            maxLength: { value: 10, message: "Maximum length should be 10" },
            pattern: {value:/^[A-Za-z]+$/,message:"Only letters are allowed"}

          })}
          helperText={errors.lastName?.message}
          error={errors.lastName ? true : false}
          fullWidth
          disabled
          id={id + "lastName"}
          placeholder={"Last Name"}
          variant="outlined"
          autoComplete="on"

        />
      </Box>

      {/* Phone Number Input */}
      <Box component="div" sx={{ width: "100%", gridColumn: "1/3" }}>
        <label htmlFor={id + "phoneNumber"}>Phone Number *</label>
        <TextField
          {...register("phoneNumber", {
            required: { value: true, message: "Phone number is Required" },
            pattern: {
              value: /^(010|011|012)\d{8}$/,
              message: "it must be 11 digits Starts with ( 010 or 011 or 012 )",
            },
          })}
          helperText={errors.phoneNumber?.message}
          error={errors.phoneNumber ? true : false}
          fullWidth
          id={id + "phoneNumber"}
          placeholder={"Phone Number"}
          disabled={addOrderLoading}
          variant="outlined"
          autoComplete="on"

        />
      </Box>

      {/* Email Input */}
      <Box component="div" sx={{ width: "100%", gridColumn: "1/3" }}>
        <label htmlFor={id + "email"}>Email *</label>
        <TextField
          {...register("email", {
            required: { value: true, message: "Email is Required" },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Must follow email pattern e.g, example@example.com",
            },
          })}
          helperText={errors.email?.message}
          error={errors.email ? true : false}
          fullWidth
          disabled
          id={id + "email"}
          placeholder={"Email"}
          variant="outlined"
          autoComplete="on"

        />
      </Box>
    </Box>
  );
}

export default ContactInformationForm;
