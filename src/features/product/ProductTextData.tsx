import { Box, Rating, Typography } from "@mui/material";
import { ProductType } from "../../Types/ProductTypes";
import { formateCurrency } from "../../utils/helpers";

type ProductTextDataProps = Pick<
  ProductType,
  | "ratingValue"
  | "name"
  | "description"
  | "price"
  | "discount"
  | "reviewsNumber"
  | "category"
>;

function ProductTextData({
  ratingValue,
  name,
  description,
  price,
  discount,
  reviewsNumber,
  category
}: ProductTextDataProps) {
  return (
    // Text Data containter
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: "0rem 0rem 0.5rem 0rem",
      }}
    >
      {/* Rating */}
      <Box sx={{ display: "flex", gap: "0.7rem" }}>
        <Rating
          name="read-only"
          precision={0.5}
          sx={{ color: "black" }}
          value={ratingValue}
          size="medium"
          readOnly
        />
        {reviewsNumber > 0 && (
          <Typography component={"p"} variant="body1">
            {reviewsNumber} Reviews
          </Typography>
        )}
      </Box>

      {/* Name */}
      <Typography component={"h4"} variant="h4" sx={{ fontWeight: "500" }}>
        {name}
      </Typography>

      {/* Category */}
      <Typography component={"h6"} variant="h6" sx={{ fontWeight: "500",textTransform:"capitalize" }}>
        Category: {category}
      </Typography>

      {/* description */}
      <Typography component={"p"} variant="body1" sx={{ color: "grey.300" }}>
        {description}
      </Typography>

      {/* Price After*/}
      <Box sx={{ display: "flex", gap: "1.5rem" }}>
        <Typography component={"h5"} variant="h5" sx={{ fontWeight: "bold" }}>
          {discount
            ? formateCurrency(price - discount)
            : formateCurrency(price)}
        </Typography>

        {/* Price Before Discount */}
        {discount ? (
          <Typography
            component={"h5"}
            variant="h5"
            sx={{
              fontWeight: "500",
              color: "grey.300",
              textDecoration: "line-through",
            }}
          >
            {formateCurrency(price)}
          </Typography>
        ) : null}
      </Box>
    </Box>
  );
}

export default ProductTextData;
