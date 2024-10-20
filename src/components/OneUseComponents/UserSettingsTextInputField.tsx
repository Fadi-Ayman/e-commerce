import { Box, TextField } from "@mui/material";
import {
  UseFormClearErrors,
  UseFormGetValues,
  UseFormRegister,
} from "react-hook-form";
import { UpdateFormInputsType } from "../../features/settings/childPages/AccountData";

type TextInputFieldProps = {
  label: string;
  inputId: "firstName" | "lastName" | "email";
  isError: boolean;
  errorMessage: string;
  register: UseFormRegister<UpdateFormInputsType>;
  getValues: UseFormGetValues<UpdateFormInputsType>;
  clearErrors: UseFormClearErrors<UpdateFormInputsType>;
};

const TextInputField: React.FC<TextInputFieldProps> = ({
  label,
  inputId,
  isError,
  errorMessage,
  register,
  getValues,
  clearErrors,
}) => {
  function handleOnBlur() {
    if (!getValues("firstName") && !getValues("lastName")) {
      clearErrors(["firstName", "lastName"]);
      return;
    }
  }

  const registerValidationObject = () => {
    if (inputId === "email") {
      return {
        pattern: {
          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: "Invalid email address",
        },
      };
    }

    const firstName = getValues("firstName");
    const lastName = getValues("lastName");

    return {
      minLength: { value: 3, message: "Minimum length should be 3" },
      maxLength: { value: 10, message: "Maximum length should be 10" },
      required:
        firstName || lastName
          ? {
              value: true,
              message:
                "You must fill either First Name or Last Name, or leave both empty",
            }
          : false,
      pattern: {
        value: /^[A-Za-z]+(?:\s[A-Za-z]+)?$/,
        message: "Only letters are allowed",
      },
    };
  };

  return (
    <Box component="div" sx={{ gridColumn: { xs: "span 2", md: "span 1" } }}>
      <label htmlFor={inputId}>{label}</label>
      <TextField
        {...register(inputId, registerValidationObject())}
        helperText={isError ? errorMessage : undefined}
        fullWidth
        onBlur={handleOnBlur}
        id={inputId}
        error={isError}
        placeholder={label}
        variant="outlined"
      />
    </Box>
  );
};

export default TextInputField;
