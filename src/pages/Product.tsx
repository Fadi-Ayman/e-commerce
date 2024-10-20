import { Box, Divider } from "@mui/material";
import { useParams } from "react-router-dom";
import ProductDetails from "../features/product/ProductDetails";
import { theme } from "../styles/theme";
import SuggestedProducts from "../features/product/SuggestedProducts";
import Newsletter from "../components/Newsletter";

const FakeRating = 3.5;
const FakeReviewsNumber = 11;
const FakeProductName = "Tray Table";
const FakeDescription =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam soluta, optio, laboriosam impedit voluptatibus dolores vero facilis neque blanditiis atque deleniti. Ipsum voluptates asperiores totam nam cupiditate aspernatur excepturi reiciendis ullam, unde enim maxime delectus. Commodi consequuntur sapiente libero modi.";

const FakePrice = 299.99;
const FakeDiscount = 2;
const FakeCategory = "furniture";
const FakeDiscountEndDate = new Date("2025-10-02").toISOString();
const FakeImages = [
  "/Card.png",
  "/clothes.png",
  "/shoes.png",
  "/rebecca-grand.png",
];

function Product() {
  const { productId } = useParams<{ productId: string }>();

  // const productCategory;  // pass it to sugessted categories
  // Fetch Product using ID

  return (
    <>
      <Box
        sx={{
          width: { xs: "90%", sm: "75%", md: "90%", lg: "80%", xl: "75%" },
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          gap: { xs: "2rem", md: "3.5rem" },
          justifyContent: "start",
          alignItems: "center",
          my: { xs: "2rem", lg: "3rem" },
        }}
      >
        {productId && (
          <ProductDetails
            id={productId}
            category={FakeCategory}
            description={FakeDescription}
            discount={FakeDiscount}
            discountEndDate={FakeDiscountEndDate}
            images={FakeImages}
            name={FakeProductName}
            price={FakePrice}
            ratingValue={FakeRating}
            reviewsNumber={FakeReviewsNumber}
          />
        )}

        <Divider
          sx={{ width: "100%", backgroundColor: theme.palette.grey[500] }}
        />

        {/* here get suggested products based on category */}
        <SuggestedProducts category={FakeCategory} />
      </Box>

      <Newsletter />
    </>
  );
}

export default Product;
