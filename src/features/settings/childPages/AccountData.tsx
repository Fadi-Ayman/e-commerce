import { Box, Button } from "@mui/material";
import NameAndEmailDetailsForm from "../NameAndEmailDetailsForm";
import PasswordDetailsForm from "../PasswordDetailsForm";
import { useForm } from "react-hook-form";
import TextInputField from "../../../components/OneUseComponents/UserSettingsTextInputField";
import PasswordInputField from "../../../components/OneUseComponents/UserSettingsPasswordInputField";
import toast from "react-hot-toast";

export type UpdateFormInputsType = {
  firstName: string;
  lastName: string;
  email: string;
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
};

const initialValues: UpdateFormInputsType = {
  firstName: "",
  lastName: "",
  email: "",
  oldPassword: "",
  newPassword: "",
  confirmPassword: "",
};

function AccountData() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    clearErrors,
  } = useForm<UpdateFormInputsType>({
    mode: "onChange",
    defaultValues: initialValues,
  });

  function onSubmit(data: UpdateFormInputsType) {
    // Check if all fields are empty
    if (JSON.stringify(data) === JSON.stringify(initialValues)) {
      toast.error("You Must Fill Some Inputs !");
      return;
    }

    // Handle form Logic Here
    console.log(data);
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
        <TextInputField
          clearErrors={clearErrors}
          label="First Name"
          inputId="firstName"
          register={register}
          getValues={getValues}
          isError={errors.firstName?.message ? true : false}
          errorMessage={errors.firstName?.message || ""}
        />

        <TextInputField
          clearErrors={clearErrors}
          label="Last Name"
          inputId="lastName"
          register={register}
          getValues={getValues}
          isError={errors.lastName?.message ? true : false}
          errorMessage={errors.lastName?.message || ""}
        />

        <TextInputField
          clearErrors={clearErrors}
          label="Email"
          inputId="email"
          register={register}
          getValues={getValues}
          isError={errors.email?.message ? true : false}
          errorMessage={errors.email?.message || ""}
        />
      </NameAndEmailDetailsForm>

      <PasswordDetailsForm>
        <PasswordInputField
          clearErrors={clearErrors}
          label="Old Password"
          inputId="oldPassword"
          register={register}
          getValues={getValues}
          isError={errors.oldPassword?.message ? true : false}
          errorMessage={errors.oldPassword?.message || ""}
        />
        <PasswordInputField
          clearErrors={clearErrors}
          label="New Password"
          inputId="newPassword"
          register={register}
          getValues={getValues}
          isError={errors.newPassword?.message ? true : false}
          errorMessage={errors.newPassword?.message || ""}
        />
        <PasswordInputField
          clearErrors={clearErrors}
          label="Password Confirmation"
          inputId="confirmPassword"
          register={register}
          getValues={getValues}
          isError={errors.confirmPassword?.message ? true : false}
          errorMessage={errors.confirmPassword?.message || ""}
        />
      </PasswordDetailsForm>

      <Button variant="contained" sx={{ bgcolor: "grey.700" }} type="submit">
        Save Changes
      </Button>
    </Box>
  );
}

export default AccountData;
