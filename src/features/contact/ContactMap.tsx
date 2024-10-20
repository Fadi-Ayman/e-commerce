import { Box } from "@mui/material";

function ContactMap() {
  return (
    <Box
      sx={{
        width: "100%",
        display: "block",
        height: "28rem",
        overflow: "hidden",
      }}
    >
      <Box
        component={"iframe"}
        style={{ width: "100%", height: "100%", border: "none" }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27513.559672335836!2d31.16777915022749!3d30.45891557514204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145875f6592ee989%3A0xa0f7a3872335c0ce!2sBanha%2C%20Qism%20Banha%2C%20Banha%2C%20Al-Qalyubia%20Governorate!5e0!3m2!1sen!2seg!4v1728051906065!5m2!1sen!2seg"
      ></Box>
    </Box>
  );
}

export default ContactMap;
