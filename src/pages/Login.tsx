import { Box } from "@mui/material";

import LoginForm from "../features/login/LoginForm";
import LoginAndRegisterImage from "../components/LoginAndRegisterImage";

function Login() {
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
      <LoginForm />
    </Box>
  );
}

export default Login;
