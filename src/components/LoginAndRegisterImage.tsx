import { Box, Typography } from "@mui/material"
import { brandName } from "../utils/constants"
import {  useNavigate } from "react-router-dom"


function LoginAndRegisterImage() {
  const navigate = useNavigate()


  return (
    <Box
    sx={{
      width: "100%",
      height: {xs:"50%",md:"100%"},
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
      src="loginImage.jpg"
      alt="Login Image"
    />
    {/* Logo */}
    <Typography
      component={"h3"}
      sx={{
        textAlign: "center",
        position: "absolute",
        top: "11%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        fontWeight: "500",
        letterSpacing: "3px",
        fontSize: { xs: "1.5rem", md: "2.3rem" },
        cursor:"pointer",
        "&:hover": { transform: "scale(1.04,1.04) translate(-50%,-50%)" },
        transition: "0.3s",
      }}
      onClick={() => navigate("/home")}
    >
      {brandName}
    </Typography>
  </Box>
  )
}

export default LoginAndRegisterImage
