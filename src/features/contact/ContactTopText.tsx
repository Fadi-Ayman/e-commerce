import { Box, Typography } from "@mui/material";

function ContactTopText() {
  return (
    <Box
      component={"section"}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: {
          xs: "2rem 1rem 0rem ",
          sm: "2rem 2rem 1rem",
          md: "4rem 2rem 1rem",
          lg: "4rem 5rem 1rem",
          xl: "4rem 7rem 1rem",
        },
        maxWidth: { md: "80%", lg: "75%" },
      }}
    >
      <Typography
        sx={{
          fontSize: {
            xs: "1.5rem",
            sm: "2rem",
            md: "3rem",
          },
          fontWeight: "bold",
        }}
        color="inherit"
      >
        Discover quality electronics, furniture, shoes, and clothing to elevate
        your style—all in one place.
      </Typography>

      <Typography
        sx={{
          fontSize: {
            xs: "0.9rem",
            sm: "1rem",
            lg: "1.2rem",
          },
          fontWeight: "400",
        }}
        color="inherit"
      >
        We offer timeless furniture crafted from natural fabrics, featuring
        elegant curves, ample mirrors, and classic designs that fit any decor.
        Each piece captivates with its understated style, built to last for
        generations while reflecting the essence of each era, infused with a
        modern touch.
      </Typography>
    </Box>
  );
}

export default ContactTopText;
