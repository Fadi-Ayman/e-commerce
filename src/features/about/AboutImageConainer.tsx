import { Box, Typography } from "@mui/material";
import { theme } from "../../styles/theme";
import { brandName } from "../../utils/constants";

function AboutImageConainer() {
  return (
    <Box
      component={"section"}
      sx={{
        overflow: "hidden",
        height: { xs: "33vh", sm: "45vh", lg: "55vh" },
        minHeight: "10rem",
        width: "100%",
        bgcolor: theme.palette.grey[100],
        display: "flex",
        backgroundImage: "url('AboutImageTop.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundBlendMode: "darken",
        backgroundSize: "100% 100%",
        overlay: "revert-layer",
        position: "relative",
      }}
    >
      {/* OverLay */}
      <Box
        component={"span"}
        sx={{
          bgcolor: "rgba(0, 0, 0, 0.5)",
          "&:hover": { bgcolor: "rgba(0, 0, 0, 0.3)" },
          color: "white",
          transitionDuration: "0.5s",
          position: "absolute",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.5rem",
          padding: "0rem 2.2rem 3rem 2.2rem",
        }}
      >
        <Typography
          component={"h3"}
          sx={{ fontSize: { xs: "2rem", sm: "2.8rem", md: "4rem" } }}
        >
          About Us
        </Typography>

        <Typography
          component={"p"}
          sx={{
            fontSize: { xs: "0.9rem", md: "1rem" },
            textAlign: "center",
            maxWidth: "25rem",
            fontWeight: { xs: "400", md: "500" },
          }}
        >
          At <span style={{ fontWeight: "bold" }}>{brandName}</span>, explore a
          diverse range of quality products for all your needs. Enjoy seamless
          shopping!
        </Typography>
      </Box>
    </Box>
  );
}

export default AboutImageConainer;
