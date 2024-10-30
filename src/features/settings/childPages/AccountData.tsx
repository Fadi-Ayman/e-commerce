import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
} from "@mui/material";
import NameAndEmailDetailsForm from "../NameAndEmailDetailsForm";
import PasswordDetailsForm from "../PasswordDetailsForm";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useId, useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useAuth } from "../../../context/AuthContext";
import { verifyPassword } from "../../../servcies/userApi";
import { UpdateFormInputsType } from "../../../Types/ApiTypes";

function AccountData() {
  const { userData, updateUser, isUpdatingUser } = useAuth();

  const initialValues: UpdateFormInputsType = {
    firstName: userData?.firstName || null,
    lastName: userData?.lastName || null,
    email: userData?.email || JSON.parse(localStorage.getItem("user")!).email,
    oldPassword: null,
    newPassword: null,
    confirmPassword: null,
  };

  const id = useId();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    clearErrors,
    setError,
  } = useForm<UpdateFormInputsType>({
    mode: "onChange",
    defaultValues: initialValues,
  });

  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  function handleOnPasswordMouseLeave() {
    if (
      !getValues("oldPassword") &&
      !getValues("newPassword") &&
      !getValues("confirmPassword")
    ) {
      clearErrors(["confirmPassword", "newPassword", "oldPassword"]);
      return;
    }

    if(getValues("newPassword") === getValues("confirmPassword")) {
      clearErrors(["confirmPassword", "newPassword"]);
      return
    }
  }

  async function onSubmit(data: UpdateFormInputsType) {
    // Replace falsy values with null
    const updatedData: UpdateFormInputsType = Object.fromEntries(
      Object.entries(data).map(([key, value]) => [key, value || null])
    ) as UpdateFormInputsType;

    // Check if all fields are empty
    if (JSON.stringify(updatedData) === JSON.stringify(initialValues)) {
      toast.error("You Must Fill Some Inputs !");
      return;
    }

    // Check if old password is correct
    if (
      updatedData.oldPassword &&
      updatedData.newPassword &&
      updatedData.confirmPassword
    ) {
      try {
        await verifyPassword(updatedData.email, updatedData.oldPassword);
      } catch (err) {
        if (err instanceof Error) {
          setError("oldPassword", { message: err.message });
          return;
        }
      }
    }
    // prepare data
    const filteredUserData: Omit<
      UpdateFormInputsType,
      "email" | "oldPassword" | "confirmPassword"
    > = {
      firstName: updatedData.firstName,
      lastName: updatedData.lastName,
      newPassword: updatedData.newPassword,
    };
    // making request
    updateUser(filteredUserData);
  }

  return (
    <Box
      component={"form"}
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        alignItems: "start",
      }}
    >
      <NameAndEmailDetailsForm>
        {/* firstName */}
        <Box
          component="div"
          sx={{ gridColumn: { xs: "span 2", md: "span 1" } }}
        >
          <label htmlFor={id + "firstName"}>{"First Name"}</label>
          <TextField
            {...register("firstName", {
              minLength: { value: 3, message: "Minimum length should be 3" },
              maxLength: { value: 10, message: "Maximum length should be 10" },
              required: { value: true, message: "First Name is required" },
              pattern: {
                value: /^[A-Za-z]+$/,
                message: "Only letters are allowed, without spaces",
              },
            })}
            helperText={errors.firstName?.message || ""}
            fullWidth
            id={id + "firstName"}
            error={!!errors.firstName?.message}
            placeholder={"First Name"}
            variant="outlined"
            disabled={isUpdatingUser}
          />
        </Box>

        {/* lastName */}
        <Box
          component="div"
          sx={{ gridColumn: { xs: "span 2", md: "span 1" } }}
        >
          <label htmlFor={id + "lastName"}>{"Last Name"}</label>
          <TextField
            {...register("lastName", {
              minLength: { value: 3, message: "Minimum length should be 3" },
              maxLength: { value: 10, message: "Maximum length should be 10" },
              required: { value: true, message: "First Name is required" },

              pattern: {
                value: /^[A-Za-z]+$/,
                message: "Only letters are allowed, without spaces",
              },
            })}
            helperText={errors.lastName?.message || ""}
            fullWidth
            id={"lastName"}
            error={!!errors.lastName?.message}
            placeholder={"Last Name"}
            variant="outlined"
            disabled={isUpdatingUser}
          />
        </Box>

        {/* email */}
        <Box
          component="div"
          sx={{ gridColumn: { xs: "span 2", md: "span 1" } }}
        >
          <label htmlFor={id + "email"} style={{ color: "gray" }}>
            {"Email"}
          </label>
          <TextField
            {...register("email", {
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            helperText={errors.email?.message || ""}
            fullWidth
            id={id + "email"}
            disabled={getValues("email") !== null}
            error={!!errors.email?.message}
            placeholder={"Email"}
            variant="outlined"
          />
        </Box>
      </NameAndEmailDetailsForm>

      <PasswordDetailsForm>
        {/* Old Password */}
        <FormControl
          variant="outlined"
          sx={{ gridColumn: { xs: "span 2", md: "span 1" } }}
        >
          <label htmlFor={id + "oldPassword"}>{"Old Password"}</label>
          <OutlinedInput
            {...register("oldPassword", {
              minLength: { value: 8, message: "Minimum length should be 8" },
              maxLength: { value: 15, message: "Maximum length should be 15" },
              required:
                getValues("oldPassword") ||
                getValues("newPassword") ||
                getValues("confirmPassword")
                  ? {
                      value: true,
                      message:
                        "To Change Password you Must Fill All Password Fields",
                    }
                  : false,
            })}
            placeholder={"Old Password"}
            error={!!errors.oldPassword?.message}
            id={id + "oldPassword"}
            onMouseLeave={handleOnPasswordMouseLeave}
            type={showOldPassword ? "text" : "password"}
            disabled={isUpdatingUser}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowOldPassword((show: boolean) => !show)}
                  onMouseDown={(e) => e.preventDefault()}
                  onMouseUp={(e) => e.preventDefault()}
                  edge="end"
                >
                  {showOldPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          <FormHelperText error>{errors.oldPassword?.message}</FormHelperText>
        </FormControl>

        {/* New Password */}
        <FormControl
          variant="outlined"
          sx={{ gridColumn: { xs: "span 2", md: "span 1" } }}
        >
          <label htmlFor={id + "newPassword"}>{"New Password"}</label>
          <OutlinedInput
            {...register("newPassword", {
              minLength: { value: 8, message: "Minimum length should be 8" },
              maxLength: { value: 15, message: "Maximum length should be 15" },
              required:
                getValues("oldPassword") ||
                getValues("newPassword") ||
                getValues("confirmPassword")
                  ? {
                      value: true,
                      message:
                        "To Change Password you Must Fill All Password Fields",
                    }
                  : false,
              validate: (value) => {
                if (getValues("confirmPassword")) {
                  return (
                    value === getValues("confirmPassword") ||
                    "Passwords Do Not Match"
                  );
                }
              },
            })}
            placeholder={"New Password"}
            error={!!errors.newPassword?.message}
            id={id + "newPassword"}
            onMouseLeave={handleOnPasswordMouseLeave}
            type={showNewPassword ? "text" : "password"}
            disabled={isUpdatingUser}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowNewPassword((show: boolean) => !show)}
                  onMouseDown={(e) => e.preventDefault()}
                  onMouseUp={(e) => e.preventDefault()}
                  edge="end"
                >
                  {showNewPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          <FormHelperText error>{errors.newPassword?.message}</FormHelperText>
        </FormControl>

        {/* Confirm Password */}
        <FormControl
          variant="outlined"
          sx={{ gridColumn: { xs: "span 2", md: "span 1" } }}
        >
          <label htmlFor={id + "confirmPassword"}>{"Confirm Password"}</label>
          <OutlinedInput
            {...register("confirmPassword", {
              minLength: { value: 8, message: "Minimum length should be 8" },
              maxLength: { value: 15, message: "Maximum length should be 15" },
              required:
                getValues("oldPassword") ||
                getValues("newPassword") ||
                getValues("confirmPassword")
                  ? {
                      value: true,
                      message:
                        "To Change Password you Must Fill All Password Fields",
                    }
                  : false,
              validate: (value) => {
                if (getValues("newPassword")) {
                  return (
                    value === getValues("newPassword") ||
                    "Passwords Do Not Match"
                  );
                }
              },
            })}
            placeholder={"Confirm Password"}
            error={!!errors.confirmPassword?.message}
            id={id + "confirmPassword"}
            onMouseLeave={handleOnPasswordMouseLeave}
            type={showConfirmPassword ? "text" : "password"}
            disabled={isUpdatingUser}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() =>
                    setShowConfirmPassword((show: boolean) => !show)
                  }
                  onMouseDown={(e) => e.preventDefault()}
                  onMouseUp={(e) => e.preventDefault()}
                  edge="end"
                >
                  {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          <FormHelperText error>
            {errors.confirmPassword?.message}
          </FormHelperText>
        </FormControl>
      </PasswordDetailsForm>

      <Button
        variant="contained"
        disabled={isUpdatingUser}
        sx={{ bgcolor: "grey.700" }}
        type="submit"
      >
        Save Changes
      </Button>
    </Box>
  );
}

export default AccountData;
