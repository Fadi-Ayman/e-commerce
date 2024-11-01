import {
  Box,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useId, useState } from "react";
import { egyptianGovernorates } from "./../../utils/constants";
import {
  FieldErrors,
  UseFormClearErrors,
  UseFormGetValues,
  UseFormRegister,
} from "react-hook-form";
import { CheckoutFormInputsType } from "./CheckoutForm";
import useOrders from "../../hooks/ordersHooks/useOrders";

type ShippingAddressFormProps = {
  register: UseFormRegister<CheckoutFormInputsType>;
  getValues: UseFormGetValues<CheckoutFormInputsType>;
  errors: FieldErrors<CheckoutFormInputsType>;
  clearErrors: UseFormClearErrors<CheckoutFormInputsType>;
};

function ShippingAddressForm({
  register,
  getValues,
  errors,
  clearErrors,
}: ShippingAddressFormProps) {
  const id = useId();
  const [selectedGovernorate, setSelectedGovernorate] = useState<string>("");
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [addressValue, setAddressValue] = useState<string>("");
  const { addOrderLoading } = useOrders();

  useEffect(() => {
    if (selectedGovernorate !== "" && selectedCity !== "") {
      setAddressValue(`,${selectedCity} , ${selectedGovernorate}, Egypt`);
    }
  }, [selectedGovernorate, selectedCity]);

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
        gridTemplateColumns: "1fr",
      }}
    >
      <Typography variant="h5" component={"h5"}>
        Shipping Address
      </Typography>

      {/* Governorate Input */}
      <Box component="div" sx={{ width: "100%" }}>
        <label>Governorate *</label>
        <FormControl fullWidth error={!!errors.governorate}>
          <Select
            {...register("governorate", {
              required: "Governorate is required",
            })} // Registering Governorate
            sx={{ width: "100%" }}
            id={id + "governorate"}
            value={selectedGovernorate}
            disabled={addOrderLoading}
            onChange={(e) => {
              setSelectedGovernorate(e.target.value);
              clearErrors(["governorate", "city"]);
            }}
            defaultValue=""
            displayEmpty
            renderValue={(selected) => {
              if (selected.length === 0) {
                return <span style={{ color: "gray" }}>Governorate</span>;
              }
              return selected;
            }}
          >
            <MenuItem value="" disabled>
              <span style={{ color: "gray" }}>Governorate</span>
            </MenuItem>

            {egyptianGovernorates.map((governorate) => (
              <MenuItem
                key={governorate.governorate}
                value={governorate.governorate}
              >
                {governorate.governorate}
              </MenuItem>
            ))}
          </Select>
          {errors.governorate && (
            <Typography
              sx={{ color: "#ff5630", ml: "0.8rem", mt: "0.3rem" }}
              variant="caption"
            >
              {errors.governorate.message}
            </Typography>
          )}
        </FormControl>
      </Box>

      {/* City Input */}
      <Box component="div" sx={{ width: "100%" }}>
        <label>City *</label>
        <FormControl fullWidth error={!!errors.city}>
          <Select
            {...register("city", {
              validate: (value) => {
                if (getValues("governorate") === "") {
                  return "Please choose a governorate first";
                }
                if (!value) {
                  return "City is required";
                }
                return true;
              },
            })}
            disabled={!selectedGovernorate || addOrderLoading}
            sx={{ width: "100%" }}
            id={id + "city"}
            defaultValue=""
            onChange={(e) => setSelectedCity(e.target.value)}
            value={selectedCity}
            displayEmpty
            renderValue={(selected) => {
              if (selected.length === 0) {
                return <span style={{ color: "gray" }}>City</span>;
              }
              return selected;
            }}
          >
            <MenuItem value="" disabled>
              <span style={{ color: "gray" }}>City</span>
            </MenuItem>

            {egyptianGovernorates
              .find(
                (governorate) => governorate.governorate === selectedGovernorate
              )
              ?.cities.map((city) => (
                <MenuItem key={city} value={city}>
                  {city}
                </MenuItem>
              )) || null}
          </Select>
          <Typography
            sx={{ color: "#ff5630", ml: "0.8rem", mt: "0rem" }}
            variant="caption"
          >
            {errors?.city?.message}
          </Typography>
        </FormControl>
      </Box>

      {/*  Address Input */}
      <Box component="div" sx={{ width: "100%" }}>
        <label htmlFor={id + "address"}>Address *</label>
        <TextField
          {...register("address", {
            required: " address is required",
            validate: (value) => {
              const governorate = getValues("governorate") || "Governorate";
              const city = getValues("city") || "City";

              const dynamicPattern = new RegExp(
                `^\\s*(?:\\d*\\s*[A-Za-z\\s]+)\\s*,\\s*${city}\\s*,\\s*${governorate}\\s*,\\s*Egypt\\s*(?:-\\s*\\d{5})?$`,
                "i"
              );

              if (!dynamicPattern.test(value)) {
                return `Please enter a valid address (e.g. Street Name, ${city}, ${governorate}, Egypt).`;
              }
              return true;
            },
          })}
          fullWidth
          id={id + "address"}
          value={addressValue}
          disabled={addOrderLoading}
          onChange={(e) => setAddressValue(e.target.value)}
          error={!!errors.address}
          helperText={errors.address ? errors.address.message : false}
          placeholder={"Address"}
          variant="outlined"
          autoComplete="on"
        />

        {/* Examples */}
        <Typography
          component={"p"}
          variant="body2"
          sx={{ color: "grey.300", mt: 2 }}
        >
          Examples:
          <br />
          1. Elm Street, Heliopolis, Cairo, Egypt
          <br />
          2. 123 Main Street, Downtown, Cairo, Egypt - 12345
          <br />
          3. 123 Main Street, Downtown, Cairo, Egypt
          <br />
          4. Corniche, Maadi, Cairo, Egypt - 54321
        </Typography>
      </Box>
    </Box>
  );
}

export default ShippingAddressForm;
