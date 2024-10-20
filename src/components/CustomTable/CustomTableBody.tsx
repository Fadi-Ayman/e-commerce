import { Box } from "@mui/material";

export default function CustomTableBody({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box
      role={"tbody"}
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        padding: { xs: "0.5rem", md: "1rem" },
        overflow: "auto",

      }}
    >
      {children}
    </Box>
  );
}
