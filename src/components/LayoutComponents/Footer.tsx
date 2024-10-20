import FooterFirstRow from "../OneUseComponents/FooterFirstRow";
import FooterSecondRow from "../OneUseComponents/FooterSecondRow";
import { Box } from "@mui/material";

function Footer() {
  return (
    <Box
      sx={{
        minHeight: "14.5rem",
        bgcolor: "grey.600",
        width: "100%",
        color: "grey.50",
        padding: { xs: "3rem 2rem 3rem 2rem", md: "4rem 10rem 2rem 10rem" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "start",
        gap: { xs: "1.5rem", md: "1.5rem" },
      }}
    >
      {/* First row */}
      <FooterFirstRow />

      {/* Second Row */}
      <FooterSecondRow />
    </Box>
  );
}

export default Footer;
