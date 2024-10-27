import { VisibilityOff, Visibility } from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import { useId, useState } from "react";
import { useNavigate } from "react-router-dom";
import AgreementsCheckBox from "./AgreementsCheckBox";
import { useForm } from "react-hook-form";
import { theme } from "../../styles/theme";
import useRegister from './../../hooks/authHooks/useRegister';
import { RegisterFormInputs } from "../../Types/ApiTypes";



const RegisterFormInitialValues: RegisterFormInputs = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
};

function RegisterForm() {
  const navigate = useNavigate();
  const [isAgreedLegalTemrs, setIsAgreedLegalTemrs] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const id = useId();
  const {Register, isRegistering} = useRegister()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInputs>({ defaultValues: RegisterFormInitialValues });

  function onSubmit(data: RegisterFormInputs) {
    Register(data)
  }

  const handleClickShowPassword = () =>
    setShowPassword((show: boolean) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
      component={"form"}
      sx={{
        width: "100%",
        height: { xs: "fit-content", md: "100%" },
        padding: {
          xs: "0.5rem 1.4rem 2rem 1.4rem",
          sm: "0.5rem 5rem",
          md: "8rem 4rem",
          lg: "10rem 10rem 9rem 5rem",
        },
        display: "flex",
        flexDirection: "column",
        gap: { xs: "0.5rem", md: "1.2rem" },
        verticalAlign: "middle",
        bgcolor: "grey.50",
        borderRadius: "1rem",
      }}
    >
      {/* Title */}
      <Typography
        component={"h3"}
        sx={{ fontWeight: "500", fontSize: "2rem", verticalAlign: "middle" }}
      >
        Sign Up
      </Typography>

      {/* Sign UP Message */}
      <Typography
        component={"p"}
        sx={{ fontSize: "1rem", color: "grey.300", verticalAlign: "middle" }}
      >
        Already have an account?{" "}
        <span
          style={{ color: "#38CB89", cursor: "pointer", fontWeight: "500" }}
          onClick={() => navigate("/login")}
        >
          Sign In
        </span>
      </Typography>

      {/* First Name */}
      <TextField
        {...register("firstName", {
          required: { value: true, message: "First Name is Required" },
          minLength: { value: 3, message: "Minimum length should be 3" },
          maxLength: { value: 10, message: "Maximum length should be 10" },
          pattern: {
            value: /^[A-Za-z]+$/,
            message: "Only letters are allowed, without spaces",
          },
        })}
        helperText={errors.firstName && errors.firstName.message}
        error={!!errors.firstName?.message}
        fullWidth
        id={id + "firstName"}
        label="First Name"
        variant="standard"
        autoComplete="on"
        disabled={isRegistering}
        sx={{
          padding: { xs: "0", md: "0.3rem 0rem" },
          "& .MuiInputBase-input": {
            paddingLeft: "0.5rem",
            paddingRight: "0.5rem",
          },
        }}
      />

      {/* Last Name */}
      <TextField
        {...register("lastName", {
          required: { value: true, message: "Last Name is Required" },
          minLength: { value: 3, message: "Minimum length should be 3" },
          maxLength: { value: 10, message: "Maximum length should be 10" },
          pattern: {
            value: /^[A-Za-z]+$/,
            message: "Only letters are allowed, without spaces",
          },
        })}
        helperText={errors.lastName && errors.lastName.message}
        error={!!errors.lastName?.message}
        fullWidth
        id={id + "lastName"}
        label="Last Name"
        variant="standard"
        autoComplete="on"
        disabled={isRegistering}

        sx={{
          padding: { xs: "0", md: "0.3rem 0rem" },
          "& .MuiInputBase-input": {
            paddingLeft: "0.5rem",
            paddingRight: "0.5rem",
          },
        }}
      />

      {/* Email */}
      <TextField
        {...register("email", {
          required: { value: true, message: "Email is Required" },
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Must follow email pattern e.g, example@example.com",
          },
        })}
        helperText={errors.email && errors.email.message}
        error={!!errors.email?.message}
        fullWidth
        id={id + "email"}
        label="Email Address"
        variant="standard"
        autoComplete="on"
        disabled={isRegistering}

        sx={{
          padding: { xs: "0", md: "0.3rem 0rem" },
          "& .MuiInputBase-input": {
            paddingLeft: "0.5rem",
            paddingRight: "0.5rem",
          },
        }}
      />

      {/* Password */}
      <FormControl variant="standard" fullWidth>
        <InputLabel
          sx={{
            color: errors.password?.message ? theme.palette.error.main : "",
          }}
          htmlFor={id + "password"}
        >
          Password
        </InputLabel>
        <Input
          {...register("password", {
            minLength: { value: 8, message: "Minimum length should be 8" },
            maxLength: { value: 15, message: "Maximum length should be 15" },
            required: { value: true, message: "Password is Required" },
          })}
          error={!!errors.password?.message}
          sx={{
            padding: { xs: "0", md: "0.2rem 0.5rem" },
          }}
          id={id + "password"}
          type={showPassword ? "text" : "password"}
          disabled={isRegistering}

          endAdornment={
            <InputAdornment position="end" sx={{ marginRight: "0.2rem" }}>
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                onMouseUp={handleMouseUpPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
        <FormHelperText error>{errors.password?.message}</FormHelperText>
      </FormControl>

      {/* Legal Terms */}
      <AgreementsCheckBox
        isAgreedLegalTemrs={isAgreedLegalTemrs}
        setIsAgreedLegalTemrs={setIsAgreedLegalTemrs}
        disabled={isRegistering}
      />

      {/* Submit */}
      <Button
        variant="contained"
        sx={{
          width: "100%",
          mx: "auto",
          backgroundColor: "black",
          padding: "0.6rem 0.3rem",
          mt: "0.5rem",
        }}
        type="submit"
        disabled={!isAgreedLegalTemrs || isRegistering}
      >
        Sign Up
      </Button>
    </Box>
  );
}

export default RegisterForm;
