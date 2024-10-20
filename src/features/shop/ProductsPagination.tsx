import { Box, Pagination } from "@mui/material";
import useShopProductsOperations from "../../hooks/useShopProductsOperations";

function ProductsPagination() {
  const { totalPages, paginationPage, handlePageChange } = useShopProductsOperations();

  if (totalPages === 0) return <Box sx={{ margin: "3rem 0rem" }}></Box>;

  return (
    <Pagination
      color="primary"
      size={"large"}
      count={totalPages}
      page={paginationPage}
      onChange={handlePageChange}
      variant="outlined"
      shape="rounded"
      sx={{
        margin: "3rem 0rem",
        padding: "1rem",
        mx: "auto",
        width: "fit-content",
      }}
    />
  );
}

export default ProductsPagination;
