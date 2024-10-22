import { Box, CardContent, Rating, Typography } from "@mui/material";
import { theme } from "../../styles/theme";
import { formateCurrency } from "../../utils/helpers";
import { ProductCardDetailsType } from "../../Types/ProductTypes";

function ProductCardDetails({
  ratingValue,
  price,
  name,
  isInSlider,
}: ProductCardDetailsType) {
  return (
    <Box
      sx={{
        width: "100%",
        flexDirection: "column",
        alignSelf: "start",
        display: "flex",
        gap: "0.2rem",
      }}
    >
      {/* Rating */}
      <Rating
        sx={{
          fontSize: { xs: "1.3rem", md: "1.4rem", lg: "1.5rem" },
          color: theme.palette.grey[400],
          pl: isInSlider ? " 0.4rem" : "0.5rem",
        }}
        name="read-only"
        value={ratingValue}
        precision={0.5}
        readOnly
      />
      {/* Product Name */}
      <CardContent

        sx={{
          padding: isInSlider
            ? "0px 0.4rem !important"
            : "0px 0.5rem !important",
          paddingBottom: {
            xs: "10px !important",
            md: "12px !important",
            lg: "15px !important",
          },
          textTransform:"capitalize"
        }}
      >
        <Typography
          variant="h6"
          component={"h6"}
          sx={{
            width: "100%",
            color: "black",
            fontWeight: "bold",
            fontSize: { xs: "14px", md: "15.5px", lg: "17px" },
            textAlign: "start",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            overflow: "hidden",
          }}
        >
          <strong>{name}</strong>
        </Typography>
        {/* Product Price */}
        <Typography
          variant="h6"
          component={"h6"}
          sx={{
            color: "black",
            fontWeight: "bold",
            fontSize: { xs: "14px", sm: "15.5px", lg: "17px" },
            textAlign: "start",
          }}
        >
          {formateCurrency(price)}
        </Typography>
      </CardContent>
    </Box>
  );
}

export default ProductCardDetails;
