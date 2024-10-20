import { Box, Typography } from "@mui/material";

function NameAndEmailDetailsForm({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={{ width: "100%" }}>
      {/* Account Details Title */}
      <Typography
        variant="h6"
        component={"h6"}
        fontWeight={"500"}
        sx={{ textAlign: "start", mb: "0.5rem", width: "100%" }}
      >
        Account Details
      </Typography>

      {/* Account Details Form */}
      <Box
        component={"div"}
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr " },
          gap: "1rem",
          width: "100%",
          "&>:last-child": {
            gridColumn: "1/3 !important",
          },
        }}
      >
        {children}
      </Box>
    </Box>
  );
}

export default NameAndEmailDetailsForm;
