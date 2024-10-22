import { Box, Divider } from "@mui/material";
import ProductTextData from "./ProductTextData";
import ProductDiscountOffer from "./ProductDiscountOffer";
import ProductControls from "./ProductControls";
import { ProductType } from "../../Types/ProductTypes";

type ProductInfoProps = Pick<
  ProductType,
  | "id"
  | "name"
  | "description"
  | "category"
  | "price"
  | "discount"
  | "discountEndDate"
  | "ratingValue"
  | "reviewsNumber"
  | "image"
>;

function ProductInfo({
  id,
  name,
  description,
  category,
  price,
  discount,
  discountEndDate,
  ratingValue,
  reviewsNumber,
  image,
}: ProductInfoProps) {
  return (
    <Box
      sx={{
        width: "100%",
        height: "fit-content",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        padding: discountEndDate ? "1.5rem" : "2rem 1rem",
        border: "1.5px solid black",
        borderRadius: "10px",
      }}
    >
      {/* Text Data */}
      <ProductTextData
        name={name}
        description={description}
        ratingValue={ratingValue}
        price={price}
        discount={discount}
        reviewsNumber={reviewsNumber}
        category={category}
      />

      <Divider />

      {/* Discount Offer If There is a discount  ( this component conaitns a <Divider/>)*/}
      <ProductDiscountOffer
        discountEndDate={discountEndDate}
        discount={discount}
      />

      {/* ProductControls  */}
      <ProductControls
        image={image}
        name={name}
        price={price}
        id={id}
      />
    </Box>
  );
}

export default ProductInfo;
