import { Box } from "@mui/material";
import ProductCard from "../ProductCard/ProductCard";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useLocation } from "react-router-dom";
import EmptyDataMsg from "../EmptyDataMsg";
import { ProductType } from "../../Types/ProductTypes";
import CardSkeleton from "../ProductCard/CardSkeleton";

type ProductsGridListProps = {
  ProductArray: ProductType[];
  maxProductsNumber?: number;
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
};

function ProductsGridList({
  ProductArray,
  maxProductsNumber = 4 * 13,
  isLoading,
  isError,
  error,
}: ProductsGridListProps) {
  const pathname = useLocation().pathname;
  const isHomePage = pathname === "/home" || pathname === "/";
  const gridColsSm = useSelector((state: RootState) => state.ProductsGrid.sm);
  const gridColsLg = useSelector((state: RootState) => state.ProductsGrid.lg);

  return (
    <Box
      sx={{
        height: "fit-content",
        width: { xs: "96%", sm: "90%", md: "95%" },
        mx: "auto",
        mt: { xs: "2rem", md: "2rem", lg: "3rem" },
        display: "grid",
        columnGap: { xs: "1rem", xl: "3rem" },
        rowGap: { xs: "2rem", lg: "2rem", xl: "3rem" },
        placeItems: "center",
        gridTemplateColumns: {
          xs: `repeat(${isHomePage ? 2 : gridColsSm},1fr)`,
          md: `repeat(${isHomePage ? 4 : gridColsLg},1fr)`,
        },
      }}
    >
      {isLoading ? (
        Array.from({ length: maxProductsNumber }, (_, i) => (
          <CardSkeleton isInSlider={false} key={i} />
        ))
      ) : isError ? (
        <EmptyDataMsg message={error?.message as string} />
      ) : ProductArray?.length === 0 ? (
        <EmptyDataMsg message="No products found" />
      ) : (
        ProductArray?.map((product, i) => {
          if (i >= maxProductsNumber) return;
          return (
            <ProductCard
              key={product.id}
              id={product.id}
              isInSlider={false}
              image={product.image}
              name={product.name}
              price={product.price}
              tag={product.tag}
              discount={product.discount}
              ratingValue={product.ratingValue}
            />
          );
        })
      )}
    </Box>
  );
}

export default ProductsGridList;
