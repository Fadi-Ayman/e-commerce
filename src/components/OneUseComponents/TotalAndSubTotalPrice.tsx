import { Box, Divider, Typography } from "@mui/material";
import { formateCurrency } from "../../utils/helpers";
import { DummyProducts } from "../../utils/dummyData";

function TotalAndSubTotalPrice() {
  const totalPrice = DummyProducts.reduce((total, product) => total + product.price, 0);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        width: "100%",
      }}
    >
      {/* Subtotal With Fake Value */}
      <Box
        component={"div"}
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Typography
          component={"span"}
          fontWeight={"400"}
          sx={{
            fontSize: { xs: "16px", md: "18px" },
            display: "block",
          }}
        >
          Subtotal
        </Typography>

        <Typography
          component={"span"}
          fontWeight={"500"}
          sx={{
            fontSize: { xs: "16px", md: "18px" },
            display: "block",
          }}
        >
          {formateCurrency(totalPrice / 20)}
        </Typography>
      </Box>

      <Divider />

      {/* Tatal With  Value of dummy products */}
      <Box
        component={"div"}
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Typography
          component={"span"}
          fontWeight={"500"}
          sx={{
            fontSize: { xs: "18px", md: "20px" },
            display: "block",
          }}
        >
          Total
        </Typography>

        <Typography
          component={"span"}
          fontWeight={"bold"}
          sx={{
            fontSize: { xs: "18px", md: "20px" },
            display: "block",
          }}
        >
          {formateCurrency(totalPrice)}
        </Typography>
      </Box>
    </Box>
  );
}

export default TotalAndSubTotalPrice;
