import { Box, Button, Typography } from "@mui/material";
import { theme } from "../../styles/theme";
import DayTimer from "../../components/DayTimer";
import { useNavigate } from "react-router-dom";
import { dayTimerDate } from "../../utils/constants";

function Promotion() {
  const navigate = useNavigate();

  return (
    <Box
      component={"section"}
      sx={{
        width: "100%",
        height: { xs: "40rem", sm: "20rem", md: "30rem", lg: "32rem" },
        mx: "auto",
        minHeight: { xs: "40rem", sm: "20rem", md: "30rem", lg: "32rem" },
        mt: { xs: "4rem", md: "6rem" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: { xs: "column", sm: "row" },
        overflow: "hidden",
      }}
    >
      {/* Section Image */}
      <Box
        sx={{
          width: { xs: "100%", lg: "90%" },
          height: { xs: "20rem", sm: "20rem", md: "30rem", lg: "32rem" },
          order: { xs: 2, sm: 1 },
        }}
      >
        <img
          loading="lazy"
          style={{ width: "100%", height: "100%", objectFit: "fill" }}
          src="/promotion.png"
          alt="promotion"
        />
      </Box>

      {/* Section Content */}
      <Box
        sx={{
          width: "100%",
          height: { xs: "20rem", sm: "20rem", md: "30rem", lg: "32rem" },
          order: { xs: 1, sm: 2 },
          display: "flex ",
          flexDirection: "column",
          gap: { xs: "0.3rem", sm: "0.5rem", md: "1rem" },
          padding: {
            xs: "5%",
            sm: "2% 5%",
            md: "6.5% 5.5%",
            lg: "5% 5%",
          },
          bgcolor: theme.palette.warning.light,
        }}
      >
        {/* Title */}
        <Typography
          variant="body1"
          component={"p"}
          color="primary"
          fontWeight={"bold"}
          textTransform={"uppercase"}
        >
          Promotion
        </Typography>

        {/* Offer */}
        <Typography
          variant="h3"
          component={"h3"}
          fontWeight={"500"}
          textTransform={"capitalize"}
          sx={{
            fontSize: { xs: "2rem", sm: "1.75rem", md: "2.5rem", lg: "3rem" },
          }}
        >
          Hurry up! 40% OFF
        </Typography>

        {/* caption */}
        <Typography
          variant="body2"
          component={"p"}
          textTransform={"capitalize"}
          fontWeight={"400"}
          sx={{
            fontSize: { xs: "0.8rem", md: "1.1rem", lg: "1.3rem" },
          }}
        >
          Thousands of high tech are waiting for you
        </Typography>

        {/* Expiration Date  */}
        <DayTimer date={dayTimerDate} timerLabel={"offer expires in :"} />

        {/* Button */}

        <Button
          variant="contained"
          sx={{
            bgcolor: theme.palette.grey[700],
            color: theme.palette.grey[50],
            width: "fit-content",
            padding: "0.5rem 2.8rem",
            borderRadius: "9px",
            mt: "0.5rem",
          }}
          onClick={() => navigate("/shop?category=electronics")}
        >
          Shop now
        </Button>
      </Box>
    </Box>
  );
}

export default Promotion;
