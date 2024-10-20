import { Box, Typography } from "@mui/material";
import ContactMethods from "./ContactMethods";
import ContactFormAndMap from "./ContactFormAndMap";

function ContactSection() {
  return (
    <Box
      component={"section"}
      sx={{
        width: "90%",
        mx: "auto",
        mt: { xs: "2.5rem", md: "3rem" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
      }}
    >
      {/* Section Title  */}

      <Typography
        variant="h3"
        component={"h3"}
        fontSize={{ xs: "2.2rem", sm: "2.3rem", md: "2.4rem", lg: "2.7rem" }}
        sx={{
          fontWeight: "500",
          mx: { xs: "auto", md: "0" },
        }}
      >
        Contact
      </Typography>

      {/* Section Content */}
      <ContactMethods />
      <ContactFormAndMap />

    </Box>
  );
}

export default ContactSection;
