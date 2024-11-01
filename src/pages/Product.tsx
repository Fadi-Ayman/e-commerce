import { Box, Divider } from "@mui/material";
import { useParams } from "react-router-dom";
import ProductDetails from "../features/product/ProductDetails";
import { theme } from "../styles/theme";
import SuggestedProducts from "../features/product/SuggestedProducts";
import Newsletter from "../components/Newsletter";
import useSingleProduct from "../hooks/productsHooks/useSingleProduct";
import EmptyDataMsg from "../components/EmptyDataMsg";
import PageLoadingSpinner from "../components/PageLoadingSpinner";

function Product() {
  const { productId } = useParams<{ productId: string }>();

  const { isError, isLoading, error, product } = useSingleProduct(
    productId as string
  );

  
  if (isLoading) return <PageLoadingSpinner />;
  if (isError) return <EmptyDataMsg withGoHome height="100vh" message={error?.message as string}/>;

  const {
    id,
    name,
    description,
    price,
    images,
    discount,
    discountEndDate,
    category,
    ratingValue,
    reviewsNumber,
  } = product;

  return (
    <>
      <Box
        sx={{
          width: { xs: "90%", sm: "75%", md: "90%", lg: "80%", xl: "70%" },
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          gap: { xs: "2.5rem", md: "4rem" },
          justifyContent: "start",
          alignItems: "center",
          my: { xs: "2rem", lg: "3rem" },
        }}
      >
        {productId && !isError && (
          <ProductDetails
            id={id}
            category={category}
            description={description}
            discount={discount}
            discountEndDate={discountEndDate}
            images={images}
            name={name}
            price={price}
            ratingValue={ratingValue}
            reviewsNumber={reviewsNumber}
          />
        )}

        {!isError && (
          <>
            <Divider
              sx={{ width: "100%", backgroundColor: theme.palette.grey[500] }}
            />

            <SuggestedProducts category={category} id={id} />
          </>
        )}
      </Box>

      <Newsletter />
    </>
  );
}

export default Product;
