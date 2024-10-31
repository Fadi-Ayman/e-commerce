import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo";

function LoginAndRegisterImage() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "50%", md: "100%" },
        backgroundColor: "#f6f6f6",
        position: "relative",
      }}
    >
      <img
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          mixBlendMode: "darken",
        }}
        src="/loginImage.jpg"
        alt="Login Image"
      />
      {/* Logo */}
      <Box
        component={"h3"}
        sx={{
          position: "absolute",
          top: {xs:"13%",md:"11%"},
          left: {xs:"45.5%",sm:"47.5%",md:"48%"},
          transform: "translate(-50%,-50%)",
          "&:hover": { transform: "scale(1.04,1.04) translate(-50%,-50%)" },
          transition: "0.3s",
        }}
        onClick={() => navigate("/home")}
      >
        <Logo
          color="black"
          isParentHasAbsolutePosition={true}
          width={{ xs: "100px", md: "150px" }}
          height={{ xs: "30px", md: "50px" }}
        />
      </Box>
    </Box>
  );
}

export default LoginAndRegisterImage;
