import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import {
  UseFormClearErrors,
  UseFormGetValues,
  UseFormRegister,
} from "react-hook-form";
import { UpdateFormInputsType } from "../../features/settings/childPages/AccountData";
import { DummyOldPassword } from "../../utils/dummyData";

type PasswordInputFieldProps = {
  label: string;
  inputId: "oldPassword" | "newPassword" | "confirmPassword";
  isError: boolean;
  errorMessage: string;
  register: UseFormRegister<UpdateFormInputsType>;
  getValues: UseFormGetValues<UpdateFormInputsType>;
  clearErrors: UseFormClearErrors<UpdateFormInputsType>;
};

function PasswordInputField({
  label,
  inputId,
  isError,
  errorMessage,
  register,
  getValues,
  clearErrors,
}: PasswordInputFieldProps) {
  const [showPassword, setShowPassword] = useState(false);
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

  function handleOnBlur() {
    if (
      !getValues("oldPassword") &&
      !getValues("newPassword") &&
      !getValues("confirmPassword")
    ) {
      clearErrors(["confirmPassword", "newPassword", "oldPassword"]);
      return;
    }
  }

  function registerValidationObject(
    inputId: "oldPassword" | "newPassword" | "confirmPassword"
  ) {
    const oldPassword = getValues("oldPassword");
    const newPassword = getValues("newPassword");
    const confirmPassword = getValues("confirmPassword");
    // const isNewPassword = inputId === "newPassword";
    const isConfirmPassword = inputId === "confirmPassword";
    const isOldPassword = inputId === "oldPassword";

    const registerObject = {
      minLength: { value: 8, message: "Minimum length should be 8" },
      maxLength: { value: 15, message: "Maximum length should be 15" },
      required:
        oldPassword || newPassword || confirmPassword
          ? {
              value: true,
              message: "To Change Password you Must Fill All Password Fields",
            }
          : false,
    };

    if (inputId === "newPassword" || inputId === "confirmPassword") {
      if (isConfirmPassword) {
        return {
          ...registerObject,
          validate: (value: string) => {
            return (
              value === getValues("newPassword") || "Passwords Do Not Match"
            );
          },
        };
      }
    } else if (isOldPassword && newPassword && confirmPassword) {
      return {
        ...registerObject,
        validate: (value: string) => {
          if (getValues("oldPassword").length > 0) {
            return value === DummyOldPassword || "Wrong Password";
          }
        },
      };
    }

    return registerObject;
  }

  return (
    <FormControl
      variant="outlined"
      sx={{ gridColumn: { xs: "span 2", md: "span 1" } }}
    >
      <label htmlFor={inputId}>{label}</label>
      <OutlinedInput
        {...register(inputId, registerValidationObject(inputId))}
        placeholder={label}
        error={isError}
        id={inputId}
        name={inputId}
        onBlur={handleOnBlur}
        type={showPassword ? "text" : "password"}
        endAdornment={
          <InputAdornment position="end">
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
      <FormHelperText error>{errorMessage}</FormHelperText>
    </FormControl>
  );
}

export default PasswordInputField;
