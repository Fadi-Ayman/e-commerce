import { Box, Button, Typography } from "@mui/material";
import { theme } from "../../styles/theme";
import { useNavigate } from "react-router-dom";

function NewArrivalsEveryWeek() {
  const navigate = useNavigate();

  return (
    <Box
      component={"section"}
      sx={{
        width: "100%",
        height: { xs: "45rem", sm: "22.5rem", md: "32rem", lg: "34rem" },
        mx: "auto",
        minHeight: { xs: "40rem", sm: "20rem", md: "30rem", lg: "32rem" },
        mt: { xs: "2.5rem", md: "3rem" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: { xs: "column-reverse", sm: "row-reverse" },
        overflow: "hidden",
      }}
    >
      {/* Section Image */}
      <Box
        sx={{
          width: { xs: "100%", lg: "90%" },
          // height: { xs: "20rem", sm: "20rem", md: "30rem", lg: "32rem" },
          height:"100%",
          order: { xs: 2, sm: 1 },
        }}
      >
        <img
          loading="lazy"
          style={{ width: "100%", height: "100%", objectFit: "fill" }}
          src="/newArrivalEveryWeek.png"
          alt="promotion"
        />
      </Box>

      {/* Section Content */}
      <Box
        sx={{
          width: "100%",
          // height: { xs: "20rem", sm: "20rem", md: "30rem", lg: "32rem" },
          height:"100%",
          order: { xs: 1, sm: 2 },
          display: "flex ",
          flexDirection: "column",
          gap: { xs: "0.5rem", sm: "0.5rem", md: "1rem", lg: "2rem" },
          justifyContent: { xs: "space-around", sm: "center" },

          padding: {
            xs: "5% 5%",
            sm: "5% 2%",
            md: "2% 2%",
            lg: "1.5% 2%",
          },
          bgcolor: theme.palette.grey[200],
        }}
      >
        {/* Title */}
        <Typography
          component={"h3"}
          color="primary"
          fontWeight={"bold"}
          sx={{
            fontSize: { xs: "1.5rem", sm: "1.3rem", md: "2.2rem", lg: "3rem" },
          }}
          textTransform={"capitalize"}
        >
          New Arrivals Every Week
        </Typography>

        <Typography
          variant="h3"
          component={"h3"}
          textTransform={"capitalize"}
          sx={{
            fontSize: {
              xs: "0.9rem",
              sm: "0.8rem",
              md: "0.95rem",
              lg: "1.15rem",
            },
            maxWidth: { xs: "100%", md: "90%", lg: "90%" },
            lineHeight: { xs: "18px", sm: "", md: "30px" },
            fontWeight: { xs: "500", lg: "400" },
          }}
        >
          Discover the excitement of our new arrivals, updated every week across
          five diverse categories! Each fresh selection brings unique products
          to elevate your shopping experience, ensuring you always find
          something special and trendy.
        </Typography>

        {/* caption */}
        <Typography
          variant="body2"
          component={"p"}
          textTransform={"capitalize"}
          sx={{
            fontSize: {
              xs: "0.9rem",
              sm: "0.8rem",
              md: "0.95rem",
              lg: "1.15rem",
            },
            maxWidth: { xs: "100%", md: "90%", lg: "90%" },
            lineHeight: { xs: "18px", sm: "", md: "30px" },
            fontWeight: { xs: "500", lg: "400" },
          }}
        >
          Our commitment to variety means you'll never run out of options.
          Explore innovative designs and the latest trends in fashion,
          electronics, home goods, beauty, and more. Dive in and find your
          ultimate favorites today!
        </Typography>

        <Button
          variant="outlined"
          sx={{
            bgcolor: theme.palette.grey[700],
            color: theme.palette.grey[50],
            width: "fit-content",
            padding: { xs: "0.4rem 0.7rem", md: "0.5rem 2rem" },
            fontSize: { xs: "0.8rem", md: "1rem" },
            borderRadius: "4px",
            mt: "0.5rem",
          }}
          onClick={() => navigate("/shop")}
        >
          Shop now
        </Button>
      </Box>
    </Box>
  );
}

export default NewArrivalsEveryWeek;
