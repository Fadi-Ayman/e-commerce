import { Box } from "@mui/material";
import ProductsGridList from "../../components/SectionsGrid/ProductsGridList";
import ProductsTableOperations from "../../components/ProductsTableOperations/ProductsTableOperations";
import ProductsPagination from "./ProductsPagination";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import useShopProductsOperations from "../../hooks/productsHooks/useShopProductsOperations";

function ShopProducts() {
  const { currentProducts = [], isError, isLoading, error } =
    useShopProductsOperations();
  const MaxProductsNumber = useSelector(
    (state: RootState) => state.ProductsGrid.MaxProductsNumber
  );

  return (
    <Box
      sx={{
        width: {
          xs: "calc(99.8%)",
          sm: "calc(100% - (1rem*2))",
          md: "calc(100% - (1rem*2))",
          lg: "calc(100% - (5rem*2))",
          xl: "calc(100% - (7rem*2))",
        },
        mx: "auto",
      }}
    >
      {/* Sorting And Filtering */}
      <ProductsTableOperations />
      {/* Product List Of Page */}
      <ProductsGridList
        isLoading={isLoading}
        isError={isError}
        error={error}
        maxProductsNumber={MaxProductsNumber}
        ProductArray={currentProducts}
      />
      {/* Pagenation */}
      <ProductsPagination />
    </Box>
  );
}

export default ShopProducts;
