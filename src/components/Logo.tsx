import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

type LogoProps = {
  color: "white" | "black";
  width?: { xs: string; md: string };
  height?: { xs: string; md: string };
  isParentHasAbsolutePosition?: boolean;
};

function Logo({
  color = "black",
  width = { xs: "70px", md: "100px" },
  height = { xs: "18px", md: "25px" },
  isParentHasAbsolutePosition = false,
}: LogoProps) {
  const navigate = useNavigate();

  return (
    <Box
      role="button"
      component={"div"}
      sx={{
        width: width,
        height: height,
        "&:hover": isParentHasAbsolutePosition
          ? ""
          : { transform: "scale(1.1,1.1) translate(4%,-4%)" },
        transition: "all 0.3s ease",
        cursor: "pointer",
      }}
      onClick={() => navigate("/")}
    >
      <img
        style={{
          width: "100%",
          height: "100%",
          filter: color === "white" ? "brightness(0) invert(1)" : undefined,
        }}
        src="/logoCropped.png"
        alt="Vario"
      />
    </Box>
  );
}

export default Logo;
