import { Box } from "@mui/material";
import ContactForm from "./ContactForm";
import ContactMap from "./ContactMap";

function ContactFormAndMap() {
  return (
    <Box
      component={"section"}
      sx={{
        display: "flex",
        flexDirection: { xs: "column-reverse", md: "row" },
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        gap: { xs: "0.5rem", md: "1rem" },
      }}
    >
      <ContactForm />
      <ContactMap />
    </Box>
  );
}

export default ContactFormAndMap;
