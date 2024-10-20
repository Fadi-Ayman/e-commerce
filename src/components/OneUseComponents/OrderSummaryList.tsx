import { Box, Divider } from "@mui/material";

function OrderSummaryList({ children }: { children: React.ReactNode }) {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        mb: "2.5rem",
      }}
    >
      {children}
      <Divider/>
    </Box>
  );
}

export default OrderSummaryList;
