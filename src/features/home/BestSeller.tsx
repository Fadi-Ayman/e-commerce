import { Box, Typography } from "@mui/material";
import ProductsGridList from "../../components/SectionsGrid/ProductsGridList";
import { DummyProducts } from "../../utils/dummyData";
import { bestSellerMaxCount } from "../../utils/constants";

function BestSeller() {
  return (
    <Box
      component={"section"}
      sx={{
        width: { xs: "90%", sm: "86%", md: "88%", lg: "85%" },
        mx: "auto",
        mt: { xs: "3rem", md: "4.5rem" },
      }}
    >
      {/* Section Title  */}
      <Typography
        variant="h3"
        component={"h3"}
        fontSize={{ xs: "2rem", sm: "2rem", md: "2.5rem", lg: "2.8rem" }}
        sx={{
          fontWeight: "500",
          mx: { xs: "auto", md: "0" },
        }}
      >
        Best Seller
      </Typography>

      {/* Section Content */}
      <ProductsGridList
        ProductArray={DummyProducts}
        maxProductsNumber={bestSellerMaxCount}
      />
    </Box>
  );
}

export default BestSeller;
