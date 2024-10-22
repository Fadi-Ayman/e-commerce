import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { theme } from "../../styles/theme";
import { brandName } from "../../utils/constants";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function ContactAboutCard() {
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
        flexDirection: { xs: "column-reverse", sm: "row" },
        overflow: "hidden",
      }}
    >
      {/* Section Image */}
      <Box
        sx={{
          width: "100%",
          height: "100%",
          order: { xs: 2, sm: 1 },
        }}
      >
        <img
          style={{ width: "100%", height: "100%", objectFit: "fill" }}
          src="/ContactAboutCardImage.png"
          alt="promotion"
        />
      </Box>

      {/* Section Content */}
      <Box
        sx={{
          width: "100%",
          height: {xs:"fit-content",sm:"100%"},
          order: { xs: 1, sm: 2 },
          display: "flex ",
          flexDirection: "column",
          gap: { xs: "0.5rem", sm: "0.5rem", md: "1rem", lg: "2rem" },
          justifyContent: { xs: "center", sm: "center" },

          padding: {
            xs: "1.5rem 1.5rem",
            sm: "7% 6%",
            md: "6% 6%",
            lg: "7% 7%",
          },
          bgcolor: theme.palette.grey[200],
        }}
      >
        {/* Title */}
        <Typography
          component={"h3"}
          color="inherit"
          fontWeight={"500"}
          sx={{
            fontSize: { xs: "1.5rem", sm: "1.3rem", md: "2.2rem", lg: "3rem" },
          }}
          textTransform={"capitalize"}
        >
          About Us
        </Typography>

        <Typography
          variant="h3"
          component={"h3"}
          fontWeight={"400"}
          textTransform={"capitalize"}
          sx={{
            fontSize: {
              xs: "1rem",
              sm: "0.9rem",
              md: "1rem",
              lg: "1.15rem",
            },
            maxWidth: { xs: "100%", md: "90%", lg: "85%" },
            lineHeight: { xs: "25px", sm: "", md: "30px" },
            fontWeight: { xs: "500", md: "500", lg: "400" },
          }}
        >
          <span
            style={{
              fontWeight: "bold",
              letterSpacing: "1px",
            }}
          >
            {brandName}
          </span>{" "}
          is a lifestyle store in Egypt, offering a diverse range of
          electronics, furniture, shoes, and clothing. Established in 2024, our
          dedicated customer service team is here to assist you 24/7, ensuring
          you find everything you need for a stylish and functional life.
        </Typography>

        <Button
          variant="outlined"
          sx={{
            color: theme.palette.grey[700],
            width: "fit-content",
            fontSize: { xs: "0.8rem", md: "1rem" },
            padding: "0px",
            border: "none",
            borderRadius: "0px",
            mt: "0.5rem",
            borderBottom: "solid 1px black",
            paddingBottom: "0.2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            "&:hover": {
              gap: "1rem",
            },
            transition: "all 0.3s ease",
          }}
          onClick={() => navigate("/about")}
        >
          <span>About</span>
          <ArrowForwardIcon
            sx={{
              width: "1rem",
              display: "inline-block",
              color: "inherit",
            }}
          />
        </Button>
      </Box>
    </Box>
  );
}

export default ContactAboutCard;
