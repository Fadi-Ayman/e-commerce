import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { theme } from "../../styles/theme";

function HomeImageContainerContent() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        padding: "1rem",
        display: "flex",
        flexDirection: "column",
        gap: { xs: "0.2rem", lg: "0.5rem" },
        textAlign: { xs: "center", sm: "left" },
        alignItems: { xs: "center", sm: "start" },
        gridColumn: { xs: "1/-1", sm: "9/-1", md: "9/-1", lg: "22/-1" },
        gridRow: { xs: "2/15", sm: "16/-1", md: "16/-1", lg: "7/-1" },
      }}
    >
      <Typography
        sx={{
          color: theme.palette.grey[700],
          fontWeight: "500",
          width: "fit-content",
          fontSize: { xs: "2.5rem", sm: "2.7rem", md: "4rem", lg: "6rem" },
          lineHeight: "1.15",
          letterSpacing: "-2px",
        }}
        component={"h2"}
      >
        Listen to <br /> the{" "}
        <span
          style={{
            color: theme.palette.primary.main,
            display: "inline-block",
          }}
        >
          amazing
        </span>{" "}
        <br />
        music sound.
      </Typography>

      <Typography
        component={"p"}
        sx={{
          color: theme.palette.grey[700],
          fontWeight: { xs: "500", lg: "400" },
          width: "fit-content",
          fontSize: { xs: "1rem", lg: "1.6rem" },
          mb: "1rem",
        }}
      >
        Experience music like never before
      </Typography>

      <Button
        onClick={() => {
          navigate("/shop");
        }}
        variant="contained"
        size="large"
        sx={{
          bgcolor: theme.palette.grey[600],
          color: theme.palette.grey[200],
          textTransform: "capitalize",
          borderRadius: "10px",
          fontSize: { xs: "1.1rem", sm: "1rem", lg: "1.4rem" },
          fontWeight: "400",
          padding: {
            xs: "0.5rem 1.1rem",
            sm: "0.6rem 1rem",
            md: "0.7rem 1.5rem",
            lg: "0.8rem 3.6rem",
          },
          letterSpacing: "-0.5px",
          width: {
            xs: "55%",
            sm: "60%",
            md: "60%",
            lg: "fit-content",
          },
          maxWidth: { xs: "13rem", lg: "17rem" },
          "&:hover": { transform: "scale(1.05,1.05) translate(5px,5px)" },
          transition: "0.5s",
        }}
      >
        Shopping Now
      </Button>
    </Box>
  );
}

export default HomeImageContainerContent;
