import { Box } from "@mui/material";
import ProductImages from "./ProductImages";
import ProductInfo from "./ProductInfo";
import { ProductType } from "../../Types/ProductTypes";

type ProductDetailsProps = Pick<
  ProductType,
  | "id"
  | "category"
  | "description"
  | "discount"
  | "discountEndDate"
  | "images"
  | "name"
  | "price"
  | "ratingValue"
  | "reviewsNumber"
>;

function ProductDetails({
  id,
  category,
  description,
  discount,
  discountEndDate,
  images,
  name,
  price,
  ratingValue,
  reviewsNumber,
}: ProductDetailsProps) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        mx: "auto",
        display: "grid",
        gap: { xs: "2rem", lg: "5rem" },
        gridTemplateColumns: { xs: "1fr", md: "repeat(2,1fr)" },
      }}
    >
      <ProductImages images={images} />

      <ProductInfo
        id={id}
        name={name}
        description={description}
        price={price}
        discount={discount}
        category={category}
        ratingValue={ratingValue}
        reviewsNumber={reviewsNumber}
        discountEndDate={discountEndDate}
      />
    </Box>
  );
}

export default ProductDetails;
