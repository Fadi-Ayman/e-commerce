import { Box } from "@mui/material";
import LoginAndRegisterImage from "../components/LoginAndRegisterImage";
import RegisterForm from "../features/register/RegisterForm";

function Register() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "99vh",
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      {/* Login Image */}
      <LoginAndRegisterImage />
      {/* Login Form */}
      <RegisterForm />
    </Box>
  );
}

export default Register;
