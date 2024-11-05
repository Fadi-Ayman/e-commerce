import { Box, Typography } from "@mui/material";

type WishListProductProps = {
  productName: string;
  productImage: string;
};

function WishListProduct({ productName, productImage }: WishListProductProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: { xs: "0.6rem", md: "1rem" },
        alignItems: "start",
        padding: "0.5rem 0rem",
        overflow: "visible",
        whiteSpace: "nowrap",
        textWrap: "nowrap",
      }}
    >
      <Box
        sx={{
          width: { xs: "70px", md: "150px" },
          height: { xs: "85px", md: "170px" },
        }}
      >
        <img
          style={{ width: "100%", height: "100%" }}
          src={productImage}
          alt={productName}
        />
      </Box>

      <Typography
        component={"h6"}
        sx={{
          fontSize: { xs: "11px", md: "16px" },
          textTransform: "capitalize",
          fontWeight: "bold",
          overflow: "visible",
          whiteSpace: "nowrap",
          textWrap: "nowrap",
          width: { xs: "70px", md: "150px" },
          ml: { xs: "0.1rem", md: "0.5rem" },
        }}
      >
        {productName}
      </Typography>
    </Box>
  );
}

export default WishListProduct;
