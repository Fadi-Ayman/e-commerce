import { VisibilityOff, Visibility } from "@mui/icons-material";
import {
  Box,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
  FormHelperText,
  Button,
} from "@mui/material";
import { useId, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { theme } from "../../styles/theme";
import { LoginFormInputs } from "../../Types/ApiTypes";
import useLogin from "../../hooks/authHooks/useLogin";



const LoginFormInitialValues: LoginFormInputs = {
  email: "",
  password: "",
};

function LoginForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const id = useId();
  const { Login, isLoggingIn } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({ defaultValues: LoginFormInitialValues });

  function onSubmit(data: LoginFormInputs) {
    Login(data);
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
          xs: "1rem 1.4rem 2rem 1.4rem",
          sm: "2rem 3rem",
          md: "8rem 4rem",
          lg: "12rem 10rem 10rem 5rem",
        },
        display: "flex",
        flexDirection: "column",
        gap: { xs: "0.8rem", md: "2rem" },
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
        Sign In
      </Typography>

      {/* Sign UP Message */}
      <Typography
        component={"p"}
        sx={{ fontSize: "1rem", color: "grey.300", verticalAlign: "middle" }}
      >
        Don't have an account yet?{" "}
        <span
          style={{ color: "#38CB89", cursor: "pointer", fontWeight: "500" }}
          onClick={() => navigate("/register")}
        >
          Sign Up
        </span>
      </Typography>

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
        disabled={isLoggingIn}

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
          sx={{ color: errors.password?.message ? theme.palette.error.main : "" }}
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
          disabled={isLoggingIn}
          id={id + "password"}
          type={showPassword ? "text" : "password"}
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
        disabled={isLoggingIn}
        type="submit"
      >
        Sign In
      </Button>
    </Box>
  );
}

export default LoginForm;
