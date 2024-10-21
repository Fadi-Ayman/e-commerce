import { Box, Divider } from "@mui/material";

function OrderSummaryList({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        mb: "1.5rem",
      }}
    >
      {children}
      <Divider/>
    </Box>
  );
}

export default OrderSummaryList;
