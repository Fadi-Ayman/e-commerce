import { Box } from "@mui/material";

import LoginForm from "../features/login/LoginForm";
import LoginAndRegisterImage from "../components/LoginAndRegisterImage";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

function Login() {
  const {isAuthenticated} = useAuth()
  if(isAuthenticated) return <Navigate to="/home" />

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
